import "./Flags.scss"
import SpFlag from "../../assets/icons/spain.svg"
import EnFlag from "../../assets/icons/united-kingdom 1.svg"
import {useTranslation} from "react-i18next"

export default function Flags(){

  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };


    return(
        <div className="flags">
        <img src={SpFlag} className="sp-flag" alt={t("translation:es")} onClick={() => changeLanguage("es")}/>
        <img src={EnFlag} className="en-flag" alt={t("translation:en")}  onClick={() => changeLanguage("en")}/>
      </div>
    )
    
}