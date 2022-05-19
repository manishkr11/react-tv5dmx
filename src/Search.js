import React from 'react';
import RickAndMortyConstant from './Constant'

export default function Search({ search, onInputChangeHandler }) {
  return (
    <input
      placeholder={RickAndMortyConstant.ENTER_A_NAME}
      name={search}
      value={search}
      onChange={onInputChangeHandler}
    />
  );
}
