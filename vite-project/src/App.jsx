import { useState } from "react";
import logo from "./assets/logo-lc.png";
import "./App.css";
import {Navegacao} from "./Navegacao.jsx";
import {ItemCardapio} from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio.js";


export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <>
            <img src={logo} alt="" className="capa" />
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
            <div className="menu">
              {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
            </div>
            <div class="copyright">
            <p>Copyright 2024- Dev Luan Chaves- Todos direitos reservados</p>
        </div>
         </>
}