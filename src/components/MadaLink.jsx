import { useState, useEffect } from "react";

// export default function MadaLink() {
//     const [pressedKeys, setPressedKeys] = useState("");
//     useEffect(() => {
//         if (pressedKeys.slice(-5).toUpperCase() === "MAGDA"
//             || pressedKeys.slice(-4).toUpperCase() === "MADA"
//             || pressedKeys.slice(-4).toUpperCase() === "MMMM") {

//             return (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={handleModalClose}>&times;</span>
//                         <iframe src="https://photos.app.goo.gl/ZabYzb6a8zTDijjQ9" title="Modal Link"></iframe>
//                     </div>
//                 </div>
//             )
//         }
//         return () => {
//             window.removeEventListener("keyup", handleKeyUp);
//         };
//     }, [pressedKeys]);
//     const handleKeyUp = (k) => {
//         setPressedKeys(prevKeys => prevKeys + k.key);
//         console.log(pressedKeys)
//     };
//     window.addEventListener("keyup", handleKeyUp);


//     const handleModalClose = () => {
//         return null;
//     };
//     return null;

// }

// window.addEventListener("keyup", handleKeyUp);
export default function MadaLink() {
    const [pressedKeys, setPressedKeys] = useState("");

    useEffect(() => {
        if (pressedKeys.slice(-5).toUpperCase() == "MAGDA"
            || pressedKeys.slice(-4).toUpperCase() == "MADA") {
            window.open('https://photos.app.goo.gl/ZabYzb6a8zTDijjQ9', '_blank');
        }
    }, [pressedKeys])


    useEffect(() => {
        const handleKeyUp = (k) => {
            setPressedKeys(prevKeys => prevKeys + k.key);
        };

        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return null;
}
