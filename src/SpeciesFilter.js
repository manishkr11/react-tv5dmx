import React from 'react';
import RickAndMortyConstant from './Constant';

const { SPECIES, HUMAN, ALIEN, HUMANIOD } = RickAndMortyConstant;
export default function SpeciesFilter({ species, handleSpeciesChange }) {
  return (
    <select value={species} onChange={handleSpeciesChange}>
      <option value="" disabled>{SPECIES}</option>
      <option value={HUMAN}>{HUMAN}</option>
      <option value={ALIEN}>{ALIEN}</option>
      <option value={HUMANIOD}>{HUMANIOD}</option>
    </select>
  );
}
