import { useEffect, useState } from "react";
import "../css/splash.css"; // Asegúrate de que el archivo de estilos exista

const SplashScreen = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Iniciar desvanecimiento
            setTimeout(onFinish, 500); // Esperar a que termine la animación antes de ocultarlo
        }, 2000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`splash-screen ${fadeOut ? "fade-out" : ""} d-flex flex-column`}>
            <h1>N E U R O T I C A</h1>
            <h3 className='fs-3 font-weight-light' id='subtitle'>it girl</h3>
        </div>
    );
};

export default SplashScreen;

