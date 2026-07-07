import React from "react";

const Stories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mb-20">
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl mx-4 lg:mx-8 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-12 gap-8">
            <div className="flex-1 max-w-2xl text-white space-y-6">
              <p className="text-lg leading-relaxed text-gray-200">
                For the 20+ Youngsters, I conceptualised 'Propelling Stories',
                where we help individuals to revamp their personal / digital
                presence through websites and social media strategies. We
                harness the impeccable power of story-telling and illustrations
                to capture the ever declining attention spans and evoke powerful
                emotions.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                However, I didn't stop here. Always wanting to maximise my
                impact through work, I began two new ventures
              </p>
            </div>
            <div className="">
              <img
                src="ps.png"
                alt="Propelling Stories"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              The Problem I{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Discovered
              </span>
            </h3>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              After keenly observing modern technology and social media, I
              noticed the extent of their detrimental effects on our well-being.
              Seeing children and teenagers addicted to technology disheartens
              me.
            </p>
            <p>
              Thus I began Mentoons. Psychology and cartoon based platform that
              helps people lead healthy, tech-enabled and not tech dependent
              lives. We also mentor young professionals seeking career guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ventures
            </span>
          </h3>
          <p className="text-xl text-gray-600">
            Creating positive impact through innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* mentoons */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50  flex items-center justify-center">
                <img
                  src="mentoons.png"
                  alt="Mentoons"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <h4 className="text-2xl font-bold text-gray-900">Mentoons</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We at Mentoons are here to mentor through cartoons! Focusing
                  on concepts such as social human development, social media
                  de-addiction
                </p>
                <div className="mt-6">
                  <a href="http://www.mentoons.com/" target="_blank">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Toonland */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className=" bg-gradient-to-br from-blue-50 to-green-50 p-4 flex items-center justify-center">
                <img
                  src="tooland.png"
                  alt="Toonland"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                  <h4 className="text-2xl font-bold text-gray-900">Toonland</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Toonland, a fun, entertaining, learning platform designed
                  specially for kids between the ages of 6 - 12 years! With
                  amazing illustrated stories.
                </p>
                <div className="mt-6">
                  <a href="http://www.toonland.in/" target="_blank">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                      Explore Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
