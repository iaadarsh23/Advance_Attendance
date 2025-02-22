import { Icon } from "lucide-react";
import ProgressBar from "./ProgressBar";
export default function Card(props) {
	return (
		<div className="bg-white shadow-lg rounded-lg p-4 w-75 h-36">
			<div className="flex justify-between items-center mb-2">
				<p className="text-gray-800 text-md font-semibold">{props.cardDesc}</p>
				<props.icon size={30} />
			</div>

			<p className="text-2xl font-bold text-gray-900">{props.data}</p>

			{/* Progress Bar tab dikhega jab jrort hogi */}
			{props.progress !== undefined && <ProgressBar value={props.progress} />}

			<p className="text-sm text-blue-400 font-medium mt-2">{props.update}</p>
		</div>
	);
}
