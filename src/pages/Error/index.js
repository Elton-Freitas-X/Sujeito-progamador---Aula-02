import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
export default function Error(){
    return(
        <Container>
            <img src="/notfound.png" alt="Pagina não encontrada"/>
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </Container>
    )
}