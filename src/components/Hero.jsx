import PicIntro770x144 from "../assets/img/sitting-broad-770x144.jpg";
import PicIntro2020x379 from "../assets/img/sitting-broad-2020x379.jpg";
import PicIntro2760x518 from "../assets/img/sitting-broad-2760x518.jpg";
import PicIntro3333x625 from "../assets/img/sitting-broad-3333x625.jpg";
import PicMobile270x72 from "../assets/img/sitting-broad-mobile-270x72.jpg"
import PicMobile1510x405 from "../assets/img/sitting-broad-mobile-1510x405.jpg"
import PicMobile3333x625 from "../assets/img/sitting-broad-mobile-3333x625.jpg"
import PicPrint from "../assets/img/sitting-broad-black-white.jpg"
// , ${PicIntro2760x518} 2760w
export default function Hero() {
    return (
        <>
            <section className="pic-intro desktop print-remove">
                <figure>
                    <img fetchpriority="high"
                        src={PicIntro2020x379}
                        // srcSet={`
                        //     ${PicIntro770x144} 770w,
                        //     ${PicIntro2020x379} 2020w

                        // `}
                        // sizes="90vw"
                        alt="Magda with Annapurna I in the background"
                    />
                </figure>
            </section>
            <section className="pic-intro print-add">
                <figure>
                    <img
                        src={PicPrint}
                        alt="Magda with Annapurna I in the background, in black and white"
                    />
                </figure>
            </section>
            <section className="pic-intro mobile print-remove">
                <figure>
                    <img

                        src={PicMobile1510x405}
                        // srcSet={`
                        //     ${PicMobile270x72} 270w,
                        //     ${PicMobile1510x405} 1510w
                        // `}
                        // sizes="90vw"
                        alt="Magda with Annapurna I in the background, in black and white"
                    />
                </figure>
            </section>
        </ >)
}