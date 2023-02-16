import React from "react";
import Title from "../../Shared/Title/Title";
import img from "./image/image-1.jpg";
import styles from "./Register.module.css";

const Register = ({ formik }) => {
  console.log(formik.values);
  return (
    <div className={styles.register}>
      <Title data="Regístrate" />
      <div className={styles.container}>
        <form className={styles.formBox} onSubmit={formik.handleSubmit}>
          <div className={styles.formLeft}>
            <img src={img} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.logoForm}
            >
              <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
              <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
            </svg>
          </div>
          <div className={styles.formRight}>
            <div className={styles.inputs}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                placeholder="nombre"
                className={formik.errors.name ? styles.errorInput : styles.ok}
                id="name"
                name="name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <label className={styles.errorText}>{formik.errors.name}</label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                placeholder="apellido"
                className={
                  formik.errors.lastname ? styles.errorInput : styles.ok
                }
                id="lastname"
                name="lastname"
                {...formik.getFieldProps("lastname")}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <label className={styles.errorText}>
                  {formik.errors.lastname}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                placeholder="nombre de usuario"
                className={
                  formik.errors.username ? styles.errorInput : styles.ok
                }
                id="username"
                name="username"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <label className={styles.errorText}>
                  {formik.errors.username}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="phone">Telefono</label>
              <input
                type="text"
                placeholder="telefono"
                className={formik.errors.phone ? styles.errorInput : styles.ok}
                id="phone"
                name="phone"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <label className={styles.errorText}>
                  {formik.errors.phone}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="correo"
                className={formik.errors.email ? styles.errorInput : styles.ok}
                id="email"
                name="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <label className={styles.errorText}>
                  {formik.errors.email}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="contraseña"
                className={
                  formik.errors.password ? styles.errorInput : styles.ok
                }
                id="password"
                name="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <label className={styles.errorText}>
                  {formik.errors.password}
                </label>
              ) : null}
            </div>
            {/*//? ******************************************** */}
            <div className={styles.inputs}>
              <label htmlFor="">Password_question</label>
              <input
                type="text"
                placeholder="contraseña"
                id="password_question"
                name="password_question"
                {...formik.getFieldProps("password_question")}
              />
              {formik.touched.password_question &&
              formik.errors.password_question ? (
                <label className={styles.errorText}>
                  {formik.errors.password_question}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <label htmlFor="">password_answer</label>
              <input
                type="text"
                placeholder="contraseña"
                id="password_answer"
                name="password_answer"
                {...formik.getFieldProps("password_answer")}
              />
              {formik.touched.password_answer &&
              formik.errors.password_answer ? (
                <label className={styles.errorText}>
                  {formik.errors.password_answer}
                </label>
              ) : null}
            </div>
            <div className={styles.inputs}>
              <button>Registrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
