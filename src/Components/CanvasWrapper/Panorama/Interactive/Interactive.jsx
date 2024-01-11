import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Bounce from "../Bounce/Bounce";
import MaskSphere from "../MaskSphere/MaskSphere";
import PanoramaArrows from "../PanoramaArrows/PanoramaArrows";
import PanoramaInfos from "../PanoramaInfos/PanoramaInfos";

import { setPanoramaContent } from '../../../../store/reducers/statePanorama';
import { useEffect } from 'react';

Interactive.propTypes = {
    panoram: PropTypes.object,
    setMaterial: PropTypes.func,
    textureLoader: PropTypes.object
};

export default function Interactive({ panoram, setMaterial, textureLoader }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPanoramaContent(panoram.content));
    }, [panoram.content, dispatch])

    return <>
        {panoram.interactive.arrow.map((item, index) => <PanoramaArrows key={index} item={item} isShow={panoram.isShow} setMaterial={setMaterial} />)}
        {panoram.interactive.bounce && panoram.interactive.bounce.map((item, index) => <Bounce key={index} item={item} isShow={panoram.isShow} setMaterial={setMaterial} />)}
        {panoram.interactive.mask.map((item, index) => <MaskSphere key={index} id={panoram.id + 1} texture={textureLoader.load(item.image)} args={item.args} />)}
        {panoram.interactive.info?.map((item, index) => <PanoramaInfos key={index} position={item.position} rotation={item.rotation} scale={item.scale} />)}
    </>
}