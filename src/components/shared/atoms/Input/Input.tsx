export const Input = ({ value, setValue, placeholder }: any) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};
