import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
// import { registerUser } from './firebase/useAuth';
// import { saveUserInfo } from './firebase/useFirestore';
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Registra el usuario usando Firebase Authentication
      const userCredential = await registerUser(formData.email, formData.password);
      console.log("Usuario registrado con éxito:", userCredential.user);

      // Opcional: Guarda información adicional en Firestore
      // await saveUserInfo(userCredential.user.uid, {
      //   firstName: formData.firstName,
      //   lastName: formData.lastName,
      //   username: formData.username,
      //   favoriteGame: formData.favoriteGame,
      // });

      // Manejar el éxito del registro, como redirigir al usuario o limpiar el formulario
    } catch (error) {
      console.error("Error en el registro:", error);
      // Manejar errores de registro aquí, como mostrar un mensaje al usuario
    }
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
