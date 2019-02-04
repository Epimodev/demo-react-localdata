import { createElement, FC } from 'react';
import { Localdata } from 'react-localdata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

interface Props {
  className?: string;
}

const title = (
  <span>
    Browser storage
    <br />
    using render props pattern
  </span>
);

const RenderpropsCounter: FC<Props> = ({ className }) => (
  <Localdata>
    {({ localdata, saveLocaldata, removeLocaldata }: AppLocaldataProps) => {
      const count = localdata.counter1;
      const setCount = (value: number) => saveLocaldata({ counter1: value });
      const resetCount = () => removeLocaldata('counter1');

      return (
        <Counter
          className={className}
          title={title}
          value={count}
          onChange={setCount}
          onReset={resetCount}
        />
      );
    }}
  </Localdata>
);

export default RenderpropsCounter;
