import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import firestore from './firebase';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Verificar si los campos de usuario y contraseña están vacíos
    if (!formData.username || !formData.password) {
      setErrorMessage('Por favor, complete todos los campos.'); // Establecer mensaje de error
      return;
    }

    try {
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', formData.username), where('password', '==', formData.password));

      // Realizar la consulta
      const querySnapshot = await getDocs(q);
      
      // Establecer el mensaje de error antes de verificar si el querySnapshot está vacío
      setErrorMessage('Credenciales incorrectas.'); // Establecer mensaje de error

      if (!querySnapshot.empty) {
        // Usuario encontrado, iniciar sesión exitoso
        console.log("Inicio de sesión exitoso");
        navigate('/inicio');
      } else {
        // Reiniciar el formulario
        setFormData({ username: '', password: '' });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Mostrar mensaje de error si existe */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
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
