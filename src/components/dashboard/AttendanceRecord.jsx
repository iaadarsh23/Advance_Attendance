import { data } from "autoprefixer";
import { Key } from "lucide-react";
import { useState } from "react";

export default function AttendanceRecord() {
	const [attendanceRecords, setAttendanceRecords] = useState([
		{ id: 1, date: "2025-02-21", subject: "Deep Learning", status: "Present" },
		{
			id: 2,
			date: "2025-02-20",
			subject: "Advance Database Management System",
			status: "Absent",
		},
		{
			id: 3,
			date: "2025-02-19",
			subject: "Software Engineering",
			status: "Present",
		},
		{
			id: 4,
			date: "2025-02-18",
			subject: "Deep Learning (Lab)",
			status: "Present",
		},
		{
			id: 5,
			date: "2025-02-17",
			subject: "Advance Database Management System Lab",
			status: "Absent",
		},
		{
			id: 6,
			date: "2025-02-16",
			subject: "Software Engineering Lab",
			status: "Present",
		},
		{ id: 7, date: "2025-02-15", subject: "Mini Project", status: "Present" },
		{
			id: 8,
			date: "2025-02-14",
			subject: "Essence of Indian Traditional Knowledge",
			status: "Present",
		},
		{
			id: 9,
			date: "2025-02-13",
			subject: "Digital Marketing",
			status: "Absent",
		},
		{ id: 10, date: "2025-02-12", subject: "MOOCS", status: "Present" },
		{
			id: 11,
			date: "2025-02-11",
			subject: "Social Media Analytics",
			status: "Present",
		},
		{ id: 12, date: "2025-02-10", subject: "MEAN", status: "Absent" },
	]);

	return (
		<main className="p-6">
			{/* Card Container */}
			<div className="bg-white shadow-2xl rounded-xl p-6 ">
				<h2 className="text-xl font-semibold mb-1">
					Recent Attendance Records
				</h2>
				<p className="text-gray-500 mb-4">Your last 5 attendance entries</p>

				{/* Table */}
				<div className="w-full">
					{/* Table Header */}
					<div className="grid grid-cols-3 text-gray-500 font-medium text-sm border-b pb-2">
						<p>Date</p>
						<p>Class</p>
						<p>Status</p>
					</div>

					{/* Attendance Records */}
					{attendanceRecords.slice(0, 8).map((data) => (
						<div
							key={data.id}
							className="grid grid-cols-3 text-gray-800 text-sm py-2 border-b border-gray-300 last:border-none gap-5"
						>
							<p>{data.date}</p>
							<p>{data.subject}</p>
							<p
								className={`${
									data.status === "Present" ? "text-green-500" : "text-red-500"
								} font-medium`}
							>
								{data.status}
							</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
