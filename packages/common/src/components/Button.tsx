import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  textColor: string;
}

export default function Button ({ textColor, children }: Props) {
  return <button style={{ color: textColor }}>{children}</button>;
};

