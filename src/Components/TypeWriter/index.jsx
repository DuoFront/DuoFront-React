import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(255, 255, 255, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(255, 255, 255, 1);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const Container = styled.p`
  opacity: 1;
  color: white;
  font-weight: bold;
  display: inline-block;
  margin: 0;
`;

export function TypeWriter({ value, indice }) {
  const [text, setText] = useState('');
  const [textNegrito, setTextNegrito] = useState('');
  const [textAfter, setTextAfter ] = useState('');
  const valueArr = value.split(' ');
  
  let tamanhoBefore=0;
  let tamanhoNegrito=0;
  let tamanhoAfter=0;
  const encontraIndice = () =>{
      
      valueArr.forEach((element, index)=> {
       console.log("elemento: ",element, " elemento.lenght: ", element.length)
        if(index < indice)tamanhoBefore = element.length + 1
        else if(index == indice)tamanhoNegrito += element.length + 1
        else if(index > indice)tamanhoAfter += element.length + 1
      })
      tamanhoNegrito += tamanhoBefore;
      tamanhoAfter += tamanhoNegrito;
  }   

  const typeWriter = (text, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };
  const typeWriterNegrito = (text, i = 0) => {
    if (i < value.length) {
      if( i < tamanhoBefore)setText(text.slice(0, i + 1));
      else if( i < tamanhoNegrito)setTextNegrito(text.slice(tamanhoBefore, i + 1));
      else if (i < tamanhoAfter)setTextAfter(text.slice(tamanhoNegrito, i + 1));
      setTimeout(() => {
        typeWriterNegrito(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {

    if(indice){
      encontraIndice();
      console.log(valueArr)
      console.log(tamanhoBefore, tamanhoNegrito, tamanhoAfter);
      typeWriterNegrito(value);
    }
    else{
      typeWriter(value);
    }
  }, []);

  return (
    <Container>
      {text}
      <span className="text--purple">{textNegrito}</span>
      {textAfter}
      <TextCursor />
    </Container>
  );
}

TypeWriter.propTypes = {
  value: PropTypes.string.isRequired
};

