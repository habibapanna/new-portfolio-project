import { useState, useEffect } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsEmojiSmile } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";

const Counts = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hoursOfSupport, setHoursOfSupport] = useState(0);
  const [hardWorkers, setHardWorkers] = useState(0);

  const targetValues = {
    happyClients: 232,
    projects: 521,
    hoursOfSupport: 1453,
    hardWorkers: 32,
  };

  const maxTarget = Math.max(
    targetValues.happyClients,
    targetValues.projects,
    targetValues.hoursOfSupport,
    targetValues.hardWorkers
  );

  useEffect(() => {
    const duration = 3000; // Total duration in milliseconds
    const intervalTime = 50; // Interval for updating counters
    const steps = duration / intervalTime;

    const incrementValues = {
      happyClients: targetValues.happyClients / steps,
      projects: targetValues.projects / steps,
      hoursOfSupport: targetValues.hoursOfSupport / steps,
      hardWorkers: targetValues.hardWorkers / steps,
    };

    let count = 0;

    const interval = setInterval(() => {
      count++;
      setHappyClients((prev) => Math.min(targetValues.happyClients, Math.round(prev + incrementValues.happyClients)));
      setProjects((prev) => Math.min(targetValues.projects, Math.round(prev + incrementValues.projects)));
      setHoursOfSupport((prev) => Math.min(targetValues.hoursOfSupport, Math.round(prev + incrementValues.hoursOfSupport)));
      setHardWorkers((prev) => Math.min(targetValues.hardWorkers, Math.round(prev + incrementValues.hardWorkers)));

      if (count >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-20 lg:p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-5">
        {/* Happy Clients */}
        <div className="flex flex-row gap-5 lg:w-1/4 mb-10">
          <div>
            <BsEmojiSmile className=" text-5xl text-blue-400" />
          </div>
          <div className="text-left">
            <span className="text-5xl font-bold">{happyClients}</span>
            <p className="text-gray-400 text-sm mt-5">
              <span className="text-gray-500 font-semibold">Happy Clients </span> consequuntur quae
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-row gap-5 lg:w-1/4 mb-10">
          <div>
            <GoProjectRoadmap className="text-5xl text-blue-400" />
          </div>
          <div className="text-left">
            <span className="text-5xl font-bold">{projects}</span>
            <p className="text-gray-400 text-sm mt-5">
              <span className="text-gray-500 font-semibold">Projects </span>
              adipisci atque cum quia aut
            </p>
          </div>
        </div>

        {/* Hours of Support */}
        <div className="flex flex-row gap-5 lg:w-1/4 mb-10">
          <div>
            <SlEarphonesAlt className="text-5xl text-blue-400" />
          </div>
          <div className="text-left">
            <span className="text-5xl font-bold">{hoursOfSupport}</span>
            <p className="text-gray-400 text-sm mt-5">
              <span className="text-gray-500 font-semibold">Hours Of Support </span> 
               aut commodi quaerat
            </p>
          </div>
        </div>

        {/* Hard Workers */}
        <div className="flex flex-row gap-5 lg:w-1/4 mb-10">
          <div>
            <HiOutlineUsers className="text-5xl text-blue-400" />
          </div>
          <div className="text-left">
            <span className="text-5xl font-bold">{hardWorkers}</span>
            <p className="text-gray-400 text-sm mt-5">
              <span className="text-gray-500 font-semibold">Hard Workers</span> rerum asperiores dolor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
