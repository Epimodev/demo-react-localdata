import { createElement, FC } from 'react';
import { Localdata } from 'react-localdata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

const RenderpropsCounter: FC = () => (
  <Localdata>
    {({ localdata, saveLocaldata, removeLocaldata }: AppLocaldataProps) => {
      const count = localdata.counter1;
      const setCount = (value: number) => saveLocaldata({ counter1: value });
      const resetCount = () => removeLocaldata('counter1');

      return (
        <Counter
          title="Browser storage using render props pattern"
          value={count}
          onChange={setCount}
          onReset={resetCount}
        />
      );
    }}
  </Localdata>
);

export default RenderpropsCounter;
