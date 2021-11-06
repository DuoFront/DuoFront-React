import React from 'react';
import styles from '../styles.module.scss'
import { Artigo } from '../../../Components/Artigo';
import image from '../../../assets/img/cursoHTML/versaoHTML.png'
import htmlBasicoImage from '../../../assets/img/cursoHTML/htmlbasico.png'
import { useArtigo } from '../../../hooks/Artigo';
import { useEffect } from 'react';
export function Aula1(){

  const { setArtigoAtivo } = useArtigo()
  useEffect(() => {
    setArtigoAtivo(1)
  },[])
  return(
    <Artigo className="main2">
      <h2>Introdução ao HTML</h2>
      <section>
      <blockquote
            cite="https://www.mozilla.org/en-US"
          >
            <p>
              HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção
              mais básico da web. Define o significado e a estrutura do conteúdo
              da web.
            </p>
          </blockquote>
      <img
            className={styles.imageRight}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sistema_hipertextual.jpg/220px-Sistema_hipertextual.jpg"
            alt="hipperlink"
          />
          <p>
            'HyperText' se refere a links que conectam uma página a outra na
            internet, sendo uma parte fundamental da web desde os primordios,
            inclusive, nos primeiros anos de vida da internet, a web era
            composta maioritariamente de links!
          </p>
          <p>
            'Markup' é devido a sua forma de marcação, HTML é composto de
            elementos que seguem o padrão de: &lt;tag&gt; &lt;/tag&gt;
          </p>
          <h3 >Exemplo de arquivo .html</h3>
          <img
            className={styles.image}
            src={htmlBasicoImage}
            alt="codigo base html"
          />
          <p >
            Atualmente quase 100% da internet utiliza o HTML5 para fazer a
            estrutura semântica de seus sites, e SIM o número 5 é referente a
            sua versão atual, então também existiram HTML, HTML2, HTML3.2 e
            HTML4. A linguagem até mesmmo chegou a ser descontinuada em 2004 e
            se tornou XHTML1.0, mas então em 2007 a W3C decidiu voltou atrás
            novamente em sua decisão e lançou a versão 5 do HTML
          </p>
          <h3>HTML5</h3>
          <p>
            A versão 5 trouxe uma maior semântica para a Linguagem de Marcação,
            trazendo novas tags que tornam mais facíl a leitura do conteúdo na
            web, tanto por usuários quanto por computadores, já outras tags de
            versões antigas tiveram sua importância enfatizada ou até mesmo
            colocadas em desuso.
          </p>
          <p>
            Importante saber que esta versão deixou ainda mais clara a divisão
            entre sêmantica, estilo e interatividade, HTML é
            <strong>SEMÂNTICO!!</strong>,logo seu conteúdo deve condizir com o
            significado da marcação, deixando as duas outras partes para o CSS e
            JavaScript.
          </p>
          <h3>Data dos lançamentos oficiais</h3>
         <img src={image} className={styles.image} alt="tabela de versoes html"/>
          <h3 >Vá mais a fundo!</h3>
          <p>
            Você realmente sabe a diferença das tags h1, h2, h3, h4, h5 ? vá
            mais a fundo no mundo HTML e descubra isso e muito mais sobre tags
            de texto no nosso artigo de <a href="aula2.html">Text Tags</a>, ou
            pode optar em por seus conhecimentos em prática fazendo um de nossos
            <a>Testes Rápidos</a> ou botando a mão na massa ao construir um de
            nossos <a href="../../pages/layouts.html">Layouts</a>.
          </p>
      </section>
    </Artigo>
  )
}