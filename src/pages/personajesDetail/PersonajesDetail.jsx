import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Flags from "../../components/flags/Flags";
import GoBackIcon from "../../components/gobackicon/GoBackIcon";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import { useTranslation } from "react-i18next";
import { Link , generatePath } from "react-router-dom";
import "./PersonajesDetail.scss";

export default function PersonajesDetail() {

  const { t,} = useTranslation(["translation"]);


  const urlThrones = "https://api.got.show/api/show/characters/";
  const [characterDetail, setCharacterDetail] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    const getCharacterName = async () => {
      const res = await axios.get(`${urlThrones}/${name}`);

      console.log(res.data);
      setCharacterDetail(res.data);
    };
    getCharacterName();
  }, []);

 
  const [houseDetail, setHousesDetail] = useState([]);
  let {id} = useParams("id");

 

  useEffect(() => {
     const gethouseName = () => {
     axios("https://api.got.show/api/show/houses/" + characterDetail.house).then(
      (res) => {
        if (res.data[0] !== undefined && characterDetail) {
          console.log(res.data[0]);
          setHousesDetail(res.data[0]);
        }
      });
    }
    gethouseName();
  },[characterDetail.house]);

  return (
    <>
      <div className="character-div__container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <figure className="character-figure">
              <img
                className="character-figure__img"
                src={characterDetail.image}
                alt="img"
              />
              <h1 className="character-figure__name">{characterDetail.name}</h1>
            </figure>
          </div>
        </div>

        <div className="info-div">
          <div className="info-div__house col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("CASA")}</h1>
            <img className="info-logo" src={houseDetail.logoURL} alt="house-logo" />
          </div>
          <div className="info-div__allegiances col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("ALIANZAS")}</h1>
            {Array.isArray(characterDetail.allegiances) ? (
              characterDetail.allegiances.map((item, i) => (
                <p className="info-p" key={i}>
                  {item}
                </p>
              ))
            ) : (
              <p className="info-p">{characterDetail.allegiances}</p>
            )}
          </div>
          <div className="info-div__appearances col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("APARICIONES")}</h1>
            {Array.isArray(characterDetail.appearances) ? (
              characterDetail.appearances.map((item, i) => (
                <p className="info-p" key={i}>
                  {item}
                </p>
              ))
            ) : (
              <p className="info-p">{characterDetail.appearances}</p>
            )}
          </div>
          <div className="info-div__father col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("PADRE")}</h1>
            <p className="info-p">{characterDetail.father}</p>
          </div>
          <div className="info-div__siblings col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("DESCENDIENTES")}</h1>
            {Array.isArray(characterDetail.siblings) ? (
              characterDetail.siblings.map((item, i) => (
                <p className="info-p" key={i}>
                  {item}
                </p>
              ))
            ) : (
              <p className="info-p">{characterDetail.siblings}</p>
            )}
          </div>
          <div className="info-div__title col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("TITULOS")}</h1>
            {Array.isArray(characterDetail.titles) ? (
              characterDetail.titles.map((item, i) => (
                <p className="info-p" key={i}>
                  {item}
                </p>
              ))
            ) : (
              <p className="info-p">{characterDetail.titles}</p>
            )}
          </div>
        </div>
      </div>

      <Flags />
      <HomeIcon />
      <Link to={generatePath("/personajes")}>
      <GoBackIcon />
      </Link>
    </>
  );
}
