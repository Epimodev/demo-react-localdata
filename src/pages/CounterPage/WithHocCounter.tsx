import { createElement, FC } from 'react';
import withLocaldata from 'react-localdata/module/withLocaldata';
import { AppLocaldataProps } from 'src/Application/types';
import Counter from 'src/components/Counter';

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps, AppLocaldataProps {}

const title = (
  <span>
    Browser storage
    <br />
    using withLocaldata HOC
  </span>
);

const WithHocCounter: FC<Props> = ({ className, localdata, saveLocaldata, removeLocaldata }) => {
  const count = localdata.counter3;
  const setCount = (value: number) => saveLocaldata({ counter3: value });
  const resetCount = () => removeLocaldata('counter3');

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

export default withLocaldata<ComponentProps>(WithHocCounter as any);
