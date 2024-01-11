import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

import { setActiveStatus, setIsLoad, setPanoram, setPanoramaIFrame, setPanoramaIFrameStatus, setPanoramaIFrameLoad } from '../../../store/reducers/statePanorama';
import { setDefault } from '../../../store/reducers/stateCamera';

import s from './ClosePanorama.module.scss';
import { useEffect, useState } from "react";

export default function ClosePanorama() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.statePanorama);
    const [isActive, setIsActive] = useState(false);

    const closePanorama = () => {
        dispatch(setActiveStatus(false));
        dispatch(setIsLoad(false));
        dispatch(setPanoram([]));
        dispatch(setDefault());
        dispatch(setPanoramaIFrameStatus(false));
        dispatch(setPanoramaIFrameLoad(false));
        dispatch(setPanoramaIFrame({}));
    }

    useEffect(() => {
        if ((panorama.isActive && panorama.isLoad) || (panorama.isPanoramaIFrame && !panorama.isPanoramaIFrameLoad)) {
            const timeoutId = setTimeout(() => setIsActive(true), panorama.delayStart);
            return () => clearTimeout(timeoutId);
        } else setIsActive(false);
    }, [panorama])

    return (
        <>
            <button className={isActive ? s.cross + ' ' + s.active : s.cross} type="button" onClick={() => closePanorama()}>
                <RxCross2 />
            </button>
        </>
    )
}