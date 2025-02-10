import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="py-16 px-20 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-5">Resume</h2>
        <div className="border-2 border-blue-400 w-16 mb-5"></div>
        <p className="mb-12">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          {/* Left Section */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">Summary</h3>
            <div className="relative pl-8 border-l-2 border-blue-400">
              <div className="absolute -left-2 top-0 w-4 h-4 border-2 border-blue-400 bg-white rounded-full"></div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-600">BRANDON JOHNSON</h4>
                <p>
                  Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Portland par 127, Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="relative mt-2">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="relative pl-8 border-l-2 border-blue-400">
                <div className="absolute -left-2 top-0 w-4 h-4 border-2 border-blue-400 bg-white rounded-full"></div>
                <div className="absolute -left-2 top-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full"></div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
                    <p className="font-semibold mb-3">2015 - 2016</p>
                    <i>
                      <p className="mb-3">Rochester Institute of Technology, Rochester, NY</p>
                    </i>
                    <p className="italic">
                      Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mt-8 text-gray-700 mb-3">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
                    <p className="font-semibold mb-3">2010 - 2014</p>
                    <p className="italic mb-3">Rochester Institute of Technology, Rochester, NY</p>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis. Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-5">Professional Experience</h3>
            <div className="relative pl-8 border-l-2 border-blue-400 mt-8">
              <div className="absolute -left-2 top-0 w-4 h-4 border-2 border-blue-400 bg-white rounded-full"></div>
              <div className="absolute -left-2 top-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full"></div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl text-gray-700 font-semibold mb-3">SENIOR GRAPHIC DESIGN SPECIALIST</h4>
                  <p className="font-semibold mb-3">2019 - Present</p>
                  <p className="italic mb-3">Experion, New York, NY</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Lead in the design, development, and implementation of graphic communication materials.</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">GRAPHIC DESIGN SPECIALIST</h4>
                  <p className="font-semibold mb-3">2017 - 2018</p>
                  <p className="italic mb-3">Stepping Stone Advertising, New York, NY</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
