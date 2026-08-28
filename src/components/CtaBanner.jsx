import ctaBannerPhoto from '../assets/cta-banner-final.png'

function CtaBanner() {
  return (
    <section id="gallery" className="cta-banner">
      <img className="cta-banner__img" src={ctaBannerPhoto} alt="Couple resting after a workout, with a gallery of training photos" />
    </section>
  )
}

export default CtaBanner
