import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

import { setPanoramMask } from '../../../store/reducers/stateAnnotationsPopUp';

import s from './PanoramPopUp.module.scss';

export default function PanoramPopUp() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const isMask = useSelector((state) => state.stateAnnotationsPopUp.isPanoramMask);
    const content = useSelector((state) => state.statePanorama.panoramaContent);
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const [textLength, setTextLength] = useState(0);

    const closePopUp = () => {
        dispatch(setPanoramMask(false))
    }

    useEffect(() => {
        isPanorama === false && closePopUp()
    }, [isPanorama])

    useEffect(() => {
        setIsActive(isMask)
    }, [isMask])

    useEffect(() => {
        setTextLength(t(`panoramaPopUp.${content}.tag.length`))
    }, [content, t])

    return (
        <aside className={isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper}>
                <button className={s.cross} type="button" onClick={() => closePopUp()}>
                    <RxCross2 />
                </button>
                <h4>{t(`panoramaPopUp.${content}.title`)}</h4>
                {
                    Array.from({ length: textLength }, (_, index) => (
                        <p key={index}>{t(`panoramaPopUp.${content}.tag.${index}`)}</p>
                    ))
                }

            </div>
        </aside>
    )
} 