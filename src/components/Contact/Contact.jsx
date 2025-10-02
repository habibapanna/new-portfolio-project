
import { BsEnvelope } from 'react-icons/bs';
import { LuPhone } from 'react-icons/lu';
import { SlLocationPin } from 'react-icons/sl';


const Contact = () => {

  const contactItems = [
    {
      icon: <LuPhone />, 
      title: 'Address', 
      description: 'A108 Adam Street, New York, NY 535022'
    },
    {
      icon: <SlLocationPin />, 
      title: 'Call Us', 
      description: '+1 5589 55488 55'
    },
    {
      icon: <BsEnvelope />, 
      title: 'Email Us', 
      description: 'info@example.com'
    }
  ];

  return (
    <section id="contact" className="py-12 px-5 bg-black lg:px-6">
      <div className="container mx-auto">
        <div className="text-left mb-8">
         
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Information */}
          <div style={{
            boxShadow: '0 4px 5px 3px rgba(0, 0, 0, 0.1)',
          }} className="bg-stone-900 p-8 h-[600px] lg:w-2/5">
          {contactItems.map((item, index) => (
              <div
                key={index}
                className="mb-8 flex items-start transition-colors group"
              >
                <div className="text-2xl text-blue-500 bg-green-50 group-hover:bg-blue-500 group-hover:text-white p-3 rounded-full mr-4 mb-3 lg:mb-2">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Map Section */}
            <div className="mt-5">
              <iframe
                className="w-full h-64 p-2 mb-2 shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9299642139275!2d-74.00639358459529!3d40.71277597933071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b3ccfb5%3A0x8dc7c7f1dbb6b768!2sA108%20Adam%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1616587602987!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            boxShadow: '0 4px 5px 3px rgba(0, 0, 0, 0.1)',
          }} className="bg-stone-900 p-8 h-[600px] lg:w-3/5">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-500 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full h-[160px]  md:h-[250px] border border-gray-500 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 cursor-pointer rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



{/* <div className="mb-6 flex items-start">
<SlLocationPin className="text-blue-500 text-xl mr-4 mt-1" />
<div className='mb-3'>
  <h3 className="text-xl font-semibold mb-2">Address</h3>
  <p className="text-sm">A108 Adam Street, New York, NY 535022</p>
</div>
</div>
<div className="mb-6 flex items-start">
<LuPhone className="text-blue-500 text-xl mr-4 mt-1" />
<div className='mb-3'>
  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
  <p className="text-sm">+1 5589 55488 55</p>
</div>
</div>
<div className="flex items-start mb-6 ">
<TfiEmail className="text-blue-500 text-xl mr-4 mt-1 " />
<div className='mb-3'>
  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
  <p className="text-sm">info@example.com</p>
</div>
</div> */}
