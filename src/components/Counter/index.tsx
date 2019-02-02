import { createElement, FC } from 'react';
import Button from 'src/components/Button';
import * as style from './style.scss';

interface Props {
  title: string;
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
      <Button className={style.button} onClick={decrement}>
        -
      </Button>
      <div className={style.value}>{value}</div>
      <Button className={style.button} onClick={increment}>
        +
      </Button>
      <Button className={style.resetButton} onClick={onReset}>
        RESET
      </Button>
    </div>
  );
};

export default Counter;
