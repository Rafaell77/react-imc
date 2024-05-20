
import React, { useState } from 'react';


  function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularImc = () => {
    if (altura && peso) {
      const imcValor = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setImc(imcValor.toFixed(2));
    } else {
      setImc(0);
    }
  };

  return (
    <div className="App">
      <h1>Formulário Altura e Peso</h1>
      <div>
        <label htmlFor="altura">Altura (em metros):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={handleAlturaChange}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (em kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={handlePesoChange}
        />
      </div>
      <button onClick={calcularImc}>Calcular IMC</button>
      {imc > 0 && (
        <div className="imc-result">
          <p>Seu IMC é: {imc}</p>
        </div>
      )}
    </div>
  );
}

export default App
