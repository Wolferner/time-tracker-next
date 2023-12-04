import TextField from "@/04 items/ui/TextField/TextField";

const Title = ({ onChange }) => {
  return <TextField placeholder="Yor Title" onBlurCallback={onChange} />;
};

export default Title;
