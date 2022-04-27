import axios from "axios";
import { useEffect, useState } from "react";
import HomeIcon from "../../components/homeIcon/HomeIcon";
import Search from "../../components/search/Search";
import "./Casas.scss"
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { Loader } from "../../components/loader/Loader";

export default function Casas(){
    const [casas, setCasas] = useState([]);
    const [filterHouses, setFilterHouses] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      const getCasas = async () => {
        const res = await axios.get("https://api.got.show/api/show/houses");
  
        console.log(res.data);
        setCasas(res.data);
        setFilterHouses(res.data);
        setLoader(false);
      };
  
      getCasas();
    }, []);


    const onFilter = (inputValue)=>{
      let filterHouse = filterHouses.filter ((house) => {
        if(house.name.toLowerCase().includes(inputValue.toLowerCase())){
          return house; 
        }
        return false;
      })
      setCasas(filterHouse);
    }
  
    
  
    return(
    
    <>
    {loader ? <Loader /> : "container-gallery"}
    <div className="container-gallery">
    <div className="container-gallery__all">
    <div className="row">
    {casas.map((casa) => ( 
      <div className="col-12 col-md-6 col-lg-2" key={casa.id}>
        <Link className="container-gallery__link"  to= {"/casas/" + casa.name}>
        <figure className="container-gallery__" >
        {casa.logoURL ? <img className="container-gallery__figure__img" src={casa.logoURL} alt={casa.logoURL} /> : <img className="container-gallery__figure__tipo" src="https://www.seekpng.com/png/full/8-82441_lash-mini-shield-game-of-thrones-fanon-houses.png" alt={casa.logoURL} />}
        <p className="casas-p">{casa.name}</p>
        </figure>
        </Link>
        </div>
     
    ))}
    </div>
    </div>
    </div>
    <Nav/>
    <Search onFilter={onFilter}/>
    <HomeIcon/>
    
    
    </>
)
}