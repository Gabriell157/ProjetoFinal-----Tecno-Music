import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ComentarItens from './comentarItens'
import CurtirItens from './curtirItens'
import TelaCadastro from './telaCadastro'
import TelaInicial from './telaInicial'
import TelaInserirItem from './telaInserirItem'
import TelaLogin from './telaLogin'
import MeusItens from './telaMeusItens'



function Apps() {
    return <di>
        <h1>LOBBY  :)</h1>

        <Router>
            <Switch>
                <Route path="/cadastro" >
                    <TelaCadastro />
                </Route>
                <Route path="/login" >
                    <TelaLogin />
                </Route>
                <Route path="/inseriritem" >
                    <TelaInserirItem />
                </Route>
                <Route path="/inicio" >
                    <TelaInicial />
                </Route>
                <Route path="/meusitens" >
                    <MeusItens />
                </Route>
                <Route path="/curtiritens" >
                    <CurtirItens />
                </Route>
                <Route path="/comentaritens" >
                    <ComentarItens />
                </Route>
            </Switch>
        </Router>


    </di>
}



export default Apps