import { useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const schedule = [
  {
    day: 'Day 1',
    date: 'September 15, 2026',
    events: [
      { time: '09:00 AM', title: 'Registration & Check-in', desc: 'Pick up your badges and swag bags', tag: 'Opening' },
      { time: '10:00 AM', title: 'Opening Ceremony', desc: 'Welcome address and rules overview', tag: 'Opening' },
      { time: '11:00 AM', title: 'Team Formation & Ideation', desc: 'Find teammates and brainstorm ideas', tag: 'Networking' },
      { time: '12:00 PM', title: 'Lunch Break', desc: 'Fuel up before the coding begins', tag: 'Break' },
      { time: '01:00 PM', title: 'Coding Begins!', desc: 'The 48-hour countdown starts', tag: 'Coding' },
      { time: '05:00 PM', title: 'Mentor Office Hours', desc: 'Get feedback from industry experts', tag: 'Mentorship' },
      { time: '09:00 PM', title: 'Dinner & Networking', desc: 'Connect with fellow hackers', tag: 'Break' },
    ],
  },
  {
    day: 'Day 2',
    date: 'September 16, 2026',
    events: [
      { time: '08:00 AM', title: 'Breakfast', desc: 'Start your day right', tag: 'Break' },
      { time: '10:00 AM', title: 'Mini-Events & Workshops', desc: 'Fun activities and tech talks', tag: 'Workshop' },
      { time: '01:00 PM', title: 'Lunch Break', desc: 'Refuel and recharge', tag: 'Break' },
      { time: '03:00 PM', title: 'Mid-point Check-in', desc: 'Share progress with mentors', tag: 'Mentorship' },
      { time: '06:00 PM', title: 'Gaming Tournament', desc: 'Take a break and compete', tag: 'Fun' },
      { time: '09:00 PM', title: 'Dinner', desc: 'Pizza party!', tag: 'Break' },
      { time: '11:00 PM', title: 'Late Night Coding', desc: 'Push through with coffee', tag: 'Coding' },
    ],
  },
  {
    day: 'Day 3',
    date: 'September 17, 2026',
    events: [
      { time: '08:00 AM', title: 'Breakfast', desc: 'Final day fuel', tag: 'Break' },
      { time: '11:00 AM', title: 'Coding Ends', desc: 'Submit your projects', tag: 'Deadline' },
      { time: '12:00 PM', title: 'Lunch Break', desc: 'Relax before judging', tag: 'Break' },
      { time: '01:00 PM', title: 'Judging Begins', desc: 'Present to our panel of judges', tag: 'Judging' },
      { time: '04:00 PM', title: 'Project Showcase', desc: 'Explore all the amazing projects', tag: 'Showcase' },
      { time: '06:00 PM', title: 'Closing Ceremony', desc: 'Winners announcement and prizes', tag: 'Closing' },
      { time: '07:00 PM', title: 'After Party', desc: 'Celebrate with food and music', tag: 'Fun' },
    ],
  },
];

const tagColors: Record<string, string> = {
  Opening: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Networking: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Break: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  Coding: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Mentorship: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Workshop: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  Fun: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  Deadline: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Judging: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Showcase: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  Closing: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            Timeline
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mt-3 mb-4">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three days packed with coding, learning, and fun. Here's what to expect.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 mb-10 animate-on-scroll">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeDay === i
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="text-sm font-semibold">{day.day}</div>
              <div className={`text-xs ${activeDay === i ? 'text-white/80' : 'text-gray-500'}`}>
                {day.date}
              </div>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-6">
            {schedule[activeDay].events.map((event, i) => (
              <div
                key={`${activeDay}-${i}`}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } animate-fade-up`}
                style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
              >
                {/* Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 z-10 mt-6" />

                {/* Card */}
                <div className={`ml-16 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-primary-500" />
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{event.desc}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tagColors[event.tag]}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
