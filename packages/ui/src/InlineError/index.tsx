interface InlineErrorProps {
  message: string;
}

const InlineError = (props: InlineErrorProps) => {
  const { message } = props;
  return <p className="ui-block ui-mt-2 ui-text-red-800">{message}</p>;
};

export default InlineError;
