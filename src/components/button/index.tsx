import { PropsWithChildren } from 'react';

export const Fab = ({ to, color, children }: PropsWithChildren & { to: string; color: string }) => (
  <a href={to} className={`btn btn-${color}`}>
    {children}
  </a>
);
