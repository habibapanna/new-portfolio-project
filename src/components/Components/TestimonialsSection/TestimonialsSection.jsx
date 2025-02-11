import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-5 lg:px-6">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-5">Testimonials</h2>
        <div className="border-2 border-blue-400 w-16 mb-5"></div>
        <p className="mb-16">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div>
            <div className="bg-white rounded-lg lg:h-[200px] relative p-5 shadow-lg mb-10 mx-auto">
              <p className="italic mb-6 text-center">
                <FaQuoteLeft className="text-blue-400 mb-4 inline-block mr-3" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat
                dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <FaQuoteRight className="text-blue-400 inline-block ml-3" />
              </p>

              {/* Speech bubble tail */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '35px solid transparent',
                  borderRight: '35px solid transparent',
                  borderTop: '35px solid white',
                }}
              ></div>
            </div>

            {/* Name, Role, and Image */}
            <div className="mb-10 lg:mb-20 text-center">
              <img
                className="h-24 w-24 rounded-full mx-auto shadow-md object-cover"
                src="https://i.postimg.cc/15PrRNSz/pexels-olly-762020.jpg"
                alt="Matt Brandon"
              />
              <p className="font-bold text-lg">Matt Brandon</p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div>
            <div className="bg-white rounded-lg lg:h-[200px] shadow-lg relative p-5 mb-10 mx-auto">
              <p className="italic mb-6 text-center">
                <FaQuoteLeft className="text-blue-400 mb-4 inline-block mr-3" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <FaQuoteRight className="text-blue-400 inline-block ml-3" />
              </p>

              {/* Speech bubble tail */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '35px solid transparent',
                  borderRight: '35px solid transparent',
                  borderTop: '35px solid white',
                }}
              ></div>
            </div>

            {/* Name, Role, and Image */}
            <div className="mb-10 lg:mb-20 text-center">
              <img
                className="h-24 w-24 rounded-full mx-auto shadow-md object-cover"
                src="https://i.postimg.cc/ydZ2KSHP/pexels-danxavier-1239291.jpg"
                alt="John Larson"
              />
              <p className="font-bold text-lg">John Larson</p>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div>
            <div className="bg-white rounded-lg lg:h-[200px] shadow-lg relative p-5 mb-10 mx-auto">
              <p className="italic mb-6 text-center">
                <FaQuoteLeft className="text-blue-400 mb-4 inline-block mr-3" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="text-blue-400 inline-block ml-3" />
              </p>

              {/* Speech bubble tail */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '35px solid transparent',
                  borderRight: '35px solid transparent',
                  borderTop: '35px solid white',
                }}
              ></div>
            </div>

            {/* Name, Role, and Image */}
            <div className="mb-10 lg:mb-20 text-center">
              <img
                className="h-24 w-24 rounded-full mx-auto shadow-md object-cover"
                src="https://i.postimg.cc/Wp99vJwP/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg"
                alt="Saul Goodman"
              />
              <p className="font-bold text-lg">Saul Goodman</p>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
