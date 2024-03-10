import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import firestore from './firebase'; // Importa la instancia de Firestore
import styles from './RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    favoriteGame: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false); // Estado para controlar la redirección

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!formData.firstName || !formData.lastName || !formData.username || !formData.email || !formData.password || !formData.favoriteGame) {
      setErrorMessage('Por favor, complete todos los campos.'); // Establece el mensaje de error
      return;
    }

    try {
      const usersCollectionRef = collection(firestore, 'users'); // Referencia a la colección 'users'
      await addDoc(usersCollectionRef, formData); // Agregar un nuevo documento con los datos del formulario
      console.log("Usuario registrado correctamente");
      setRedirect(true); // Establece el estado de redirección a verdadero
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  // Si el estado de redirección es verdadero, redirige al usuario a la página de inicio de sesión
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Registrar Usuario</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Agregar el mensaje de error */}
        {errorMessage && <p className={`errorMessage ${styles.errorMessage}`}>{errorMessage}</p>}
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
