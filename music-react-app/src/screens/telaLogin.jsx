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
        <div>
        <input onChange={handleChange} type="email" name="email" id="01" />
        </div>
        <div>
        <input onChange={handleChange} type="password" name="senha" id="02" />
        </div>
        <div>
        <button type="button" onClick={fazerLogin}>Entrar</button>
        </div>

    </form>



}



export default TelaLogin