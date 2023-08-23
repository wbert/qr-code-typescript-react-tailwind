
const TextArea = ({ value , onInput }: any) => {
  return (
    <textarea
      className="border rounded-md p-2 w-full text-black"
      value={value}
      onInput={onInput}
      placeholder="e.g. lazy dog jumps over brown fox"
    ></textarea>
  );
};

export default TextArea;