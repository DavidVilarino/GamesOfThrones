import GoBackIcon from "../../components/gobackicon/GoBackIcon"
import HomeIcon from "../../components/homeIcon/HomeIcon"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CasasDetail.scss"
import { Link , generatePath } from "react-router-dom";


export default function CasasDetail(){

  const { t,} = useTranslation(["translation"]);

    const urlHouses = "https://api.got.show/api/show/houses/";
    const [houseDetail, setHousesDetail] = useState([]);
    let { name } = useParams();
  
    useEffect(() => {
      const gethouseById = async () => {
        const res = await axios.get(`${urlHouses}/${name}`);
  
        console.log(res.data);
        setHousesDetail(res.data[0]);
      };
      gethouseById();
    }, []);


        return(
            <>
      <div className="house-div__container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
          <figure className="house-figure">
          {houseDetail.logoURL ? <img className="house-figure__img" src={houseDetail.logoURL} alt={houseDetail.logoURL} /> : <img className="house-figure__img" src="https://www.seekpng.com/png/full/8-82441_lash-mini-shield-game-of-thrones-fanon-houses.png" alt={houseDetail.logoURL} />}
          
            <h1 className="house-figure__name">{houseDetail.name}</h1>
          </figure>
          </div>
        </div>
        
        <div className="info-div">
          <div className="info-div__words col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("LEMA")}</h1>
            {Array.isArray(houseDetail.words) ? houseDetail.words.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.words}</p>}
          </div>
          <div className="info-div__seat col-12 col-md-6 col-lg-2">
            <h1 className="info-h1">{t("SEDE")}</h1>
            {Array.isArray(houseDetail.seat) ? houseDetail.seat.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.seat}</p>}
            </div>
            <div className="info-div__region col-12 col-md-6 col-lg-2">
              <h1 className="info-h1">{t("REGION")}</h1>
              {Array.isArray(houseDetail.region) ? houseDetail.region.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.region}</p>}
            </div>
            <div className="info-div__allegiances col-12 col-md-6 col-lg-2">
              <h1 className="info-h1">{t("ALIANZAS")}</h1>
              {Array.isArray(houseDetail.allegiance) ? houseDetail.allegiance.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.allegiance}</p>}
            </div>
            <div className="info-div__religions col-12 col-md-6 col-lg-2">
              <h1 className="info-h1">{t("RELIGIONES")}</h1>
              {Array.isArray(houseDetail.religion) ? houseDetail.religion.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.religion}</p>}
            </div>
            <div className="info-div__fundation col-12 col-md-6 col-lg-2">
              <h1 className="info-h1">{t("FUNDACION")}</h1>
              {Array.isArray(houseDetail.createdAt) ? houseDetail.createdAt.map((item,i)=>
                    <p  className="info-p" key={i}>{item}</p>) : <p className="info-p">{houseDetail.createdAt}</p>}
            </div>
            </div> 
        </div>
      
      <HomeIcon />
      <Link to={generatePath("/casas")}>
      <GoBackIcon/>
      </Link>
    </>
     
    )
}