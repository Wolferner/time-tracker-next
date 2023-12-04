import TextDescription from "@/04 items/ui/TextDescriprtion/TextDescription";

const Description = ({ onChange }) => {
  return <TextDescription placeholder="Yor Title" onBlurCallback={onChange} />;
};

export default Description;
