"use client"
import React, { useRef, useEffect } from 'react';
import styles from './logo.module.css'

const Logo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.log('Autoplay was prevented', err);
            });
        }
    }, []);

    return (
        <div className={styles.logoVideoDiv}>
            <video
                ref={videoRef}
                className={styles.logoVideo}
                autoPlay
                muted
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
            >
                <source src="/Logo.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Logo;
