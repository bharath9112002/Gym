import cardio from '../assets/facility-cardio.png'
import studio from '../assets/facility-studio.png'
import weights from '../assets/facility-weights.png'
import functional from '../assets/facility-functional.png'

const FACILITIES = [
  { name: 'Cardio Zone', image: cardio },
  { name: 'Exercise Studio', image: studio },
  { name: 'Weight Training', image: weights },
  { name: 'Functional Zone', image: functional },
]

function Facilities() {
  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Facilities</span>
          <h2>How It Feels to Be With Us</h2>
        </div>
        <div className="facilities__grid">
          {FACILITIES.map((item) => (
            <div className="facility-card" key={item.name}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
