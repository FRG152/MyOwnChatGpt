import { UilMessage } from "@iconscout/react-unicons";
import { UilImageEdit } from "@iconscout/react-unicons";

const Form = ({ inputValue, onChange, eventImage, eventText }) => {
  return (
    <div className="flex items-center my-2">
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Enter something..."
        className="h-[45px] w-[100%] border-gray-400 border-b-2 font-bold p-2"
      />
      <button
        id="btn"
        type="button"
        onClick={() => eventImage()}
        className="w-[50px] h-[45px] flex items-center justify-center drop-shadow-lg bg-green-500 border-green-700 border-r-2 border-b-2 transition-all duration-75 p-2 hover:border-none"
      >
        <UilImageEdit color="#FFF" />
      </button>
      <button
        id="btn"
        type="button"
        onClick={() => eventText()}
        className="w-[50px] h-[45px] flex items-center justify-center drop-shadow-lg bg-green-500 border-green-700 border-r-2 border-b-2 transition-all duration-75 p-2 hover:border-none"
      >
        <UilMessage color="#FFF" />
      </button>
    </div>
  );
};

export default Form;
