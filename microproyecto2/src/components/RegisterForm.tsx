import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import styles from './RegisterForm.module.css';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  favoriteGame: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    favoriteGame: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
    navigate('/login'); 
};

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Registrar Usuario</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="firstName" className={styles.label}>Nombre</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="lastName" className={styles.label}>Apellido</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="username" className={styles.label}>Nombre de Usuario</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <label htmlFor="favoriteGame" className={styles.label}>Videojuego Preferido</label>
          <input type="text" name="favoriteGame" id="favoriteGame" value={formData.favoriteGame} onChange={handleChange} className={styles.formInput} />
        </div>
        <button type="submit" className={styles.submitButton}>Registrar</button>
      </form>
      <p className={styles.switchFormText}>¿Ya tienes una cuenta? <Link to="/login" className={styles.switchFormLink}>Inicia sesión</Link></p>
    </div>
  );
};

export default RegisterForm;