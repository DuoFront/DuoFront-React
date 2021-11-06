import React, {useEffect} from 'react';
import {Artigo} from '../../../Components/Artigo';
import imagem1 from '../../../assets/img/cursoHTML/lista.png'
import imagem2 from '../../../assets/img/cursoHTML/listaol.png'
import imagem3 from '../../../assets/img/cursoHTML/listadl.png'
import Codepen from 'react-codepen-embed'
import styles from '../styles.module.scss'
import { useArtigo } from '../../../hooks/Artigo';
export function Aula4(){
  
  const {setArtigoAtivo} = useArtigo()

  useEffect(()=>{
    setArtigoAtivo(4)
  },[])

  return(
    <Artigo>
      <h2>Listas</h2>
        <section>
          <p>
            Listas são bem importantes para organizar ideias, não acha? 
            Quando falamos de listas no HTML, estamos dizendo que tal conteúdo
            se relaciona entre si, que possui uma sequência, que é uma parte 
            organizada de uma tal seção.
          </p>
          <p>
              Por exemplo, vamos dizer que eu tenho um site de receitas, ao 
              detalhar o passo a passo dos ingredientes, em vez de usar vários
              parágrafos é semânticamente correto usar listas. Mesmo que visualmente
              o resultado possa ser igual.
          </p>
          <p>
            Gosto de dizer que não é apenas fazer um layout bonito, mas sim saber
            programar uma boa estrutura por trás disso, até porque como vimos na seção
            <a href="aula3.html">Tags de conteúdo</a> a semântica ajuda no <a
            
            href="https://resultadosdigitais.com.br/especiais/o-que-e-seo/"
            target="_blank"
            >SEO</a>.
        </p>
        <p>
            Temos as seguintes opções de listas em HTML:
        </p>
          <ul>
            <li>
              ul: define listas não ordenadas;
            </li>
            <li>
              ol: define listas ordenadas;
            </li>
            <li>
              dl: define uma lista de definição/descrição (como um FAQ ou glossário).
            </li>
          </ul>
          <h2>UL - Lista não ordenada</h2>
          <p>
              Recebe como filhos as tags &lt;li&gt;, que podem receber qualquer 
              tag dentro, como &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, entre outras.
              Inclusive você pode fazer uma lista dentro de uma lista.
          </p>
          <img className={styles.image} src={imagem1} alt="essa é um exemplo de lista nao ordenada" />
          <h2>OL - Lista ordenada</h2>
          <p>
              Recebe como filhos as tags &lt;li&gt;, que podem receber qualquer 
              tag dentro, como &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, entre outras.
              Inclusive você pode fazer uma lista dentro de uma lista. Aqui as tags 
              &lt;li&gt; vem por padrão numeradas.
          </p>
          <img className={styles.image} src={imagem2} alt="essa é um exemplo de lista nao ordenada" />

          <h2>DL - Lista de definição</h2>
          <p>
              Recebe como filhos as tags &lt;dt&gt;, para definir o título da definição/descrição, 
              e &lt;dd&gt; que é a definição/descrição referente ao título.
          </p>
          <img className={styles.image} src={imagem3} alt="essa é um exemplo de lista nao ordenada"/>
          <p>
            Agora você já pode incrementar melhor o site que você fez anteriormente colocando listas
            nas suas seções. Algumas ideias:
         </p>
         <ul>
            <li>
              Faça um site de receitas;
            </li>
            <li>
              Faça uma lista de compras;
            </li>
            <li>
              Faça uma lista de habilidades/formações em seu currículo.
            </li>
          </ul>
          <p>
            Abaixo deixarei o bloco de código editável para isso, ou abra o <a href="https://codepen.io" target="_blank">Codepen</a>.
         </p>
         <Codepen hash="rNzxXxJ" user="paolaguedes"/>
          </section>
    </Artigo>
  )
}