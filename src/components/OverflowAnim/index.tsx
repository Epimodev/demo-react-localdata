import { createElement, ReactElement, FC } from 'react';
import classnames from 'classnames';
import { CssTransition } from 'sento-transition';
import * as style from './style.scss';

interface Props {
  children: ReactElement<any>;
  delay?: number;
  className?: string;
}

const classNames = {
  enter: style.enter,
  enterActive: style.enterActive,
  exit: style.exit,
  exitActive: style.exitActive,
};

const OverflowAnim: FC<Props> = ({ children, delay, className }) => (
  <div className={classnames(style.container, className)}>
    <CssTransition animateOnMount classNames={classNames} delay={delay} timeout={500}>
      {children}
    </CssTransition>
  </div>
);

OverflowAnim.displayName = 'OverflowAnim';

export default OverflowAnim;
