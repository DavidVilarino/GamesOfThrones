
import "./GoBackIcon.scss"
import GoBack from "../../assets/icons/back.svg"
import { useTranslation } from "react-i18next";


export default function GoBackIcon(){

    const { t, i18n } = useTranslation(["translation"]);

    return(

        <div className="b-iconBack">
        
            <img className="b-iconBack__img" src={GoBack} alt="backicon" />
            
            <h4 className="b-iconBack__text">{t("Volver")}</h4>
            
            
        </div>
    )
}
