import { createElement, ReactElement, FC } from 'react';
import { CssTransition } from 'sento-transition';
import * as style from './style.scss';

interface Props {
  children: ReactElement<any>;
  delay?: number;
}

const classNames = {
  enter: style.enter,
  enterActive: style.enterActive,
  exit: style.exit,
  exitActive: style.exitActive,
};

const ScaleAnim: FC<Props> = ({ children, delay }) => (
  <CssTransition animateOnMount classNames={classNames} delay={delay} timeout={1000}>
    {children}
  </CssTransition>
);

ScaleAnim.displayName = 'ScaleAnim';

export default ScaleAnim;
