import { NavLink } from "react-router-dom"
import "./Nav.scss"
import { useTranslation } from "react-i18next";

export default function Nav(){
    const { t, i18n } = useTranslation(["translation"]);

    return(
        <div className="div-navBar">
        <ul className="ul-navBar">
            <li className="li-navBar">
                <NavLink to = "/Personajes" className="link" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t("PERSONAJES")}</NavLink>
            </li>
            <li className="li-navBar">
                <NavLink to = "/casas" className="link" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t("CASAS")}</NavLink>
            </li>
            <li className="li-navBar">
            <NavLink to = "/cronologia" className="link" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t("CRONOLOGIA")}</NavLink>
            </li>
        </ul>
    </div>
    )
}