import React, {useEffect} from 'react';
import { Artigo } from '../../../Components/Artigo';
import image1 from '../../../assets/img/cursoHTML/tagConteudo.png'
import image2 from '../../../assets/img/cursoHTML/img.png'
import image3 from '../../../assets/img/cursoHTML/quebraLinha.png'
import styles from '../styles.module.scss'
import Codepen from 'react-codepen-embed'
import { useArtigo } from '../../../hooks/Artigo';
export function Aula3(){
  
  const {setArtigoAtivo} = useArtigo();

  useEffect(()=> {
    setArtigoAtivo(3)
  },[])

  return(
    <Artigo>
      <h2>Tags de conteúdo</h2>
        <section>
          <p>
            Espero que você tenha aprendido bastante na nossa última "texto
            aula". A seção de tags de conteúdo é super importante,
            principalmente por conta da semântica.
          </p>
          <p>Essas são as tags que usamos:</p>
          <ul>
            <li>
              header : define o cabeçalho do conteúdo;
            </li>
            <li>main: define o conteúdo principal;</li>
            <li>
              aside: define um conteúdo separado do conteúdo principal (como um
              menu lateral);
            </li>
            <li>
              section: define uma seção de conteúdo;
            </li>
            <li>
              article: define um artigo de conteúdo;
            </li>
            <li>
              span: usado para um conteúdo qualquer, pode ser usado para conter
              uma classe de estilo (elemento de linha);
            </li>
            <li>
              div: usado para um conteúdo qualquer, pode ser usado para conter
              uma classe de estilo (elemento de bloco);
            </li>
          </ul>

          <img
            className={styles.image}
            src={image1}
            alt="exemplo das tags de conteudo citadas"
          />

          <p>
            Acima temos um exemplo de como poderia funcionar a estrutura de site
            genérico.
          </p>

          <blockquote
            
            cite="https://resultadosdigitais.com.br/especiais/o-que-e-seo/"
          >
            <p>
              SEO é uma otimização para os motores de busca, isto é, um conjunto
              de técnicas que influenciam os algoritmos dos buscadores a definir
              o ranking de uma página para determinada palavra-chave que foi
              pesquisada.
            </p>
            <a
              
              href="https://resultadosdigitais.com.br/especiais/o-que-e-seo/"
              target="_blank"
              >Clique aqui para saber mais.</a
            >
          </blockquote>

          <p>
            Antigamente os sites eram feitos usando somente divs, com as tags
            semânticas fica muito mais fácil entender cada parte do código. Por
            isso sempre opte por deixar seu site 100% semântico, até porque os
            robozinhos do Google (aqueles que te mostram as páginas principais)
            dão preferência por sites assim. Fica a dica.
          </p>
          <h2>Deixando o conteúdo ainda mais legal...</h2>
          <p>
              Para isso podemos usar imagens.
              Para acrescentar uma imagem ao corpo documento basta abrir a tag  &lt;img&gt;.
              Essa tag recebe como atributos src="", para especificar o caminho até a imagem
              em questão, alt="", é um texto alternativo, que será mostrado no local da imagem
               caso a URL dada esteja errada, e title="", o título que será mostrado quando o usuário
               passar o mouse em cima.
          </p>
          <p>
            Lembrando que você pode adicionar .gif, além de .png, .jpeg ou .svg. O caminho da 
            imagem pode ser local, ou você pode copiar o endereço da imagem 
            no Google Imagens, por exemplo.
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img">Clique para saber mais sobre.</a>
          </p>
          <p>
            Um exemplo disso:
         </p>
          <img className={styles.image} src={image2} alt="essa é um exemplo da tag img"/>
          <p>
            E para quebras de linhas podemos usar &lt;br&gt; ou &lt;hr&gt; 
            (esse gera uma linha além da quebra).
            Como o foco aqui é aprender as tags do HTML, esses elementos nos bastam, mas
            quando começarmos a estilizar com CSS, dê preferência a ele, certo?
          </p>
          <img className={styles.image} src={image3} alt="essa é um exemplo de quebras de linha"/>
          <p>
            Agora deixo um desafio: criar um site semânticamente estruturado com as tags que aprendemos até agora.
            Deixarei a janela de código do <a href="https://codepen.io" target="_blank">Codepen</a> abaixo, mas se sinta a vontade para criar suas páginas lá no site
            também.
          </p>
          <Codepen hash="rNzxXxJ" user="paolaguedes"/>
          
    </section>
    </Artigo>
  )
}