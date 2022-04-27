import "./Search.scss";
import { useTranslation } from "react-i18next";

export default function Search({ onFilter }) {
  const { t } = useTranslation(["translation"]);

  return (
    <div className="b-div__container">
      <form>
        <input
          placeholder={t("Buscar...")}
          className="b-input"
          onInput={(e) => onFilter(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
