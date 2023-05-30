import Result from './Result';
import Keys from './keys';

const Calculator = () => (
  <main className="calculator-container">
    <header>
      <h2>Lets do some math!</h2>
    </header>
    <div className="calculator-grid">
      <Result />
      <Keys />
    </div>
  </main>
);

export default Calculator;
