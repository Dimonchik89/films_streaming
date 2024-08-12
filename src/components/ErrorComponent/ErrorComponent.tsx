interface Props {
  error: Error;
}

const ErrorComponent: React.FC<Props> = ({ error }) => {
  return (
    <div className="w-full flex item-center justify-center">
      <h2>{error.message}</h2>
    </div>
  );
};
export default ErrorComponent;
