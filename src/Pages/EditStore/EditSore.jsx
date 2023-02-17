import React from "react";
import EditStore from "../../components/CreateEditStore/CreateEditStore";
import NavBar from "../../Shared/NavBar/NavBar";
import styles from './EditStore.module.css';

const CreateEditStore = (props) => {
  return (
    <div>
      <NavBar />
      <div className={styles.page}>
      <EditStore />
      </div>
    </div>
  );
};
export default CreateEditStore;
