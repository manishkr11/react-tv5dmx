import React from 'react';
import RickAndMortyConstant from './Constant';

const { STATUS, SPECIES, GENDER, ORIGIN, LAST_LOCATION, YEARS_AGO, colorCode } =
  RickAndMortyConstant;

export default function Card({ data }) {
  const {
    name,
    image,
    status,
    id,
    created,
    gender,
    species,
    origin,
    location,
  } = data;
  const createdYear = new Date(created)?.getFullYear();
  const currentYear = new Date().getFullYear();
  const containerCss = {
    border: '2px solid',
    margin: '2%'
  };
  const colorStyle = { color: colorCode };
  return (
    <div style={containerCss}>
      <div>
        <img style={{ width: '20%' }} src={image} alt="" />
      </div>
      <div>
        <b> {name}</b>
      </div>
      <div>
        id: {id} - create {currentYear - createdYear} {YEARS_AGO}
      </div>
      <hr />
      <div>
        {STATUS} - <span style={colorStyle}>{status}</span>
      </div>
      <div>
        {SPECIES} - <span style={colorStyle}>{species}</span>
      </div>
      <div>
        {GENDER} - <span style={colorStyle}>{gender}</span>
      </div>
      <div>
        {ORIGIN} - <span style={colorStyle}>{origin?.name}</span>
      </div>
      <div>
        {LAST_LOCATION} - <span style={colorStyle}>{location?.name}</span>
      </div>
      <br />
    </div>
  );
}
