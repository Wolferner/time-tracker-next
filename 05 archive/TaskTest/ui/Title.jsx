import InputField from '@/04 items/ui/InputField/InputField';

const Title = ({ onChange }) => {
	return <InputField placeholder='Yor Title' onBlurCallback={onChange} />;
};

export default Title;
