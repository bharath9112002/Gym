import aboutPhoto from '../assets/about-squat.png'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="eyebrow">About Us</span>
          <h2>Know More to Be More With Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam tincidunt
            congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed
            arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet
            consectetur adipiscing elit.
          </p>
          <p>
            Semper erat lacus in libero ultricies. Cras fringilla ipsum magna,
            in fringilla dui commodo a. Vivamus id auctor massa, nec semper
            magna.
          </p>
        </div>
        <div className="about__media">
          <img src={aboutPhoto} alt="Trainer holding a medicine ball" />
        </div>
      </div>
    </section>
  )
}

export default About
