import React, { useState } from 'react'


function TelaCadastro() {

    const [pessoa, alteraPessoa] = useState({})


    function handleChange(evento) {
        const copia = { ...pessoa }
        copia[evento.target.name] = evento.target.value
        alteraPessoa(copia)

    }

    function salvarCadastro() {

    }

    return <form>

        <input onChange={handleChange} type="text" name="nome" id="1" />
        <input onChange={handleChange} type="email" name="email" id="2" />
        <input onChange={handleChange} type="text" name="senha" id="3" />
        <input onChange={handleChange} type="text" name="bio" id="4" />
        <input onChange={handleChange} type="text" name="foto" id="5" />

        <p>Seu Nome : {pessoa.nome}</p>
        <p>Seu E-mail : {pessoa.email}</p>
        <p>Sua Senha : {pessoa.senha}</p>
        <p>Sua Biografia : {pessoa.bio}</p>
        <img src={pessoa.foto} alt="foto"/>

        <button type="button" onClick={salvarCadastro}>Cadastrar</button>

    </form>

}
export default TelaCadastro 