interface IOption {
  value: string;
  label: string;
}
interface IProps {
  className?: string;
  options: IOption[];
  handleOnChange(value: string): void;
}
const Selectbox = ({ className, options, handleOnChange }: IProps) => {
  const createOptions = (options: IOption[]) =>
    options.map((option: IOption) => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ));

  return (
    <select
      className={className}
      onChange={(event) => handleOnChange(event.target.value)}
    >
      {createOptions(options)}
    </select>
  );
};

export default Selectbox;
