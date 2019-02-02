import { createElement, FC } from 'react';
import withLocaldata from 'react-localdata/module/withLocaldata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

interface ComponentProps {}

interface Props extends ComponentProps, AppLocaldataProps {}

const WithHocCounter: FC<Props> = ({ localdata, saveLocaldata, removeLocaldata }) => {
  const count = localdata.counter3;
  const setCount = (value: number) => saveLocaldata({ counter3: value });
  const resetCount = () => removeLocaldata('counter3');

  return (
    <Counter
      title="Browser storage using withLocaldata HOC"
      value={count}
      onChange={setCount}
      onReset={resetCount}
    />
  );
};

export default withLocaldata<ComponentProps>(WithHocCounter as any);
