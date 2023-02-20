export const Input = ({ value, setValue }: any) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};
