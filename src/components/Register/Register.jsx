import React from 'react'
import styles from "./Register.module.css"

const Register = () => {
  return (
      <div className={styles.register}>
          <div className={styles.wellcome}>
              <h1>Register</h1>
          </div>
          <div className={styles.info}>
              <div className={styles.image}>
                  
              </div>
              <form className={styles.data}>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Name*</label>
                      <input type="text" name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Lastname*</label>
                      <input type="text" name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="name" >Username*</label>
                      <input type="text" name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Mail*</label>
                      <input type="text" name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Password*</label>
                      <input type="text" name='name'/>
                  </div>
                  <div className={styles.inputs}>
                      <label htmlFor="name">Phone*</label>
                      <input type="text" name='name'/>
                  </div>
                  <button>Register</button>
              </form>
          </div>
      </div>
  );
}

export default Register