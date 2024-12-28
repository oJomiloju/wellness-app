'use client'; // Required for using React state in Next.js

import { useState } from 'react';

export default function MainSection() {
  const [modalContent, setModalContent] = useState(null); // State to track modal content
  const [theme, setTheme] = useState({}); // State to track modal theme

  const openModal = (content, theme) => {
    setModalContent(content);
    setTheme(theme); // Set the theme for the modal
  };

  const closeModal = () => {
    setModalContent(null);
    setTheme({});
  };

  return (
    <section className="bg-[#FAEBD7] py-16">
    <div className="relative bg-white mx-auto max-w-4xl p-12 rounded-md text-center shadow-md">
        {/* Title */}
        <h2 className="text-[#3C3C3B] text-3xl font-serif font-bold mb-6">
            Welcome to Your Journey
        </h2>

        {/* Description */}
        <p className="text-[#3C3C3B] text-lg font-medium font-serif leading-relaxed">
            Your journey to <span className="text-[#F25C05] font-bold">spiritual </span>
            and emotional growth begins here. Let this app help you stay connected to
            your <span className="text-[#F25C05] font-bold">faith</span>, reflect on
            your progress, and thrive in all aspects of life.
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-8 px-6 py-2 bg-[#F25C05] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#D94D1A] transition">
            Get Started
        </button>
        </div>



      {/* Method Section */}
      <div className="mt-16 text-center">
        {/* Title */}
        <h2 className="text-[#3C3C3B] font-serif font-bold text-4xl mb-12">
          Path to Spiritual Growth 
        </h2>

        {/* Wellness Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Focus */}
          <div className="flex flex-col items-center">
            <div
              onClick={() =>
                openModal(
                  {
                    title: "Focus Journey",
                    description:
                      "Focusing on your wellness journey means prioritizing prayer and intentional journaling to align your mind and spirit.",
                    verse:
                      "Isaiah 26:3 - 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.'",
                  },
                  { bg: "#F25C05", text: "white" }
                )
              }
              className="bg-[#F25C05] text-white rounded-full p-4 w-16 h-16 flex items-center justify-center animate-pulse glow-circle cursor-pointer"
            ></div>
            <h3 className="text-[#F25C05] font-serif text-xl font-bold mt-4">
              FOCUS
            </h3>
            <p className="text-[#333333] font-serif font-bold text-sm mt-2 max-w-xs">
              Begin by centering yourself with guided journaling and prayer prompts.
            </p>
          </div>

          {/* Reflect */}
          <div className="flex flex-col items-center">
            <div
              onClick={() =>
                openModal(
                  {
                    title: "Reflect Journey",
                    description:
                      "Reflect on your relationships and faith by reviewing progress and uncovering growth opportunities.",
                    verse:
                      "2 Corinthians 13:5 - 'Examine yourselves to see whether you are in the faith; test yourselves.'",
                  },
                  { bg: "#F2A61D", text: "white" }
                )
              }
              className="bg-[#F2A61D] text-white rounded-full p-4 w-16 h-16 flex items-center justify-center animate-pulse glow-circle cursor-pointer"
            ></div>
            <h3 className="text-[#F25C05] font-serif text-xl font-bold mt-4">
              REFLECT
            </h3>
            <p className="text-[#333333] font-serif font-bold text-sm mt-2 max-w-xs">
              Reflect on your growth and faith through self-assessment.
            </p>
          </div>

          {/* Refine */}
          <div className="flex flex-col items-center">
            <div
              onClick={() =>
                openModal(
                  {
                    title: "Refine Journey",
                    description:
                      "Refining your habits ensures consistency in maintaining a fulfilling, faith-driven lifestyle.",
                    verse:
                      "Romans 12:2 - 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.'",
                  },
                  { bg: "#317ca7", text: "white" }
                )
              }
              className="bg-[#317ca7] text-white rounded-full p-4 w-16 h-16 flex items-center justify-center animate-pulse glow-circle cursor-pointer"
            ></div>
            <h3 className="text-[#F25C05] font-serif text-xl font-bold mt-4">
              REFINE
            </h3>
            <p className="text-[#333333] font-serif font-bold text-sm mt-2 max-w-xs">
              Continuously refine your habits and routines with actionable insights.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Clicking outside the modal will close it
        >
          <div
            className="bg-white max-w-md p-8 rounded-lg shadow-lg text-center relative flex flex-col items-center"
            style={{ color: theme.text }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Glowing Circle */}
            <div
              className="rounded-full w-16 h-16 flex items-center justify-center mb-4 animate-pulse glow-circle"
              style={{
                backgroundColor: theme.bg,
                boxShadow: `0 0 20px ${theme.bg}`,
              }}
            ></div>

            {/* Modal Content */}
            <h3
              className="font-serif font-bold text-4xl mb-4"
              style={{ color: theme.bg }}
            >
              {modalContent.title}
            </h3>
            <p
              className="text-2xl font-serif font-bold text-[#3C3C3B] mb-4 leading-relaxed"
            >
              {modalContent.description}
            </p>
            <p
              className="text-xl font-serif font-bold italic text-[#3C3C3B] leading-relaxed"
            >
              {modalContent.verse}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
