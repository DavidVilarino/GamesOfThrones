import HomeIcon from "../../components/homeIcon/HomeIcon";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Personajes.scss";
import Search from "../../components/search/Search";
import Nav from "../../components/nav/Nav";
import { Loader } from "../../components/loader/Loader";

export default function Personajes() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");

      console.log(res.data);
      setCharacters(res.data);
      setFilterCharacters(res.data);
      setLoader(false);
    };

    getCharacters();
  }, []);

  const onFilter = (inputValue) => {
    let filterCharacter = filterCharacters.filter((character) => {
      if (character.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return character;
      }
      return false;
    });
    setCharacters(filterCharacter);
  };

  return (
    <>
      {loader ? <Loader /> : "container-gallery"}
      <div className="container-gallery">
        <div className="container-gallery__all">
          <div className="row">
            {characters.map((character) => (
              <div className="col-12 col-md-6 col-lg-2" key={character.id}>
                <Link
                  className="container-gallery__link"
                  to={"/personaje/" + character.name}
                >
                  <figure className="container-gallery__figure">
                    {character.image ? (
                      <img
                        className="container-gallery__figure__img"
                        src={character.image}
                        alt={character.name}
                      />
                    ) : (
                      <img
                        className="container-gallery__figure__img"
                        src="/"
                        alt={character.name}
                      />
                    )}
                    <p className="container-gallery__p">{character.name}</p>
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomeIcon />
      <Search onFilter={onFilter} />
      <Nav />
    </>
  );
}
