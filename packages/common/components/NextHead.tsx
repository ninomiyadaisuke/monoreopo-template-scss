import Head from 'next/head';
import { FC } from 'react';

type Props = {
  title: string;
};

const NextHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default NextHead;
