import React from 'react';
import Nav from "../Landing Page/HeroPage/Nav.jsx";
import Footer from "../Landing Page/HeroPage/FooterMinimal.jsx";

const HelpCenter = () => {
  return (
    <div className="font-sans mx-auto relative min-h-screen overflow-x-hidden flex flex-col bg-[#FDFDFD]">
      <div className="max-w-6xl lg:max-w-[1440px] mx-auto w-full px-6 md:px-12">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center my-24 px-6">
        <div className="border border-gray-300 rounded-full px-5 py-1.5 text-sm text-[#FFE95C] mb-6 font-medium">
          Support and Queries
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-10 text-gray-800 leading-tight">
          Have questions?
          <br />
          Send us a message here.
        </h1>

        <div className="bg-white p-7 md:p-10 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-lg">
          <form className="space-y-5">
            <div>
              <label
                className="block text-sm text-gray-400 mb-1"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doechukwu"
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 bg-[#FAFAFA]"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-400 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoechukwu@gmail.com"
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 bg-[#FAFAFA]"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-400 mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none bg-[#FAFAFA]"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-[#FFE95C] hover:bg-yellow-400 text-gray-900 font-semibold py-3.5 rounded-md transition-colors mt-2"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl lg:max-w-[1440px] mx-auto w-full px-6 md:px-12">
        <Footer />
      </div>
    </div>
  );
};

export default HelpCenter;
