import Data from "./Data";
import Icones from "./Icones";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Card = ({ titulo, projeto, data, nomeLista, editar, apagar }) => {
  return (
    <div className="flex flex-col bg-white border border-l-4 border-l-[#7CCCFF] rounded-md h-[136px] w-96">
      <div className="flex flex-col gap-2 m-4 items-start justify-center">
        <div className="flex items-center justify-between w-96 pr-10">
          <h1 className="font-bold">{titulo}</h1>
          <div className="flex gap-4">
            <button onClick={editar}>
              <FaEdit />
            </button>
            <button onClick={apagar}>
              <MdDelete />
            </button>
          </div>
        </div>
        <h2 className="text-[#97A3B3]">{projeto}</h2>
      </div>
      <div className="flex justify-between ml-4 mr-5">
        <Icones />
        <Data data={data} nomeLista={nomeLista} />
      </div>
    </div>
  );
};

export default Card;
