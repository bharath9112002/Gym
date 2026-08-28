import heroPhoto from '../assets/hero-training.png'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img className="hero__bg" src={heroPhoto} alt="" />
        <div className="hero__overlay" />
        <button type="button" className="hero__play" aria-label="Play video">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <span className="hero__play-label">Play Video</span>
        <div className="container hero__content">
          <h1>
            Live It
            <br />
            Like a Rock!
          </h1>
        </div>
        <div className="hero__pagination">
          <span className="hero__pagination-count">1 / 7</span>
          <span className="hero__pagination-line" />
          <div className="hero__pagination-arrows">
            <button type="button" aria-label="Previous slide">
              &larr;
            </button>
            <button type="button" aria-label="Next slide">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
