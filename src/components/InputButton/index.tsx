
interface onChange {
	target: { name: any; value: any; }
}

interface Props {
	id: any;
	name: string;
	type: string;
	label: string;
	errorMessage: string;
	onChange: onChange;
}

const InputButton = (props: Props) => {
	const { label, errorMessage, onChange, id, ...inputProps } = props;
	return (
		<div className="flex flex-col">
			<label className="text-gray mt-2">{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				className="p-3 my-1 rounded-md border border-solid border-l-gray"
			/>
			<span className="antialiased text-[12px] text-error p-1 hidden">{errorMessage}</span>
		</div>
	);
}

export default InputButton;