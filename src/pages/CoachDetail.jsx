import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import coaches from '../data/coaches'
import coachHeroBg from '../assets/coach-hero-bg.png'
import certIfpasa from '../assets/cert-ifpasa.png'
import certNasm from '../assets/cert-nasm.png'
import certIssa from '../assets/cert-issa.png'
import insta1 from '../assets/insta-1.png'
import insta2 from '../assets/insta-2.png'
import insta3 from '../assets/insta-3.png'
import insta4 from '../assets/insta-4.png'
import insta5 from '../assets/insta-5.png'
import insta6 from '../assets/insta-6.png'
import insta7 from '../assets/insta-7.png'
import insta8 from '../assets/insta-8.png'
import instaBg from '../assets/insta-bg.png'
import './CoachDetail.css'

const INSTAGRAM_PHOTOS = [insta1, insta2, insta3, insta7, insta4, insta6, insta5, insta8]

const CERT_LOGOS = {
  IFPASA: certIfpasa,
  'NASM Master Trainer': certNasm,
  ISSA: certIssa,
}
const SOCIALS = [
  {
    label: 'Facebook',
    path: 'M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12',
  },
  {
    label: 'X',
    path: 'M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z',
    viewBox: '0 0 19 19',
    fillRule: 'evenodd',
  },
  {
    label: 'Instagram',
    path: 'M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.15-.55.55-.89 1.11-1.15 1.77-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.89 1.77 1.15.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.15.55-.55.89-1.11 1.15-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2m0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.87.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.85-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.87.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.87-.34-1.85C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.85.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.87-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8m0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3m0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7m6.54-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0',
  },
  {
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z',
  },
]

function CoachDetail() {
  const { slug } = useParams()
  const coach = coaches.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = coach ? `${coach.name} — Beast Gym` : 'Coach not found — Beast Gym'
  }, [slug, coach])

  if (!coach) {
    return (
      <>
        <Header variant="solid" active="Coaches" />
        <div className="container coach-notfound">
          <h1>Coach not found</h1>
          <Link to="/#coaches" className="btn btn--sm">
            Back to coaches
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header variant="transparent" active="Coaches" />

      <section className="coach-hero" style={{ backgroundImage: `url(${coachHeroBg})` }}>
        <div className="container coach-hero__inner">
          <div className="coach-hero__media">
            <img src={coach.image || `https://picsum.photos/seed/${coach.seed}/700/860`} alt={coach.name} />
          </div>
          <div className="coach-hero__info">
            <h1>{coach.name}</h1>
            <span className="coach-hero__role">{coach.role}</span>

            <dl className="coach-hero__meta">
              <div>
                <dt>Age:</dt>
                <dd>{coach.age}</dd>
              </div>
              <div>
                <dt>Experience:</dt>
                <dd>{coach.experience}</dd>
              </div>
              <div>
                <dt>Phone:</dt>
                <dd>{coach.phone}</dd>
              </div>
              <div>
                <dt>Email:</dt>
                <dd>{coach.email}</dd>
              </div>
            </dl>

            <div className="coach-hero__social">
              {SOCIALS.map((social) => (
                <a key={social.label} href="#" aria-label={social.label}>
                  <svg viewBox={social.viewBox || '0 0 24 24'} fill="currentColor" aria-hidden="true">
                    <path d={social.path} fillRule={social.fillRule} clipRule={social.fillRule && 'evenodd'} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container coach-certs">
        {coach.certifications.map((cert) => (
          <img key={cert} className="coach-certs__logo" src={CERT_LOGOS[cert]} alt={cert} />
        ))}
      </div>

      <section className="coach-section">
        <div className="container coach-section__head">
          <h2>Introduction</h2>
          <p>Read biography of a coach</p>
        </div>
        <div className="container">
          <p className="coach-section__body">{coach.bio}</p>
        </div>
      </section>

      <section className="coach-section coach-skills">
        <div className="container coach-section__head">
          <h2>Skills</h2>
          <p>Skillset of our coach</p>
        </div>
        <div className="container coach-skills__inner">
          <p className="coach-skills__text">{coach.skillsText}</p>
          <div className="coach-skills__bars">
            {coach.skills.map((skill) => (
              <div className="coach-skill" key={skill.label}>
                <div className="coach-skill__row">
                  <span>{skill.label}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="coach-skill__track">
                  <div className="coach-skill__fill" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coach-insta" style={{ backgroundImage: `url(${instaBg})` }}>
        <div className="container coach-section__head coach-insta__head">
          <h2>Instagram</h2>
          <p>Follow {coach.name} on Instagram</p>
        </div>
        <div className="container coach-insta__grid">
          {INSTAGRAM_PHOTOS.map((photo, i) => (
            <a
              key={i}
              href="#"
              className="coach-insta__item"
              aria-label={`${coach.name} on Instagram, photo ${i + 1}`}
            >
              <img src={photo} alt="" />
            </a>
          ))}
        </div>
        <div className="coach-insta__cta">
          <a href="#" className="btn btn--sm">
            Follow &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CoachDetail
