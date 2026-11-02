import { about, profile } from '../data/content'

export function AboutSection() {
  return (
    <section className="about section" aria-labelledby="about-heading">
      <div className="section-kicker"><span>01</span><p>PROFILE / NOTES</p></div>
      <div className="about-grid">
        <h2 id="about-heading">I translate complex ideas into <em>clear, human</em> digital experiences.</h2>
        <div>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="underlined" href={`mailto:${profile.email}`}>More about me <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
