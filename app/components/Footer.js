export default function Footer() {
    return (
      <footer className="bg-[#FAEBD7] py-8 px-6 md:px-16 text-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#3C3C3B]">
          {/* Left: App Name and Tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">Thrive in Grace</h2>
            <p className="text-sm mt-2 font-serif">
              Helping you stay connected to faith, growth, and wellness.
            </p>
          </div>
  
          {/* Center: Quick Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[#F25C05] font-serif text-lg">
            <a href="#" className="hover:underline hover:text-[#D94D1A] transition">
              About
            </a>
            <a href="#" className="hover:underline hover:text-[#D94D1A] transition">
              Contact
            </a>
            <a href="#" className="hover:underline hover:text-[#D94D1A] transition">
              FAQ
            </a>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-6 text-[#3C3C3B] text-sm font-serif">
          © {new Date().getFullYear()} Thrive in Grace. All Rights Reserved.
        </div>
      </footer>
    );
  }
  