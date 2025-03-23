import { useEffect, useState } from "react";
import "../css/splash.css"; // Asegúrate de que el archivo de estilos exista

const SplashScreen = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Iniciar desvanecimiento
            setTimeout(onFinish, 250); // Esperar a que termine la animación antes de ocultarlo
        }, 2000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`splash-screen ${fadeOut ? "fade-out" : ""} d-flex flex-column`} >
            <h1 data-aos="fade-left"> {`</ SPYLE >`}</h1>
            <h3 className='fs-3 font-weight-light' data-aos="fade-right" id='subtitle'>Easy Solutions</h3>
        </div>
    );
};

export default SplashScreen;

