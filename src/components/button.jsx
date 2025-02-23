import { motion } from "framer-motion";

function FeatureButton(props) {
	return (
		<motion.button
			initial={{ "--x": "100%", scale: 1 }}
			animate={{ "--x": "-100%" }}
			whileTap={{ scale: 0.97 }}
			transition={{
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 1,
				type: "spring",
				stiffness: 20,
				damping: 15,
				mass: 2,
				scale: {
					type: "spring",
					stiffness: 10,
					damping: 5,
					mass: 0.1,
				},
			}}
			className="px-6 py-2 rounded-md text-gray-900 font-medium shadow-2xl bg-white border border-gray-300 hover:bg-gray-100 transition duration-200 relative overflow-hidden"
		>
			<span className="tracking-wide h-full text-lg font-semibold w-full block relative linear-mask text-black">
				{props.name}
			</span>
			<span className="block absolute inset-0 rounded-md linear-overlay bg-black opacity-20" />
		</motion.button>
	);
}

export default FeatureButton;
