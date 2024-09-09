import { IoMdPlay } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";


const Icones = ({moverProximo}) => {
  return (
    <div className="flex gap-1">
      <button className="flex items-center justify-center border rounded-full h-8 w-8" onClick={moverProximo}>
        <IoMdPlay color="#ABB6BF" />
      </button>
      <button className="flex items-center justify-center border rounded-full h-8 w-8">
        <FaComment  color="#ABB6BF" />
      </button>
      <button className="flex items-center justify-center border rounded-full h-8 w-8">
        <IoIosMore  color="#ABB6BF" />
      </button>
    </div>
  );
};

export default Icones;
