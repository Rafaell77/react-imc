import React, { useState } from 'react';

const CalculadoraIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularImc = (event) => {
    event.preventDefault();
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imcValue = peso / (alturaEmMetros * alturaEmMetros);
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
      <form onSubmit={calcularImc}>
        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={handleAlturaChange} required />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={handlePesoChange} required />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <p>Seu IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;
