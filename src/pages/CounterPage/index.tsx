import { createElement, useContext, FC } from 'react';
import { LocaldataContext } from 'react-localdata';
import OverflowAnim from 'src/components/OverflowAnim';
import ScaleAnim from 'src/components/ScaleAnim';
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
        <OverflowAnim className={style.titleContainer}>
          <h1 className={style.title}>react-localdata demo</h1>
        </OverflowAnim>
        <OverflowAnim delay={200}>
          <ClearButton className={style.clearAll} onClick={clearLocaldata}>
            Clear localstorage
          </ClearButton>
        </OverflowAnim>
      </header>
      <div className={style.counters}>
        <div className={style.countersGroup}>
          <ScaleAnim delay={300}>
            <LocalstateCounter />
          </ScaleAnim>
          <ScaleAnim delay={400}>
            <RenderpropsCounter />
          </ScaleAnim>
        </div>
        <div className={style.countersGroup}>
          <ScaleAnim delay={500}>
            <UseContextCounter />
          </ScaleAnim>
          <ScaleAnim delay={600}>
            <WithHocCounter />
          </ScaleAnim>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
