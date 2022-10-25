import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';

import '../globals.css';

export default function SummaApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
