import { Button, Test, Text } from '@common/components';
import type { NextPage } from 'next';

import styles from '@/styles/components/test.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <h2 className={styles.test}>monorepoTemplate</h2>
      <Button />
      <Test />
      <Text text="テキストを出力" />
    </div>
  );
};

export default Home;
