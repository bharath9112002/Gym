import iconBasic from '../assets/pricing-icon-basic.png'
import iconPremium from '../assets/pricing-icon-premium.png'
import iconAdvanced from '../assets/pricing-icon-advanced.png'

const PLANS = [
  {
    name: 'Basic',
    price: '9.99',
    featured: false,
    icon: iconBasic,
    features: [
      'Personal Trainer',
      'Service Locker Room',
      'Fitness Assessment',
      'Morning Slot',
    ],
  },
  {
    name: 'Premium',
    price: '24.99',
    featured: true,
    icon: iconPremium,
    features: [
      'Personal Trainer',
      'Service Locker Room',
      'Fitness Assessment',
      'Morning & Evening Slot',
    ],
  },
  {
    name: 'Advanced',
    price: '14.99',
    featured: false,
    icon: iconAdvanced,
    features: [
      'Personal Trainer',
      'Service Locker Room',
      'Fitness Assessment',
      'Morning Slot',
    ],
  },
]

function Pricing() {
  return (
    <section id="join" className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Join Now</span>
          <h2>Join &amp; Be One of Us</h2>
        </div>
        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
            >
              <div className="pricing-card__icon" aria-hidden="true">
                <img src={plan.icon} alt="" />
              </div>
              <h3>{plan.name}</h3>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="pricing-card__price">
                $ {plan.price} <span>/ Month</span>
              </div>
              <a href="#join" className="btn">
                Enroll Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
