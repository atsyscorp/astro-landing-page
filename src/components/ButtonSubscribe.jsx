import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Button() {

    const [suscribe, setSubscribe] = useState(false);
    return (
        <>
            <button
                onClick={() => {
                    toast.success("Felicidades, ya estás suscrito");
                    setSubscribe(!suscribe);
                }}>
                {
                    suscribe ? 'Suscrito' : 'Click para suscribirte'
                }
            </button>
            <ToastContainer />
        </>
    )
}

export default Button;