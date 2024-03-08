import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

interface LoginFormState {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {

  const [formData, setFormData] = useState<LoginFormState>({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="username" className={styles.label}>Nombre de usuario</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={styles.formInput} />
        </div>
        <button type="submit" className={styles.submitButton}>Iniciar Sesión</button>
      </form>
      <div className={styles.switchFormLinkContainer}>
        ¿No tienes una cuenta? <Link to="/" className={styles.switchFormLink}>Regístrate</Link>
      </div>
    </div>
  );
};

export default LoginForm;
