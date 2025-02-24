import Card from "../../components/dashboard/Card";

import RealCalendar from "react-calendar";
import { Calendar, CheckCircle, Clock, CircleUser } from "lucide-react";
import AttendanceRecord from "../../components/dashboard/AttendanceRecord";
import FeatureButton from "../../components/button";
export default function StudentDashboard() {
	return (
		<>
			<header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full p-4 px-8 flex justify-between items-center shadow-xl border-b-2 border-gray-600">
				<h1 className="text-3xl font-bold">Student's Dashboard</h1>
				<div className="flex gap-4">
					<CircleUser className="w-8 h-8 text-gray-300" />
					<FeatureButton name="Log Out" />
				</div>
			</header>
			<main className="w-screen p-6">
				{/* Stats Cards */}
				<div className="grid grid-cols-4 gap-6 mb-6">
					<Card
						cardDesc="Total Attendance"
						data="89%"
						icon={Calendar}
						progress={89}
						update="+2% from last month"
					/>
					<Card
						cardDesc="Classes Attended"
						data="42/47"
						icon={CheckCircle}
						update="5 absences this semester"
					/>
					<Card
						cardDesc="On-Time Arrival"
						data="95%"
						update="2 late arrivals"
						icon={Clock}
						progress={95}
					/>
					<Card
						cardDesc="Next Class"
						data="10:30 AM"
						icon={Calendar}
						update="Deep Learning - Lab-202 "
					/>
				</div>

				{/* Calendar and Attendance Records */}
				<div className="grid grid-cols-2 gap-6 w-full">
					<div className="bg-white shadow-xl rounded-lg p-6">
						<h2 className="text-lg font-semibold mb-2 p-4">
							Attendance Calendar
						</h2>
						<p className="text-sm text-gray-500 mb-4">
							Your monthly attendance overview
						</p>
						<RealCalendar />
					</div>
					<AttendanceRecord />
				</div>
			</main>
		</>
	);
}
