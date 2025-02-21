import React from 'react'
import { Calendar, MapPin, QrCode, Clock } from 'lucide-react';


const Admin = () => {

  const lectures = [
    { id: 1, subject: 'Software Engineering', time: '09:10 AM - 10:00 AM', class: 'AIML-A' },
    { id: 2, subject: 'Deep Learning', time: '11:40 AM - 12:30 PM', class: 'AIML-B' },
    { id: 3, subject: 'DBMS', time: '01:30 PM - 02:30 PM', class: 'AIML-C' },
    { id: 4, subject: 'SMA', time: '03:30 PM - 04:10 PM', class: 'AIML-A' },
    { id: 5, subject: 'PDA', time: '04:10 PM - 05:00 PM', class: 'AIML-B' },
  ];
  return (
    <div>
      {/* header */}
      <div classname="min-h-screen bg-gray-600">
        <header className='bg-indigo-700 w-screen h-28 p-5'>
          <h1 className='text-white text-3xl font-bold'>Teacher's Dashboard</h1>
          <p className='text-white font-bold text-md mt-2'>Welcome back, Ayush</p>
        </header>
        {/* main section */}
        <main className='max-w-7xl mx-auto p-6'>
          <section className='bg-white'>
            <div className="flex justify-between">
              <h2 className='flex text-lg font-bold gap-2 items-center'>
                <Calendar size={40} />
                Today's Schedule
              </h2>
              <div className='flex gap-2'>
                <button className='bg-indigo-700 flex items-center gap-3 text-md font-semibold px-4 py-2 rounded-lg text-white'>
                  <QrCode size={40} />
                  Generate QR Code

                </button>
                <button className='bg-red-600 flex items-center py-2n px-4 rounded-lg text-white font-semibold gap-2'>
                  <MapPin size={40} />
                  Set Location
                </button>
              </div>

            </div>
            <div className='divide-y-4 divide-gray-200'>
              {
                lectures.map((lecture) => (
                  <div key={lecture.id} className='py-4 flex items-center justify-between '>
                    <div>
                      <h3 className='text-black text-lg font-semibold'>{lecture.subject}</h3>
                      <div className='flex items-center  gap-4 mt-1 text-gray-500'>
                        <span className='flex items-center gap-2'>
                          <Clock size={20} />
                          {lecture.time}
                        </span>
                        <span>{lecture.class}</span>

                      </div>

                    </div>
                    <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
                      View Details
                    </button>
                  </div>
                ))
              }
            </div>
          </section>
        </main>
      </div>



    </div>
  )
}

export default Admin