import AnnotationPopUp from "./AnnotationPopUp/AnnotationPopUp";
import CanvasWrapper from "../CanvasWrapper/CanvasWrapper";
import ClosePanorama from "./ClosePanorama/ClosePanorama";
import Loader from "./Loader/Loader";
import Menu from "../Menu/Menu";
import Logo from "./Logo/Logo";

import LoaderMain from "./LoaderMain/LoaderMain";
import Music from "../CanvasWrapper/Panorama/Music/Music";
import PanoramPopUp from "./PanoramPopUp/PanoramPopUp";
import ToBackPopUp from "./ToBackPopUp/ToBackPopUp";
import IFrame from "./IFrame/IFrame";

import s from './FirstScreen.module.scss';
import RedirectLinks from "./RedirectLinks/RedirectLinks";
import IFramePanorama from "./IFramePanorama/IFramePanorama";

export default function FirstScreen() {

    return (
        <section className={s.first__screen}>
            <Menu />
            <div className={s.container}>
                <CanvasWrapper />
                <AnnotationPopUp />
                <PanoramPopUp />
                <ToBackPopUp />
                <Music />
                <IFrame />
                <IFramePanorama />
                <Loader />
                <LoaderMain />
                <ClosePanorama />
                <Logo />
                <RedirectLinks />
            </div>
        </section>
    )
} 