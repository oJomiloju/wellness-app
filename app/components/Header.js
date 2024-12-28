export default function Header() {
    return (
      <header className="bg-[#FAEBD7] px-8 py-16 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-serif font-bold text-[#3C3C3B] mb-4">
          Cultivate your <span className="italic">spiritual journey</span> for a balanced life.
        </h1>
        <p className="text-xl text-[#3C3C3B] mb-10">
          Journaling, prayer reminders, and wellness insights all in one place.
        </p>
  
        {/* Tag-Like Items */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Replaceable Tags */}
          <span className="bg-[#FDE8DF] text-[#F25C05] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Guided Journaling
          </span>
          <span className="bg-[#DFF6E8] text-[#3CA27C] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Prayer Reminders
          </span>
          <span className="bg-[#F0F7FF] text-[#3178C6] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Weekly Wellness Reports
          </span>
          <span className="bg-[#FDF4E3] text-[#D9822B] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Faith Tracking
          </span>
          <span className="bg-[#FFECEF] text-[#C94C54] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Relationships Insights
          </span>
          <span className="bg-[#F9EAF7] text-[#9338A4] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Gratitude Logging
          </span>
          <span className="bg-[#E8F8F2] text-[#1B998B] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Mindfulness Practices
          </span>
          <span className="bg-[#FFF3E3] text-[#CB7723] px-4 py-2 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
            Habit Tracking
          </span>
        </div>
      </header>
    );
  }
  