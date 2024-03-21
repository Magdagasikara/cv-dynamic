import PicIntro from "../../assets/img/sitting-broad.png"

export default function Hero() {
    return (
        <section className="pic-intro">
            <figure>
                <img
                    src={PicIntro}
                    alt="Magda with Annapurna I in the background"
                />
            </figure>
        </section>
    )
}