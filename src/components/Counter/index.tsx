import { createElement, FC, ReactNode } from 'react';
import Button from 'src/components/Button';
import ClearButton from 'src/components/ClearButton';
import Icon from 'src/components/Icon';
import arrowIcon from 'src/icons/arrow.svg';
import * as style from './style.scss';

interface Props {
  title: ReactNode;
  value: number;
  onChange: (value: number) => void;
  onReset: () => void;
}

const Counter: FC<Props> = ({ title, value, onChange, onReset }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.counter}>
        <Button className={style.decrementButton} onClick={decrement}>
          <Icon href={arrowIcon} className={style.arrowIcon} />
        </Button>
        <div className={style.value}>{value}</div>
        <Button className={style.incrementButton} onClick={increment}>
          <Icon href={arrowIcon} className={style.arrowIcon} />
        </Button>
        <ClearButton className={style.resetButton} onClick={onReset}>
          RESET
        </ClearButton>
      </div>
    </div>
  );
};

Counter.displayName = 'Counter';

export default Counter;
