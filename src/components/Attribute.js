import React from "react";
import Counter from './Counter'
import './Attribute.css'

const Attribute = ({ name, value, onChange }) => {
  return (
    <>
      <h2 className="attribute-header">{name}</h2>
      <Counter value={value} onChange={onChange} />
    </>
  );
}

export default Attribute;
