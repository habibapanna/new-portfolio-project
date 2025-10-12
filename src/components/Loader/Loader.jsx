import { CgSpinnerTwoAlt } from 'react-icons/cg';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
      <CgSpinnerTwoAlt className="text-7xl text-pink-500 animate-spin" />
    </div>
  );
};

export default Loader;
