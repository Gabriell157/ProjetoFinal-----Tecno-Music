import React, { useState } from 'react'


function TelaLogin() {

    const [pessoa, alteraLogin] = useState({})

    function handleChange(evento) {
        const copia = { ...pessoa }
        copia[evento.target.name] = evento.target.value
        alteraLogin(copia)

    }

    function fazerLogin () {

    }

    return <form>

        <input onChange={handleChange} type="email" name="email" id="01" />
        <input onChange={handleChange} type="senha" name="senha" id="02" />

        <button type="button" onClick={fazerLogin}>Entrar</button>

    </form>



}



export default TelaLogin