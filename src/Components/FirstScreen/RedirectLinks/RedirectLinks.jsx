import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import s from './RedirectLinks.module.scss';
export default function RedirectLinks() {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState();
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const isPopUp = useSelector((state) => state.stateAnnotationsPopUp.isActive);

    const redirectLink = (link) => {
        // Змініть це на URL, на який ви хочете перейти
        window.location.href = link;
    }

    useEffect(() => {
        !isPopUp && !isPanorama ? setIsActive(true) : setIsActive(false);
    }, [isPopUp, isPanorama])

    return (
        <button className={isActive ? s.redirect + ' ' + s.active : s.redirect} onClick={() => redirectLink("https://avrora-poltava.netlify.app/")}>
            {t('DC.vinnitsa')}
        </button>
    )
} 