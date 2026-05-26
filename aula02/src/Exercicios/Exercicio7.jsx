function Exercicio7({ celsius }) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
  
    return (
      <div>
        {celsius.toFixed(1)}°C equivale a{" "}
        {fahrenheit.toFixed(1)}°F e{" "}
        {kelvin.toFixed(1)}K.
      </div>
    );
  }
  
  export default Exercicio7;