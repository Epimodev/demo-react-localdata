import { createElement, useState, FC } from 'react';
import Counter from 'src/components/Counter';

const LocalstateCounter: FC = () => {
  const [count, setCount] = useState(0);
  const resetCount = () => setCount(0);

  return (
    <Counter
      title="Runtime state counter (not persist in browser storage)"
      value={count}
      onChange={setCount}
      onReset={resetCount}
    />
  );
};

export default LocalstateCounter;
