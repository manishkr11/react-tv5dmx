import React from 'react';
import RickAndMortyConstant from './Constant';

const { ASCENDING, DESCENDING} = RickAndMortyConstant;

export default function SwitchBar({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#f50057' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        {isOn ? ASCENDING : DESCENDING}
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}
