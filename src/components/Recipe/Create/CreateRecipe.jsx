import React, {useState} from 'react';
import './CreateRecipe.css'

const CreateRecipe = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputDetalle, cambiarInputDetalle] = useState('');
	const [inputMedida, cambiarInputMedida] = useState('');
  	const [inputCantidad, cambiarInputCantidad] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {


		cambiarInputNombre(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCantidad
	const handleInputCantidad = (e) => {
		cambiarInputCantidad(e.target.value);
	}

	return (
	  <div>

		<div className='contenedor'>

		  <div className='receta'>Crear Receta</div>

			<form action="" onSubmit={handleSubmit} className="formulario">
			 
			  <div className='seccion_1'>
				<div > 
				<a >
                  <img className='logo' src="https://media.istockphoto.com/id/467416670/es/foto/bisonte-pasto-hamburguesa.jpg?s=1024x1024&w=is&k=20&c=oqFXPuZFw0iixJbmYW8xRk1S45HHP8gB0vn9WdFshdU="/>
                </a>
				</div>
				
			      <div className = "seccion_2"> 
				    <div>
					  <label htmlFor="nombre">Nombres*</label>
					  <input className='nombre'
						type="text"
						name="nombre"
						placeholder="Nombre..."
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre} />
				    </div>

				    <div>
					  <label htmlFor="detalle">Detalle*</label>
					  <input className='detalle'
						type="text"
						name="detalle"
						id="detalle"
						 />
					 
				    </div>

					<div className='seccion_3'>	

					  <div>
						<label htmlFor="cantidad">Cantidad Prod.</label>
						<input className='cantidad_producida'
							type="number"
							name="cantidad"
							placeholder="Cantidad..."
							id="cantidad"
							onChange={handleInputCantidad} />
					  </div>

					  <div>
						<label htmlFor="tipo_medida">Tipo de Medida*</label>
						<select>
							<option>Unidades</option>
							<option value="litro">*-- Litros --*</option>
							<option value="ml">*-- Mililitros --*</option>
							<option value="litro">*-- Onzas --*</option>
							<option value="litro">*-- Kilos --*</option>
							<option value="litro">*-- Libras --*</option>
							<option value="gr">*-- Gramos --*</option>
					    </select>
					  </div>
					</div>
				  </div> 
			  </div>

        		<div className='seccion_4'>

				  <div>
					<nav>
					<label htmlFor="ingredientes">Añadir Ingredientes*</label>
					<select>
						<option>Añadir Ingredientes....</option>
						<option value="Harina">  *-- Harina Trigo Leudante -- *</option>
						<option value="Carne">*-- Carne --*</option>
						<option value="Pollo">*-- Pechuga de Pollo --*</option>
						<option value="Papa">*-- Papa --*</option>
						<option value="Lechuga">*-- Lechuga --*</option>
						<option value="Agua">*-- Agua --*</option>
						<option value="Sal">*-- Sal --*</option>
					  </select>
					  </nav>
				  </div>

				  <div>
					<label htmlFor="cantidad">Cantidad*</label>
						<input className='cantidad_ingrediente'
							type="number"
							placeholder= "Cantidad..."
							name="cantidad"
							id="cantidad"
							onChange={handleInputCantidad} />
				  </div>

				  <div>
				    <label htmlFor="tipo_medida">Tipo de Medida*</label>
					  <select>
						<option>Unidades</option>
						<option value="litro">*-- Litros --*</option>
						<option value="ml">*-- Mililitros --*</option>
						<option value="litro">*-- Onzas --*</option>
						<option value="litro">*-- Kilos --*</option>
						<option value="litro">*-- Libras --*</option>
						<option value="gr">*-- Gramos --*</option>
					  </select>		
				  </div>

				  <div>
					<label htmlFor="t_desperdicio">Tasa Desp.*</label>
					<input className='t_desperdicio'
					  type="int"
					  name="desperdicio"
					  id="desperdicio"/>
				  </div>
				  <div>
					<nav><button type="submit">Añadir</button></nav>
				  </div>
				</div>

					<div className='seccion_4'>
						<div>
						<nav>
						<label htmlFor="ingredientes">Eliminar Ingredientes*</label>
						<select>
							<option>Eliminar Ingredientes....</option>
							<option value="Harina">  *-- Harina Trigo Leudante -- *</option>
							<option value="Carne">*-- Carne --*</option>
							<option value="Pollo">*-- Pechuga de Pollo --*</option>
							<option value="Papa">*-- Papa --*</option>
							<option value="Lechuga">*-- Lechuga --*</option>
							<option value="Agua">*-- Agua --*</option>
							<option value="Sal">*-- Sal --*</option>
							</select>
							</nav>
						</div>

						<div>
						<label htmlFor="cantidad">Cantidad*</label>
							<input className='cantidad_ingrediente'
								type="number"
								placeholder= "Cantidad..."
								name="cantidad"
								id="cantidad"
								onChange={handleInputCantidad} />
						</div>

						<div>
						<label htmlFor="tipo_medida">Tipo de Medida*</label>
							<select>
							<option>Unidades</option>
							<option value="litro">*-- Litros --*</option>
							<option value="ml">*-- Mililitros --*</option>
							<option value="litro">*-- Onzas --*</option>
							<option value="litro">*-- Kilos --*</option>
							<option value="litro">*-- Libras --*</option>
							<option value="gr">*-- Gramos --*</option>
							</select>		
						</div>

						<div>
						<label htmlFor="t_desperdicio">Tasa Desp.*</label>
						<input className='t_desperdicio'
							type="int"
							name="desperdicio"
							id="desperdicio"/>
						</div>
						<div>
						<nav><button type="submit">Borrar</button></nav>
						</div>

				    </div>

				    <div>
					  <label htmlFor='añadidos'>Ingredientes Añadidos</label>
					  <input className='añadidos'
						type="text"
						name="añadidos"
						placeholder="Ingredientes añadidos..."
						id="detalle"
						/>
				    </div>
					
				  <button type="submit">Enviar</button>
			</form>
         </div>
	  </div>
	);
}
 
export default CreateRecipe;




































/*import React from 'react';
import './Form.css'

export default function  Form() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleChangeName(e) {
      setUsername(e.target.value);
    }
    function handleChange(evento) {
      setPassword(evento.target.value);
    }

  return (
    
    //onSubmit={(e) => { e.preventDefault() } }  

    <form>
      <div className = 'container_1'> 

        <div className='crear_receta'>
          <h3>Crear Receta</h3>
        </div>

        <div className = "container_2">  
          <div>
            
          </div>
          <div className='logo'>
            <h5>logo</h5>
          </div>
          
          <label><b>Nombre* : </b></label>
          <input type="text" name="name" placeholder ="Nombre" value = {username} 
          onChange={(e) => handleChangeName(e)} />

          <div>
            <label><b>Tipo Medida* : </b></label>
            <input type="text" name="medida" placeholder = "Opciones" value = {password} 
            onChange={(evento) => handleChange(evento)} />
          </div>

          <div>
            <label><b>Cantidad* : </b></label>
            <input type="text" name="cantidad" value = {password} 
            onChange={(evento) => handleChange(evento)} />
          </div>

          <div>
            <label><b>Agregar Ingredientes : </b></label>
            <input type="text" name="ingrediente" placeholder = "Agregar Ingredientes..." value = {password} 
            onChange={(evento) => handleChange(evento)} />
          </div>

          <div>
            <label><b>Tabla de Ingredientes : </b></label>
            <input type="text" name="Tabla_ingrediente" placeholder ="Tabla de Ingredientes " value = {password} 
            onChange={(evento) => handleChange(evento)} />
          </div>

          <div>
            <label><b>Detalle : </b></label>
            <input type="text" name="detalle" placeholder = "detalle" value = {password} 
            onChange={(evento) => handleChange(evento)} />
          </div>

          </div>
          
      </div>
      </form>
    )
}*/