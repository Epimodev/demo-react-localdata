import { createElement, FC, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import * as style from './style.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type?: 'button' | 'submit';
}

const Button: FC<Props> = ({ type = 'button', className, ...props }) => (
  <button type={type} className={classnames(style.button, className)} {...props} />
);

export default Button;
