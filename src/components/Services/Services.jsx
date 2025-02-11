import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSun } from 'react-icons/ai';
import { BsCalendar4Week, BsBinoculars, BsBarChart, BsCardChecklist, BsBriefcase } from 'react-icons/bs';
import Loader from '../Loader/Loader';


const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("service-details");
    }, 1000); // Simulate loading time
  };

  const servicesData = [
    {
      icon: <BsBriefcase />,
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    },
    {
      icon: <BsCardChecklist />,
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
    },
    {
      icon: <BsBarChart />,
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      icon: <BsBinoculars />,
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      icon: <AiOutlineSun />,
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    },
    {
      icon: <BsCalendar4Week />,
      title: 'Eiusmod Tempor',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
    },
  ];

  return (
    <section id="services" className="py-12 px-5 lg:px-6">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold mb-5">Services</h2>
          <div className="border-2 border-blue-400 w-16 mb-5"></div>
          <p className='mb-16'>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer group flex items-start"
              onClick={handleClick}
            >
              <div className="text-2xl bg-blue-400 border border-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white p-3 mr-5 group-hover:bg-white group-hover:text-blue-400">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400">
                  {service.title}
                </h4>
                <p className='text-sm'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {loading && (
              <Loader></Loader>
        )}
      </div>
    </section>
  );
};

export default Services;
