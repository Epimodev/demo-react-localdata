import { createElement, FC } from 'react';

interface Props {
  href: string;
  className?: string;
}

const Icon: FC<Props> = ({ href, className }) => (
  <svg className={className}>
    <use xlinkHref={href} />
  </svg>
);

export default Icon;
