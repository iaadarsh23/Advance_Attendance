export default function ProgressBar({ progress }) {
	return (
		//parent div that tell the progress is full
		<div className="w-full bg-gray-500 rounded-full h-4">
			<div
				className=" bg-green-500 rounded-full h-4 transition-all duration-500"
				style={{ width: `${progress}` }}
			></div>
		</div>
	);
}
