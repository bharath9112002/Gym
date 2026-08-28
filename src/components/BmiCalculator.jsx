import bmiPhoto from '../assets/bmi-photo.png'

function BmiCalculator() {
  return (
    <section id="bmi" className="bmi">
      <div className="bmi__media">
        <img src={bmiPhoto} alt="Woman resting after a workout" />
      </div>
      <div className="bmi__panel">
        <div className="bmi__form">
          <span className="eyebrow">Calculate Your</span>
          <h2>Body Mass Index</h2>
          <label>
            Height
            <input type="number" placeholder="CM" />
          </label>
          <label>
            Weight
            <input type="number" placeholder="KG" />
          </label>
          <label>
            Age
            <input type="number" placeholder="Years" />
          </label>
          <label>
            Gender
            <select defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <button type="button" className="btn bmi__submit">
            Calculate BMI <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BmiCalculator
