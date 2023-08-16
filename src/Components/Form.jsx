import React from "react"
import { useState } from "react"


const Form = ({persona, setPersona, setShow}) => {


    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if ((persona.nombre.length > 3 && persona.nombre.length[0] != ' ') && persona.cantanteFavorito.length > 6 ) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    return (
        <div>
            <form style={{
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "12px", 
                        backgroundColor: "#000000",
                        borderRadius: "8px",
                        padding: "20px",
                        margin: "50px",
                        maxWidth: "300px" }}>
                <h2>Cuentame sobre ti: </h2>
                <label >Dime tu nombre: </label>
                <input type="text" onChange={(e) => setPersona({...persona, nombre: e.target.value})} />
                <label>Dime tu cantante favorito: </label>
                <input type="text" onChange={(e) => setPersona({...persona, cantanteFavorito: e.target.value})} />
                <button onClick={handleSubmit}>Enviar</button>
                {error && <h3 style={{color: 'red', maxWidth: "200px"}}>Por favor chequea que la información sea correcta</h3>}
            </form>
        </div>
    )
}

export default Form