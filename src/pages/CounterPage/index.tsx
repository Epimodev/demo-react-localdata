import { createElement, useContext, FC } from 'react';
import { LocaldataContext } from 'react-localdata';
import Button from 'src/components/Button';
import LocalstateCounter from './LocalstateCounter';
import RenderpropsCounter from './RenderpropsCounter';
import UseContextCounter from './UseContextCounter';
import WithHocCounter from './WithHocCounter';

const CounterPage: FC = () => {
  const { clearLocaldata } = useContext(LocaldataContext);

  return (
    <div>
      <h1>react-localdata demo</h1>
      <Button onClick={clearLocaldata}>Clear local data</Button>
      <div>
        <LocalstateCounter />
        <RenderpropsCounter />
        <UseContextCounter />
        <WithHocCounter />
      </div>
    </div>
  );
};

export default CounterPage;
