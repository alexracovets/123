import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";

import MenuBtn from "./MenuBtn/MenuBtn";
import MenuLink from "./MenuLink/MenuLink";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import { setActiveStatus, setIsLoad, setPanoram, setPanoramaIFrame, setPanoramaIFrameStatus, setPanoramaIFrameLoad } from '../../store/reducers/statePanorama'; 
import { setDefault } from '../../store/reducers/stateCamera';
import annotationPopUp from '../../static/annotationPopUp';

import s from './Menu.module.scss';
import { useEffect, useState } from 'react';

export default function Menu() {
    const stateMenu = useSelector((state) => state.stateMenu);
    const panorama = useSelector((state) => state.statePanorama.isActive);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isShort, setIsShort] = useState(false);

    const renderBtn = () => stateMenu.btns.map((button) => <MenuBtn item={button} key={button.id} />);
    const renderLink = () => stateMenu.links.map((button) => <MenuLink item={button} key={button.id} />);

    const toDefault = () => {
        annotationPopUp(dispatch, false);
        dispatch(setActiveStatus(false));
        dispatch(setIsLoad(false));
        dispatch(setPanoramaIFrameStatus(false));
        dispatch(setPanoramaIFrameLoad(false));
        dispatch(setPanoram([]));
        dispatch(setPanoramaIFrame({}));
        dispatch(setDefault());
    }

    useEffect(() => {
        setIsShort(panorama)
    }, [panorama])

    return (
        <aside className={isShort ? s.menu__wrapper + ' ' + s.short : s.menu__wrapper}>
            <button className={s.menu} onClick={() => toDefault()}>{t('menu.menu')}</button>
            <span className={s.line}></span>
            <div className={s.btns}>
                <div className={s.btns__wrapper}>
                    {renderBtn()}
                    {renderLink()}
                </div>
                <LanguageSwitcher />
            </div>
            <button className={s.home} type='button' onClick={() => toDefault()}>
                <FaHome />
            </button>
        </aside>
    )
}
