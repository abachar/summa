import { PropsWithChildren, ReactNode, useState } from 'react';

type PageProps = PropsWithChildren<{ heading: string; actions?: ReactNode }>;

export function Page({ heading, actions, children }: PageProps) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">{heading}</h1>
        <div>{actions}</div>
      </div>

      <div>{children}</div>
    </div>
  );
}
