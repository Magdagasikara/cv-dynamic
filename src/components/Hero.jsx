import PicIntro from "../assets/img/sitting-broad.jpg"
import PicPrint from "../assets/img/sitting-broad-black-white.jpg"

export default function Hero() {
    return (
        <>
            <section className="pic-intro print-remove">
                <figure>
                    <img
                        src={PicIntro}
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
        </ >)
}