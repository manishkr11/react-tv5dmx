import React from 'react';
import RickAndMortyConstant from './Constant';

const { GENDER, FEMALE, MALE, GENDER_LESS, UNKNOWN } = RickAndMortyConstant;
export default function GenderFilter({ gender, handleGenderChange }) {
  return (
    <select value={gender} onChange={handleGenderChange}>
      <option value="" disabled>
        {GENDER}
      </option>
      <option value={FEMALE}>{FEMALE}</option>
      <option value={MALE}>{MALE}</option>
      <option value={GENDER_LESS}>{GENDER_LESS}</option>
      <option value={UNKNOWN}>{UNKNOWN}</option>
    </select>
  );
}
