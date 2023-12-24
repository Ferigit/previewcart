//Error message component for form inputs
interface IProps {
  error?: string;
}

export const ErrorMessage = ({ error }: IProps) => {
  if (!error) return null;

  return (
    <div className="w-full" data-testid="input-error" id="input-error">
      <p className="w-full text-left text-red-400 text-sm">{error}</p>
    </div>
  );
};
