import { useState } from "react";
import Form from "./components/Form";
import Loading from "./components/Loading";
import { chatOptions, imgGenerator } from "./utils/optionsApi";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import UserText from "./components/response/UserText";
import RobotText from "./components/response/RobotText";

function App() {
  const [chat, setChat] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [toggle, setToogle] = useState(false);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const eventImage = () => {
    setLoading(true);
    imgGenerator(inputValue).then((value) => {
      let result = value.data[0].url;
      if (result.length > 0) {
        setLoading(false);
        const newArr = [<img alt="img" src={result} />];
        setImage([...image, ...newArr]);
      }
    });
    setInputValue("");
    setToogle(false);
  };

  const eventText = () => {
    setLoading(true);
    chatOptions(inputValue).then((data) => {
      console.log(data);
      let result = data.choices[0].message.content;
      if (result.length > 0) {
        setLoading(false);
        const newArr = [
          <UserText value={inputValue} />,
          <RobotText value={result} />,
        ];
        setChat([...chat, ...newArr]);
      }
    });
    setInputValue("");
    setToogle(true);
  };

  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-[40px] font-bold text-white">IG-AI</h1>
        <UilBracketsCurly size="100" color="#FFF" />
      </div>
      <Form
        inputValue={inputValue}
        onChange={onChange}
        eventImage={eventImage}
        eventText={eventText}
      />
      <Loading loading={loading} />
      {toggle && (
        <ul className="overflow-y-auto min-h-[80vh]">
          {chat.map((value) => value)}
        </ul>
      )}
      {!toggle && (
        <ul className="overflow-y-auto min-h-[80vh] flex items-start justify-start flex-wrap gap-2">
          {image.map((value) => value)}
        </ul>
      )}
    </>
  );
}

export default App;
