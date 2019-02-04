import { createElement, Component, createRef } from 'react';
import classnames from 'classnames';
import arrowIcon from 'src/icons/arrow.svg';
import Button from '../Button';
import Icon from '../Icon';
import * as style from './style.scss';

interface Props {
  direction: 'left' | 'right' | 'top' | 'bottom';
  onClick: () => void;
  className?: string;
}

const iconClassNamesMap = {
  left: style.icon_left,
  right: undefined,
  top: style.icon_top,
  bottom: style.icon_bottom,
};

class ArrowButton extends Component<Props> {
  buttonRef = createRef<HTMLButtonElement>();

  static displayName = 'ArrowButton';

  constructor(props: Props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;

    console.log('HANDLE CLICK');

    onClick();
  }

  render() {
    const { direction, className } = this.props;
    const iconClassName = classnames(style.icon, iconClassNamesMap[direction]);

    return (
      <Button
        ref={this.buttonRef}
        className={classnames(style.button, className)}
        onClick={this.handleClick}
      >
        <Icon href={arrowIcon} className={iconClassName} />
      </Button>
    );
  }
}

export default ArrowButton;