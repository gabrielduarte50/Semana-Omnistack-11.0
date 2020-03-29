import React from "react";
import Routes from "./routes";
import "./global.css";

//JSX - Java Script XML
//Trabalhamos com HTML ou o XML dentro do JavaScript
/*****  CONCEITOS
 * Componente é JS que retorna HTML. Normalmente criamos componentes quando sbemos que podemos usar
 * esse elemento varias vezes, como um footer ou um header
 * Propriedades é a ideia de atributo do html, como id, class,
 * Estado armazenar infos. modificar,excluir e outras coisas.
 *  alem disso o Estado tem imutabilidade e precisa ser modificado com outra funçao (set)
 */

function App() {
  return <Routes />;
}

export default App;
