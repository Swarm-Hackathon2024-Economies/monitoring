import styles from './App.module.scss'
import {useEffect, useRef, useState} from "react";
import {Camera} from "react-camera-pro";
import styled from "styled-components";

export const App = () => {

    const cautions = [
        "運転中",
        "スマホ操作中",
        "検知状態",
        "画像検知"
    ]

    const [caution, setCaution] = useState(cautions[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * cautions.length);
            setCaution(cautions[randomIndex]);
        }, 5000);
        return () => clearInterval(interval);
    }, [cautions]);

    return (
        <div className={styles.appArea}>
            <div className={styles.liveArea}>
                {/*<h1>ライブ映像</h1>*/}
                <CameraComponent />
            </div>
            <div className={styles.stateArea}>
                <h1>運転状態</h1>
                <p>{caution}</p>
            </div>
        </div>
    )
}


const CameraComponent = () => {
    const camera = useRef(null);
    // const [image, setImage] = useState(null);

    const Wrapper = styled.div`
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
    `;

    return (
        <Wrapper className={styles.cameraComponent}>
            <Camera
                ref={camera}
                aspectRatio={"cover"}
            />
            {/*<button onClick={() => setImage(camera.current!.takePhoto())}>Take photo</button>*/}
            {/*<img src={image} alt='Taken photo'/>*/}
        </Wrapper>
    )
}

export default App
