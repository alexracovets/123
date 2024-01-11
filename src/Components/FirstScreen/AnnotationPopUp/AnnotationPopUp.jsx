import { RxCross2 } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import annotationPopUp from '../../../static/annotationPopUp';
import { changeActiveStatus } from '../../../store/reducers/stateAnnotationsPopUp';
import { setActiveStatus, setCameraPosition, setPanoramaIFrameStatus } from '../../../store/reducers/statePanorama';
import { setLoaderIFrameStatus } from '../../../store/reducers/stateLoaderIFrame';

import s from './AnnotationPopUp.module.scss';

export default function AnnotationPopUp() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.stateAnnotationsPopUp);
    const panorama = useSelector((state) => state.statePanorama.panoramCurrent);

    const closePopUp = () => {
        annotationPopUp(dispatch, false);
    };

    const openPanorama = () => {
        if (Object.keys(panorama).length > 0) {
            dispatch(changeActiveStatus(false));
            dispatch(setActiveStatus(true));
            dispatch(setCameraPosition(panorama[0].startCamera));
        } else {
            dispatch(changeActiveStatus(false));
            dispatch(setCameraPosition([0, 100, 0]));
            dispatch(setPanoramaIFrameStatus(true));
            dispatch(setLoaderIFrameStatus(true));
        }

    }

    return (
        <aside className={state.isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper}>
                <button className={s.cross} type="button" onClick={() => closePopUp()}>
                    <RxCross2 />
                </button>
                <h3> {t(`annotation.${state.content}.title`)} </h3>
                <p className={s.location}> {t(`annotation.${state.content}.location`)} </p>
                <img className={s.image} src={`/img/annotation/${state.content}.jpg`} onClick={() => openPanorama()} />
                <button type='button' onClick={() => openPanorama()}>
                    <span>{t('annotation.button')}</span>
                    <SlArrowRight />
                </button>
            </div>
        </aside >
    )
} 