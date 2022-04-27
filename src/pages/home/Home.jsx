import { useTranslation } from "react-i18next";
import Nav from "../../components/nav/Nav";
import "./Home.scss";

export default function Home() {

  const { t, i18n } = useTranslation(["translation"]);
  return (
    
    <>
    <div>
      
      <div className="div-container">
        <div className="div-title">
          <h1 className="title">{t("JUEGO DE TRONOS")}</h1>
        </div>
      </div>
    </div>
    <Nav/>
    </>
  );
}
