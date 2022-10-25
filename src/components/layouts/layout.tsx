import { PropsWithChildren, useState } from 'react';

export function Layout({ children }: PropsWithChildren) {
  const [year] = useState(new Date().getFullYear());

  return (
    <div>
      <header className="border-b-1 p-3"></header>
      <div className="container mx-auto">
        <main className="py-8">{children}</main>
        <footer className="border-t-1 py-6 text-center">&copy; {year} Crafters</footer>
      </div>
    </div>
  );
}
