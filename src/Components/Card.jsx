import React from 'react'



const Card = ({persona}) => {

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            gap: "12px", 
            backgroundColor: "#000000",
            borderRadius: "8px",
            padding: "20px",
            margin: "20px" }}>

            <h3>Hola {persona.nombre}!</h3> 
            <h3>Tambien me gusta {persona.cantanteFavorito}!</h3>
        </div>
    )
    
}

export default Card
