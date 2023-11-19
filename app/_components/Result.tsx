import styles from './Result.module.scss';

export default function Result({ chosenName }: { chosenName: string }) {
  return (
    <div className={styles.cracker}>
      <div className={styles['cracker-message']}>
        <div className={styles['cracker-message__inner']}>{chosenName}</div>
      </div>
      <div className={styles['cracker-left']}>
        <div className={styles['cracker-left-inner']}>
          <div className={styles['cracker-left__mask-top']}></div>
          <div className={styles['cracker-left__mask-bottom']}></div>
          <div className={styles['cracker-left__tail']}></div>
          <div className={styles['cracker-left__end']}></div>
          <div className={styles['cracker-left__body']}></div>
          <div className={styles['cracker-left-zigzag']}>
            <div className={styles['cracker-left-zigzag__item']}></div>
            <div className={styles['cracker-left-zigzag__item']}></div>
            <div className={styles['cracker-left-zigzag__item']}></div>
            <div className={styles['cracker-left-zigzag__item']}></div>
            <div className={styles['cracker-left-zigzag__item']}></div>
          </div>
        </div>
      </div>

      <div className={styles['cracker-right']}>
        <div className={styles['cracker-right-inner']}>
          <div className={styles['cracker-right__mask-top']}></div>
          <div className={styles['cracker-right__mask-bottom']}></div>
          <div className={styles['cracker-right__tail']}></div>
          <div className={styles['cracker-right__end']}></div>
          <div className={styles['cracker-right__body']}></div>
          <div className={styles['cracker-right-zigzag']}>
            <div className={styles['cracker-right-zigzag__item']}></div>
            <div className={styles['cracker-right-zigzag__item']}></div>
            <div className={styles['cracker-right-zigzag__item']}></div>
            <div className={styles['cracker-right-zigzag__item']}></div>
            <div className={styles['cracker-right-zigzag__item']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
