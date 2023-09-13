interface Props {
  content: string;
  child: any;
}

const Span = ({ content, child }: Props) => {
  return (
    <div>
      {content} {child}
    </div>
  );
};
export default Span;
