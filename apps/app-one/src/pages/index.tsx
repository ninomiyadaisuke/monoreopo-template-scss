import { Button, Test } from '@common/components';
import type { NextPage } from 'next';

import styles from '@/styles/testt/testt.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <h2 className={styles.test}>monorepoTemplate</h2>
      <Button />
      <Test />
    </div>
  );
};

export default Home;
