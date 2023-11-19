import styles from './NameOption.module.scss';

export default function NameOption({
  name,
  onClick,
}: {
  name: string;
  onClick: (selectedName: string) => void;
}) {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {name}
    </button>
  );
}
