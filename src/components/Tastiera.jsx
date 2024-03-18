import { useState } from "react";

function Tastiera() {
  const [num, setNum] = useState("");
  const [ope, setOpe] = useState("");
  const [newNum, setNewNum] = useState("");
  const handleButton = (numero) => {
    setNum(num + numero);
  };
  const handleOperatore = (operatore) => {
    let a = parseInt(newNum);
    let b = parseInt(num);

    if (ope != "") {
      setOpe(operatore);
    } else {
      setOpe(operatore);
    }

    if (newNum === "") {
      setNewNum(num);
      setNum("");
    } else if (num !== "") {
      ope === "+"
        ? setNum(a + b)
        : ope === "-"
        ? setNum(a - b)
        : ope === "X"
        ? setNum(a * b)
        : ope === "/"
        ? setNum(a / b)
        : num;
      setNewNum("");
      setOpe("");
    }
  };
  const handleCe = () => {
    setNewNum("");
    setNum("");
    setOpe("");
  };

  return (
    <div className="container">
      <input type="number" max="8" value={num} readOnly></input>

      {/* linea 1 */}
      <button onClick={handleCe}>CE</button>
      <button onClick={() => handleOperatore("/")}>/</button>
      <button onClick={() => handleOperatore("X")}>X</button>
      <button onClick={() => handleOperatore("-")}>-</button>

      {/*  linea 2 */}
      <button onClick={() => handleButton(7)}>7</button>
      <button onClick={() => handleButton(8)}>8</button>
      <button onClick={() => handleButton(9)}>9</button>
      <button onClick={() => handleOperatore("+")}>+</button>

      {/* linea 3 */}
      <button onClick={() => handleButton(4)}>4</button>
      <button onClick={() => handleButton(5)}>5</button>
      <button onClick={() => handleButton(6)}>6</button>
      {/* linea 4*/}

      <button onClick={() => handleButton(1)}>1</button>
      <button onClick={() => handleButton(2)}>2</button>
      <button onClick={() => handleButton(3)}>3</button>

      <button onClick={() => handleOperatore("=")}>=</button>
      <button onClick={() => handleButton(0)}>0</button>
    </div>
  );
}

export default Tastiera;
