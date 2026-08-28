import reviewPhoto from '../assets/coach-john-snow.png'

function Review() {
  return (
    <section id="review" className="review">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Review</span>
          <h2>Read What People Say About Us</h2>
        </div>
        <div className="review__card">
          <div className="review__media">
            <img className="review__photo" src={reviewPhoto} alt="Neil Francis" />
            <span className="review__quote" aria-hidden="true">
              &rdquo;
            </span>
          </div>
          <div className="review__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Magna
              fusce ultrices gravida rhoncus commodo viverra maecenas. Est
              placerat in egestas erat imperdiet sed euismod nisi porta lorem
              mollis aliquam ut.
            </p>
            <strong>Neil Francis</strong>
            <div className="review__dots">
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
