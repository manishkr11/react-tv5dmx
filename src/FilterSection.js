import React from 'react';
import SwitchBar from './SwitchBar';
import GenderFilter from './GenderFilter';
import SpeciesFilter from './SpeciesFilter';
import Search from './Search';
import RickAndMortyConstant from './Constant'

const { COUNT, CLEAR_ALL } = RickAndMortyConstant;
export default function FilterSection({
  search,
  onInputChangeHandler,
  gender,
  handleGenderChange,
  species,
  handleSpeciesChange,
  clearAllButtonHandler,
  handleCheckbox,
  value,
  count,
}) {
  return (
    <>
      <Search search={search} onInputChangeHandler={onInputChangeHandler} />
      <GenderFilter gender={gender} handleGenderChange={handleGenderChange} />
      <SpeciesFilter
        species={species}
        handleSpeciesChange={handleSpeciesChange}
      />
      <button onClick={clearAllButtonHandler}>{CLEAR_ALL}</button>
      <SwitchBar isOn={value} handleToggle={() => handleCheckbox()} />
      <br />
      <br />
      <b>{COUNT}: {count}</b>
    </>
  );
}
