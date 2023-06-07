import { useState } from 'react';
import Result from '../components/Result';
import Keys from '../components/keys';
import calculate from '../logic/calculate';
// import '../style/CalcMain.scss';

const Calculator = () => {
  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (event) => {
    const btn = event.target.textContent;
    const res = calculate(result, btn);
    setResult(res);
  };

  const { total, operation, next } = result;

  return (
    <main className="calculator-container">
      <header>
        <h2>Lets do some math!</h2>
      </header>
      <section>
        <div className="calculator-grid">
          <Result total={Number(total)} operation={operation} next={next} />
          <Keys tabCalculator={handleEvent} />
        </div>
      </section>
    </main>
  );
};

export default Calculator;
