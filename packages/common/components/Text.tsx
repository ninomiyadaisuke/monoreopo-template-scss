import styles from '@common/styles/components/text.module.scss';
import { FC } from 'react';

type Props = {
  text: string;
};

const Text: FC<Props> = (props) => {
  const { text } = props;
  return <p className={styles.text}>{text}</p>;
};

export default Text;
