import React, { useState } from "react";
import Attribute from './Attribute'

const CharacterForm = () => {
  const [name, setName] = useState('')
  const [strength, setStrength] = useState(10)
  const [dexterity, setDexterity] = useState(10)
  const [constitution, setConstitution] = useState(10)
  const [intelligence, setIntelligence] = useState(10)
  const [wisdom, setWisdom] = useState(10)
  const [charisma, setCharisma] = useState(10)

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <Attribute name="STR"
        value={strength}
        onChange={value => setStrength(value)}
      />
      <Attribute name="DEX"
        value={dexterity}
        onChange={value => setDexterity(value)}
      />
      <Attribute name="CON"
        value={constitution}
        onChange={value => setConstitution(value)}
      />
      <Attribute name="INT"
        value={intelligence}
        onChange={value => setIntelligence(value)}
      />
      <Attribute name="WIS"
        value={wisdom}
        onChange={value => setWisdom(value)}
      />
      <Attribute name="CHA"
        value={charisma}
        onChange={value => setCharisma(value)}
      />
    </form>
  );
}

export default CharacterForm;
