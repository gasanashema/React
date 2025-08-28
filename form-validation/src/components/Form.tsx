import React, { useEffect, useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState({
    lowerCase: false,
    upperCase: false,
    special: false,
    number: false,
  });

  function handleChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    setCheck({
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^a-zA-Z0-9]/.test(password),
    });
  }, [password]);

  return (
    <form>
      <input type="text" value={password} onChange={handleChange} />

      <div>
        <input type="checkbox" checked={check.lowerCase} readOnly /> Lower Case
        Letter
      </div>
      <div>
        <input type="checkbox" checked={check.upperCase} readOnly /> Upper Case
        Letter
      </div>
      <div>
        <input type="checkbox" checked={check.special} readOnly /> Special
        Character
      </div>
      <div>
        <input type="checkbox" checked={check.number} readOnly /> Number
      </div>
    </form>
  );
};

export default Form;
