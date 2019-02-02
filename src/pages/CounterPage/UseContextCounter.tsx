import { createElement, useContext, FC } from 'react';
import { LocaldataContext } from 'react-localdata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

const UseContextCounter: FC = () => {
  const { localdata, saveLocaldata, removeLocaldata }: AppLocaldataProps = useContext(
    LocaldataContext,
  );
  const count = localdata.counter2;
  const setCount = (value: number) => saveLocaldata({ counter2: value });
  const resetCount = () => removeLocaldata('counter2');

  return (
    <Counter
      title="Browser storage using useContext"
      value={count}
      onChange={setCount}
      onReset={resetCount}
    />
  );
};

export default UseContextCounter;
