import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Rod from './Rod/Rod';
import TopSide from './TopSide/TopSide';
import cursor from '../../../../static/cursor';
import annotationPopUp from '../../../../static/annotationPopUp';
import { setPanoram, setPanoramaIFrame } from '../../../../store/reducers/statePanorama';

Annotation.propTypes = {
    item: PropTypes.object,
};

export default function Annotation({ item }) {
    const dispatch = useDispatch();
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const [height, setHeight] = useState(null);
    const [isHover, setIsHover] = useState(false);
    const [isAnimation, setAnimation] = useState(false);
    const [renderColors, setRenderColors] = useState([]);
    const [targetYPosition, setTargetYPosition] = useState(0);
    const [renderParameters, setRenderParameters] = useState({
        thetaRing: Math.PI * 2,
        radiusCircle: 5,
        svgOpacity: 1,
        heightRod: 13.4,
    });

    const handlerLeave = () => {
        setIsHover(false);
        cursor(false);
    }

    const handlerMove = () => {
        setIsHover(true);
        cursor(true);
    }

    const openPopUp = (event, item) => {
        event.stopPropagation();
        if (item.panoram) {
            annotationPopUp(dispatch, true, item, targetYPosition);
            dispatch(setPanoram(item.panoram));
        }
        else {
            annotationPopUp(dispatch, true, item, targetYPosition);
            dispatch(setPanoramaIFrame(item.iframe))
        }
    }

    const animationHide = (thetaRing, radiusCircle, svgOpacity, heightRod) => {
        const tl = gsap.timeline({
            onUpdate: () => setRenderParameters({
                ...renderParameters
            }),
        })
        tl.to(renderParameters, {
            duration: .3,
            svgOpacity: svgOpacity,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            delay: .2,
            duration: .3,
            radiusCircle: radiusCircle,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .6,
            thetaRing: thetaRing,
            ease: 'bounce',
        })
        tl.to(renderParameters, {
            duration: .3,
            heightRod: heightRod,
            ease: 'bounce',
        })
    }

    const animationShow = (thetaRing, radiusCircle, svgOpacity, heightRod) => {
        const tl = gsap.timeline({
            onUpdate: () => setRenderParameters({
                ...renderParameters
            }),
        })
        tl.to(renderParameters, {
            duration: .3,
            heightRod: heightRod,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .6,
            thetaRing: thetaRing,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            delay: .2,
            duration: .3,
            radiusCircle: radiusCircle,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .3,
            svgOpacity: svgOpacity,
            ease: "sine.inOut",
        })
    }

    useEffect(() => {
        setTargetYPosition(renderParameters.heightRod + renderParameters.radiusCircle + 2)
    }, [renderParameters.heightRod, renderParameters.radiusCircle])

    useEffect(() => {
        if (item.color.length === 0) {
            setAnimation(true)
        } else if (item.color.length > 0) {
            setAnimation(false);
            setRenderColors(item.color)
        }

    }, [item.color])

    useEffect(() => {
        setHeight(renderParameters.heightRod)
    }, [item.position, renderParameters.heightRod])

    useEffect(() => {
        isAnimation ? animationHide(0, 0, 0, 2) : animationShow(Math.PI * 2, 5, 1, 13.4)
    }, [isAnimation]);

    return (
        <group
            position={item.position}
            onPointerLeave={() => { !isPanorama && handlerLeave() }}
            onPointerMove={() => { !isPanorama && handlerMove() }}
            onClick={(event) => { !isPanorama && openPopUp(event, item) }}
        >
            <TopSide
                colors={renderColors}
                radiusCircle={renderParameters.radiusCircle}
                thetaRing={renderParameters.thetaRing}
                svgOpacity={renderParameters.svgOpacity}
                heightRod={height}
                id={item.id}
                isHover={isHover}
            />
            <Rod height={height} />
        </group>
    );
}
