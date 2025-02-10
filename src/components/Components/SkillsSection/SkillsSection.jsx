import { useState, useEffect, useRef } from "react";

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "PHP", percentage: 80 },
    { name: "WordPress/CMS", percentage: 90 },
    { name: "Photoshop", percentage: 55 },
  ];

  return (
    <section className="bg-green-50 py-12" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-left mb-5">Skills</h2>
          <div className="border-2 border-blue-400 w-16 mb-5"></div>
          <p className="mb-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
          {skills.map((skill, index) => (
            <div className="bg-green-50 p-6" key={index}>
              <div className="">
                <div className="flex justify-between">
                  <h1>{skill.name}</h1>
                  <p>{skill.percentage}%</p>
                </div>
                <div className="w-full bg-gray-200 h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 transition-all duration-1000 ease-in-out"
                    style={{
                      width: animate ? `${skill.percentage}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
