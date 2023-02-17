import React from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/Actions/actions";
import styles from "./Filter.module.css";

const Filter = () => {

    const dispatch = useDispatch()

    const handleChangeFilter = () => {
        dispatch(filter())
    };

    return (
        <div className={styles.filter}>
            <div>
                <label htmlFor="">Ordenar</label>
                <select name="" id="">
                    <option value="menor">menor precio</option>
                    <option value="mayor">mayor precio</option>
                </select>
            </div>
            <div>
                <label htmlFor="">filtrar</label>
                <select name="" id="" onChange={handleChangeFilter}>
                    <option value="false">Todos los menús</option>
                    <option value="true">Recomendados</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
