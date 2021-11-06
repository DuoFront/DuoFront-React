import React, {useContext, useEffect} from 'react';
import { Artigo } from '../../../Components/Artigo';
import Codepen from "react-codepen-embed";
import image from '../../../assets/img/cursoHTML/text.png'
import styles from '../styles.module.scss'
import { ArtigoContext } from '../../../hooks/Artigo';

export function Aula2(){

  const {setArtigoAtivo} = useContext(ArtigoContext)

  useEffect(()=> {
    setArtigoAtivo(2)
  },[])

  return(
    <Artigo>
        <h2>Tags de texto</h2>
        <section >
          <p>
            Bem vindo a sua primeira lição! Aqui iremos abordar sobre as
            diferentes tags html que usamos quando tratamos de texto.
          </p>
          <p>
            Esses são os elementos de cabeçalho que temos:
          </p>
          <Codepen hash="RwZregg" user="paolaguedes" preview={false}/>
          
          <p>
            Sua ordem vai do mais importante para o menos. Dessa forma, o h1 é
            utilizado quando queremos tratar de títulos, o h2 em subtítulos e
            assim por diante. Note também que por padrão essas tags já tem um
            tamanho pré-estabelecido, <strong>futuramente</strong> veremos
            também como personalizar isso.
          </p>
          <p>
            Outra tag muito importante é a &lt;p&gt; que indica que um parágrafo
            está sendo adicionando ao corpo da nossa página.
          </p>
          <p>
            A tag &lt;a&gt; indica um link. E para adicionarmos o caminho do
            link usamos o atributo href=" caminho " dentro da tag a. Por padrão,
            a página que linkamos abre na guia atual, mudamos esse padrão ao por
            o atributo target="_blank".
          </p>
          <img
            className={styles.image}
            src={image}
            alt="paragrafo e link"
          />
          <p>
            Existem também tags próprias do html que servem para dar uma
            estilizada nos textos criados. São elas:
          </p>
          <ul>
            <li>strong : deixa o texto em negrito;</li>
            <li>em : deixa o texto em itálico;</li>
            <li>
              b : deixa o texto em negrito (não usamos mais);
            </li>
            <li>
              i : deixa o texto em itálico (não usamos mais);
            </li>
          </ul>
          <h2>
            <strong>Vamos praticar?</strong>
          </h2>
          <ol>
            <li>
              Abra o
              <a href="https://codepen.io" target="_blank"> Codepen</a> (ou use o
              campo de código abaixo, sim ele é editável);
            </li>
            <li>
              Se abriu o Codepen clique em <strong>Start Coding</strong> no menu
              lateral esquerdo;
            </li>
            <li>Digite o código abaixo no HTML;</li>
            <li>
              Crie seu próprio código usando sua criatividade! (exemplo: crie um
              currículo)
            </li>
          </ol>
          <Codepen hash="ExvPerJ" user="paolaguedes"/>
         
        </section>
    </Artigo>
  )
}