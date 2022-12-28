import { Button, Test } from '@common/components';
import type { NextPage } from 'next';

import styles from '@/styles/title.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <h2 className={styles.title}>app-2 monorepo Template</h2>
      <Button />
      <Test />
    </div>
  );
};

export default Home;
