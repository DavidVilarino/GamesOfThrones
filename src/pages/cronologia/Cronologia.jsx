import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import Nav from "../../components/nav/Nav";
import "./Cronologia.scss";
import Vector from "../../assets/images/Vector.svg";
import { Loader } from "../../components/loader/Loader";

let charactersOrdered = [];
let characterPair = [];
let characterOdd = [];

export default function Cronologia() {
  const { t, i18n } = useTranslation(["translation"]);
  const [loader, setLoader] =useState(true);

  const [charPair, setCharPair] = useState([]);
  const [charOdd, setCharOdd] = useState([]);
  const [highToLow, setHighToLow] = useState(true);

  const getCharacters = () => {
    axios("https://api.got.show/api/show/characters/").then((res) => {
      charactersOrdered = [];
      for (const character of res.data) {
        if (character.age) {
          if (character.age.age) {
            charactersOrdered.push(character);
          }
        }
      }
      console.log(charactersOrdered);

      showOrderCharacters();
      setHighToLow(false);
      setLoader(false);
    });
  };

  const showOrderCharacters = () => {
    if (highToLow) {
      charactersOrdered.sort((a, b) => a.age.age - b.age.age);
    } else {
      charactersOrdered.sort((a, b) => b.age.age - a.age.age);
    }

    characterPair = [];
    characterOdd = [];

    for (let i = 0; i < charactersOrdered.length; i++) {
      if (i % 2 === 0) {
        characterPair.push(charactersOrdered[i]);
      } else {
        characterOdd.push(charactersOrdered[i]);
      }
    }
    console.log(charPair);
    console.log(charOdd);

    setCharPair(characterPair);
    setCharOdd(characterOdd);
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const changeOrder = () => {
    if (highToLow) {
      setHighToLow(false);
      showOrderCharacters();
    } else {
      setHighToLow(true);
      showOrderCharacters();
    }
  };

  console.log(characterPair);
  console.log(characterOdd);

  return (
    <>
    {loader ? <Loader/> : "c-chrono"}
      <div className="c-chrono">
        <div className="c-chrono__div">
          <div className="c-chrono__arrow">
            <button onClick={changeOrder} className="c-chrono__button">
              {" "}
              {charPair[0] ? charPair[0].age.age : "0"}{" "}
            </button>

            <img
              src={Vector}
              alt="vector"
              className={
                highToLow
                  ? "c-chrono__vector"
                  : "c-chrono c-chrono__vector--invert"
              }
            />
            <hr className="c-chrono__hr" />
          </div>

          <div className="c-chrono__images">
            <div className="c-chrono__column">
              {charPair.map((item, i) => (
                <div className="c-chrono__character" key={i}>
                  <p className="c-chrono__info">{item.age.age}</p>
                  <p className="c-chrono__info">{item.name}</p>
                  <img className="c-chrono__photo" src={item.image} />
                </div>
              ))}
            </div>

            <hr className="c-chrono__hr2"></hr>

            <div className="c-chrono__column c-chrono__column--right">
              {charOdd.map((item, i) => (
                <div className="c-chrono__character" key={i}>
                  <p className="c-chrono__info">{item.age.age}</p>
                  <p className="c-chrono__info">{item.name}</p>
                  <img className="c-chrono__photo" src={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HomeIcon />
      <Nav />
    </>
  );
}
