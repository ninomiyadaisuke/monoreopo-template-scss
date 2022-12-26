import 'common/styles/base.scss';

import { NextHead } from 'common/components';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead title="test title" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
