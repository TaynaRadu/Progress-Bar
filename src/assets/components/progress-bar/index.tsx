import styles from "./style.module.css";

type ProgressProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressProps) => {
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      <div className={styles["progress__value"]}>{progress}%</div>
    </div>
  );
};
