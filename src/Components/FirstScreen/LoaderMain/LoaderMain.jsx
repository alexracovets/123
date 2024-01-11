import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import logoUa from '/img/logo/logo_ua.svg';

import s from './LoaderMain.module.scss';

export default function LoaderMain() {
    const { t } = useTranslation();
    const [isActive, setActive] = useState(false);
    const panorama = useSelector((state) => state.statePanorama);
    const loaderStatus = useSelector((state) => state.stateLoaderMain.isActive);
    const loaderStatusIFrameStatus = useSelector((state) => state.stateLoaderIFrame.isActive);
    const loaderStatusIFrame = useSelector((state) => state.statePanorama.isPanoramaIFrameLoad);

    //вкл/викл лоудера панорами/звіту
    useEffect(() => {
        if ((panorama.isActive && !panorama.isLoad) || (panorama.isPanoramaIFrame && !panorama.isPanoramaIFrameLoad)) {
            setActive(true)
        } else {
            const timeoutId = setTimeout(() => setActive(false), 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [panorama])

    useEffect(() => {
        if (loaderStatus || loaderStatusIFrame) {
            setActive(true)
        } else {
            const timeoutId = setTimeout(() => setActive(false), 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [loaderStatus, loaderStatusIFrame, loaderStatusIFrameStatus]);
    
    return (
        <div className={isActive ? s.panorama__load + ' ' + s.active : s.panorama__load}>
            <div className={s.panorama__wrapper}>
                <img src={logoUa} alt="logo" />
                <p>{t(panorama.isActive || panorama.isPanoramaIFrame ? 'load_panoram' : 'load_report')}</p>
            </div>
        </div>
    )
}