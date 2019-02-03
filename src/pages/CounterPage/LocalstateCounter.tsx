import { createElement, useState, FC } from 'react';
import Counter from 'src/components/Counter';

const title = (
  <span>
    Runtime state counter
    <br />
    (not persist in browser storage)
  </span>
);

const LocalstateCounter: FC = () => {
  const [count, setCount] = useState(0);
  const resetCount = () => setCount(0);

  return <Counter title={title} value={count} onChange={setCount} onReset={resetCount} />;
};

export default LocalstateCounter;
