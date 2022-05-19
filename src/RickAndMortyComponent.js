import React, { useState, useEffect } from 'react';
import Card from './Card';
import FilterSection from './FilterSection';
import NoDataAvailable from './NoDataAvailable';

export default function RickAndMortyComponent() {
  const [userData, setUserData] = useState([]);
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');
  const [species, setSpecies] = useState('');
  const [value, setValue] = useState(true);

  const { results = [], info = {} } = userData;

  //let url = 'https://rickandmortyapi.com/api/character/';
  const url = `https://rickandmortyapi.com/api/character/?name=${search}&gender=${gender}&species=${species}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setUserData(response);
      });
  }, [url]);

  const onInputChangeHandler = (e) => setSearch(e?.target?.value);

  const clearAllButtonHandler = () => {
    setGender('');
    setSpecies('');
    setSearch('');
  };

  const handleGenderChange = (e) => {
    setGender(e?.target?.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e?.target?.value);
  };

  const handleCheckbox = () => {
    const filteredData = userData?.results?.reverse((a, b) =>
      a?.id > b?.id ? 1 : -1
    );
    setValue(!value);
    setUserData({ ...userData, results: filteredData });
  };

  return (
    <div>
      <FilterSection
        search={search}
        onInputChangeHandler={onInputChangeHandler}
        gender={gender}
        handleGenderChange={handleGenderChange}
        species={species}
        handleSpeciesChange={handleSpeciesChange}
        clearAllButtonHandler={clearAllButtonHandler}
        handleCheckbox={handleCheckbox}
        value={value}
        count={results?.length}
      />
      <hr />
      {results &&
        results?.length > 0 &&
        results?.map((item) => {
          return <Card key={item?.id} data={item} />;
        })}
      {results?.length === 0 && <NoDataAvailable />}
    </div>
  );
}
