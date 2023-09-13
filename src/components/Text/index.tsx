import styles from "./Text.module.css";

interface Props {
  content: string;
  child: any;
}

const Text = (props: Props) => {
  return (
    <div className={styles.text}>
      {props.content} {props.child}
    </div>
  );
};
export default Text;
