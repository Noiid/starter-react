interface Props {
  name: string;
  type: string;
}

const Input = (props: Props) => {
  return <input type={props.type} name={props.name} />;
};

export default Input;
