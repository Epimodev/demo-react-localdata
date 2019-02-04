import { createElement, forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import * as style from './style.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit';
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', className, ...props }, ref) => (
    <button ref={ref} type={type} className={classnames(style.button, className)} {...props} />
  ),
);

Button.displayName = 'Button';

export default Button;
