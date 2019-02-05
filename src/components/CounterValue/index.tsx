import { createElement, Component, createRef } from 'react';
import classnames from 'classnames';
import * as style from './style.scss';

interface Props {
  value: number;
}

const TICK_DURATION = 20;
const ANIMATION_DURATION = 500;

function displayInitialValue(container: HTMLDivElement, element: HTMLSpanElement, value: number) {
  element.className = style.value;
  element.innerHTML = `${value}`;
  container.appendChild(element);
}

class CounterValue extends Component<Props> {
  valueContainerRef = createRef<HTMLDivElement>();
  valueElement = document.createElement('span');

  static displayName = 'CounterValue';

  shouldComponentUpdate({ value: nextValue }: Props) {
    return this.props.value !== nextValue;
  }

  componentDidMount() {
    const { value } = this.props;
    const { current: valueContainer } = this.valueContainerRef;
    if (valueContainer) {
      displayInitialValue(valueContainer, this.valueElement, value);
    }
  }

  componentDidUpdate({ value: prevValue }: Props) {
    if (!this.valueContainerRef.current) {
      return;
    }

    const { value } = this.props;
    if (prevValue !== value) {
      const increase = prevValue < value;
      const previousValueElement = this.valueElement;
      const newValueElement = document.createElement('span');
      this.valueElement = newValueElement;

      const previousValueClassName = classnames(style.value, {
        [style.value_atLeft]: increase,
        [style.value_atRight]: !increase,
      });
      const newValueClassName = classnames(style.value, {
        [style.value_atLeft]: !increase,
        [style.value_atRight]: increase,
      });

      previousValueElement.className = previousValueClassName;
      newValueElement.className = newValueClassName;
      newValueElement.innerHTML = `${value}`;
      this.valueContainerRef.current.appendChild(newValueElement);

      setTimeout(() => {
        // if component was unmounted duting timeout
        if (!this.valueContainerRef.current) {
          return;
        }
        // this.valueElement can change during timeout
        if (this.valueElement === newValueElement) {
          newValueElement.className = style.value;
        }
      }, TICK_DURATION);

      setTimeout(() => {
        // if component was unmounted duting timeout
        if (!this.valueContainerRef.current) {
          return;
        }
        this.valueContainerRef.current.removeChild(previousValueElement);
      }, ANIMATION_DURATION);
    }
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.cacheRight} />
        <div className={style.cacheLeft} />
        <div ref={this.valueContainerRef} />
      </div>
    );
  }
}

export default CounterValue;
