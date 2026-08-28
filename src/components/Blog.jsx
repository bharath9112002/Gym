import blogPhoto1 from '../assets/blog-1.png'
import blogPhoto2 from '../assets/blog-2.png'
import blogPhoto3 from '../assets/blog-3.png'

const POSTS = [
  {
    title: 'Build yourself in hours of exercise everyday for 6 months',
    image: blogPhoto1,
  },
  {
    title: 'Fat burning cardio workout to keep yourself strong',
    image: blogPhoto2,
  },
  {
    title: 'Crossfit guide for beginners: 10 things you must know',
    image: blogPhoto3,
  },
]

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Blog</span>
          <h2>Read to Stay in Shape</h2>
        </div>
        <div className="blog__grid">
          {POSTS.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-card__media">
                <img src={post.image} alt="" />
              </div>
              <h3>{post.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
