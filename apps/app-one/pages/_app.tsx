import 'next-ui/base.scss';

import type { AppProps } from 'next/app';
import { NextHead } from 'next-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead title="test title" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
