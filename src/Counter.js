import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »

  // Déclare une fonction setCount qui permet de modifier la valeur de count

  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    if (isNaN( e.target.value ) === false) {
      setCount(e.target.value);
      console.log(e.target)
    }
  };
  return (
    <div>
      <p>Le compteur est à : {count} </p>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <button onClick={() => setCount(count - 1)}>-1</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="count">
          Valeur du compteur :
          <input id="counter" name="count" type="text" value={count} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default Counter;
