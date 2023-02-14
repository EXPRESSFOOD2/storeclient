import React from 'react'
import styles from "./Register.module.css"
import Title from '../../Shared/Title/Title';

const Register = () => {
  return (
      <div className={styles.register}>
          <Title data="Register"/>
          <div className={styles.info}>
              <div className={styles.image}>
                  
              </div>
              <form className={styles.data}>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Name*</label>
                      <input type="text" placeholder='name' name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="lastname">Lastname*</label>
                      <input type="text" placeholder='lastname' name='lastname'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="username" >Username*</label>
                      <input type="text" placeholder='username' name='username'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="mail">Mail*</label>
                      <input type="text" placeholder='mail' name='mail'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="password">Password*</label>
                      <input type="text" placeholder='password' name='password'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="phone">Phone*</label>
                      <input type="text" placeholder='phone' name='phone'/>
                  </div>
                  <button>Register</button>
              </form>
          </div>
      </div>
  );
}

export default Register