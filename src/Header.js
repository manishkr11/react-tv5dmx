import React from 'react';
import './style.css';
import RickAndMortyConstant from './Constant';

export default function Header() {
  const headerCss = {
    background: '#232f34',
    color: 'white',
    padding: '2%',
    margin: ' 0 0 1% 0',
  };

  return <h6 style={headerCss}>{RickAndMortyConstant.RICKY_AND_MORTY_APP}</h6>;
}
