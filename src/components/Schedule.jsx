import scheduleSunday from '../assets/schedule-sunday.png'
import scheduleMonday from '../assets/schedule-monday.png'
import scheduleTuesday from '../assets/schedule-tuesday.png'
import scheduleWednesday from '../assets/schedule-wednesday.png'
import scheduleThursday from '../assets/schedule-thursday.png'
import scheduleFriday from '../assets/schedule-friday.png'
import scheduleSaturday from '../assets/schedule-saturday.png'

const DAYS = [
  { day: 'Sunday', date: '25th Nov', tags: ['Cardio', 'Weight Training'], image: scheduleSunday },
  { day: 'Monday', date: '26th Nov', tags: ['Cardio', 'Training'], image: scheduleMonday },
  { day: 'Tuesday', date: '25th Nov', tags: ['Cardio', 'Exercise'], image: scheduleTuesday },
  { day: 'Wednesday', date: '27th Nov', tags: ['Cardio', 'Exercise'], image: scheduleWednesday },
  { day: 'Thursday', date: '28th Nov', tags: ['Body Building', 'Plyo'], image: scheduleThursday },
  { day: 'Friday', date: '29th Nov', tags: ['Plyo', 'Body Building'], image: scheduleFriday },
  { day: 'Saturday', date: '30th Nov', tags: ['Weight Training', 'Crossfit'], image: scheduleSaturday },
]

function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Schedule</span>
          <h2>Keep Up With the Schedule to Stay Fit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="schedule__grid">
          <div className="schedule-card schedule-card--range">
            <span>24th &ndash; 30th</span>
            <strong>November 2018</strong>
          </div>
          {DAYS.map((item) => (
            <div
              className="schedule-card schedule-card--photo"
              key={item.day}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="schedule-card__date">{item.date}</span>
              <strong className="schedule-card__day">{item.day}</strong>
              <ul>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
