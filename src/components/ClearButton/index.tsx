import { createElement, FC } from 'react';
import classnames from 'classnames';
import Button from '../Button';
import * as style from './style.scss';

interface Props {
  children: string;
  onClick: () => void;
  className?: string;
}

const ClearButton: FC<Props> = ({ className, ...props }) => (
  <Button className={classnames(style.clearButton, className)} {...props} />
);

ClearButton.displayName = 'ClearButton';

export default ClearButton;
