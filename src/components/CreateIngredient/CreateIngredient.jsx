import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./CreateIngredient.module.css";

const CreateIngredientForm = (props) => {
    const [numForm, setNumForm] = useState([1]);

    const handleNumForm = (event) => {
        event.preventDefault();
        setNumForm([...numForm, 1]);
    };

    return (
        <div className={style.createIngredient}>
            <div className={style.container}>
                <Link to="/ingredient">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5392/5392869.png"
                        alt=""
                    />
                </Link>
                <h1>Crear Ingredientes</h1>
                <form>
                    <div className={style.description}>
                        <span>Nombre</span>
                        <span>Unidad de medida</span>
                    </div>
                    <div className={style.ingredients}>
                        {numForm.map((element, index) => (
                            <div className={style.inputs} key={index}>
                            <input type="text" name={`name${index}`} />
                                <select name={`value${index}`} id="">
                                    <option value="">un</option>
                                    <option value="">gr</option>
                                    <option value="">ml</option>
                                    <option value="">oz</option>
                                </select>
                            </div>
                        ))}
                        <button onClick={handleNumForm} className={style.buttonNew}>
                            Nuevo
                        </button>
                    </div>
                    <button className={style.submit}>Crear ingredientes</button>
                </form>
            </div>
        </div>
    );
};

export default CreateIngredientForm;
