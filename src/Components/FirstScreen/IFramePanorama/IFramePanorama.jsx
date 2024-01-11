
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

import { setLoaderIFrameStatus } from '../../../store/reducers/stateLoaderIFrame';

import s from './IFramePanorama.module.scss';

export default function IFramePanorama() {
    const [isLoad, setIsLoad] = useState(false);
    const links = useSelector((state) => state.statePanorama.panoramaIFrameCurrent);
    const panorama = useSelector((state) => state.statePanorama);
    const [link, setLink] = useState(null);
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const onLoad = () => {
        setIsLoad(true);
        dispatch(setLoaderIFrameStatus(false));
    }

    useEffect(() => {
        if (links && panorama.isPanoramaIFrame) {
            setLink(links[`link_${i18n.language}`])
        } else {
            setLink(null);
            setIsLoad(false);
        }
    }, [links, panorama, i18n.language]);

    useEffect(() => {
        isLoad && onLoad()
    }, [isLoad])
    
    return (
        <div className={isLoad ? s.frame_wrapper + ' ' + s.active : s.frame_wrapper}>
            {
                link && <iframe className={s.frame} src={link} onLoad={() => setIsLoad(true)} />
            }
        </div>
    )
}