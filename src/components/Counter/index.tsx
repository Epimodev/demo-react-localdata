import { createElement, FC, ReactNode } from 'react';
import classnames from 'classnames';
import ArrowButton from 'src/components/ArrowButton';
import CounterValue from 'src/components/CounterValue';
import ClearButton from 'src/components/ClearButton';
import * as style from './style.scss';

interface Props {
  title: ReactNode;
  value: number;
  onChange: (value: number) => void;
  onReset: () => void;
  className?: string;
}

const Counter: FC<Props> = ({ title, value, onChange, onReset, className }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <div className={classnames(style.container, className)}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.counter}>
        <ArrowButton
          name="decrement"
          className={style.decrementButton}
          direction="left"
          onClick={decrement}
        />
        <CounterValue value={value} />
        <ArrowButton
          name="increment"
          className={style.incrementButton}
          direction="right"
          onClick={increment}
        />
        <ClearButton className={style.resetButton} onClick={onReset}>
          RESET
        </ClearButton>
      </div>
    </div>
  );
};

Counter.displayName = 'Counter';

export default Counter;
