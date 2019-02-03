import { createElement, useContext, FC } from 'react';
import { LocaldataContext } from 'react-localdata';
import ClearButton from 'src/components/ClearButton';
import LocalstateCounter from './LocalstateCounter';
import RenderpropsCounter from './RenderpropsCounter';
import UseContextCounter from './UseContextCounter';
import WithHocCounter from './WithHocCounter';
import * as style from './style.scss';

const CounterPage: FC = () => {
  const { clearLocaldata } = useContext(LocaldataContext);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.title}>react-localdata demo</h1>
        <ClearButton className={style.clearAll} onClick={clearLocaldata}>
          Clear localstorage
        </ClearButton>
      </header>
      <div className={style.counters}>
        <div className={style.countersGroup}>
          <LocalstateCounter />
          <RenderpropsCounter />
        </div>
        <div className={style.countersGroup}>
          <UseContextCounter />
          <WithHocCounter />
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
