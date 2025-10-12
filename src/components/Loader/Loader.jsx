import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
      <ImSpinner9 className="text-7xl text-blue-800 animate-spin" />
    </div>
  );
};

export default Loader;
