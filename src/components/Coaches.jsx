import { Link } from 'react-router-dom'
import coaches from '../data/coaches'

function Coaches() {
  return (
    <section id="coaches" className="coaches">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Coaches</span>
          <h2>Our Training Force</h2>
        </div>
        <div className="coaches__grid">
          {coaches.map((coach) => (
            <Link to={`/coaches/${coach.slug}`} className="coach-card" key={coach.slug}>
              <img src={coach.image || `https://picsum.photos/seed/${coach.seed}/400/500`} alt={coach.name} />
              <div className="coach-card__info">
                <strong>{coach.name}</strong>
                <span>{coach.role}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coaches
