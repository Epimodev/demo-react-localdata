import { createElement, useContext, FC } from 'react';
import { LocaldataContext } from 'react-localdata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

interface Props {
  className?: string;
}

const title = 'Browser storage using useContext';

const UseContextCounter: FC<Props> = ({ className }) => {
  const { localdata, saveLocaldata, removeLocaldata }: AppLocaldataProps = useContext(
    LocaldataContext,
  );
  const count = localdata.counter2;
  const setCount = (value: number) => saveLocaldata({ counter2: value });
  const resetCount = () => removeLocaldata('counter2');

  return (
    <Counter
      className={className}
      title={title}
      value={count}
      onChange={setCount}
      onReset={resetCount}
    />
  );
};

export default UseContextCounter;
