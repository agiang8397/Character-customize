import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";
import Title from "./components/Title";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  earrings: 32,
  hats: 28,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const [earrings, setEarrings] = useState(2);
  const [hats, setHats] = useState(2);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setHats(Math.floor(Math.random() * total.hats));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };
  useEffect(() => {
    randomize();
  }, []);
  return (
    <div className="App">
      <Title />
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrow={eyebrows}
              glasses={glasses}
              earrings={earrings}
              hats={hats}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <PartList
            total={total.body}
            path="body"
            set={setBody}
            selected={body}
            name="Body"
          />

          <PartList
            total={total.eyes}
            path="eyes"
            set={setEyes}
            selected={eyes}
            zoom={2.5}
            top="35px"
            name="Eyes"
          />

          <PartList
            total={total.hair}
            path="hair"
            set={setHair}
            selected={hair}
            name="Hair"
          />

          <PartList
            total={total.mouth}
            path="mouths"
            set={setMouth}
            selected={mouth}
            zoom={2}
            name="Mouth"
          />

          <PartList
            total={total.eyebrows}
            path="eyebrows"
            set={setEyebrow}
            selected={eyebrows}
            name="Eyebrows"
          />

          <PartList
            total={total.glasses}
            path="accessories/glasses"
            set={setGlasses}
            selected={glasses}
            name="Glasses"
          />

          <PartList
            total={total.earrings}
            path="accessories/earrings"
            set={setEarrings}
            selected={earrings}
            name="Earrings"
          />

          <PartList
            total={total.hats}
            path="accessories/hats"
            set={setHats}
            selected={hats}
            name="Hats"
          />

          <PartList
            total={total.clothing1}
            path="clothes/layer_1"
            set={setClothing1}
            selected={clothing1}
            name="Clothing 1"
          />

          <PartList
            total={total.clothing2}
            path="clothes/layer_2"
            set={setClothing2}
            selected={clothing2}
            name="Clothing 2"
          />

          <PartList
            total={total.clothing3}
            path="clothes/layer_3"
            set={setClothing3}
            selected={clothing3}
            zoom={2}
            top="-15px"
            name="Clothing 3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
