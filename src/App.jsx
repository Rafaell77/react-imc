import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularImc = () => {
    if (altura && peso) {
      const imcValue = peso / ((altura / 100) * (altura / 100));
      setImc(imcValue.toFixed(2));

      if (imcValue < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (imcValue < 25) {
        setClassificacao('Peso normal');
      } else if (imcValue < 30) {
        setClassificacao('Sobrepeso');
      } else {
        setClassificacao('Obesidade');
      }
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={handleAlturaChange} />

        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={handlePesoChange} />

        <button onClick={calcularImc}>Calcular</button>
      </form>

      {imc && (
        <div>
          <p>Seu IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
