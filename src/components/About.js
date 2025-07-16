import Terminal from "./Terminal"


export const About = () => {
  return (
  <div className="term-about">
  <section>
      <h2 className="text-center text-2xl font-bold mb-4">📟 Know More about me here</h2>
      <h4 style={{color: '#0754A3'}}>You're not just typing commands… you're unlocking my story 💛</h4>
      <Terminal />
    </section>
    <section className="skill" id="about">
        <div className="skill-bx wow zoomIn">

          <h2>About Me 🙋‍♀️</h2>
          <div className="info">
            {/* <img src={anime}  alt="Header Img"/> */}
            <p>I am a 27 year old front-end engineer with 5 years of experience building high-performance, user-centric web applications.<br />
              I thrive in collaborative environments where technology meets design.
              <br />
              <br />
              Beyond coding, I enjoy movies, art, and fitness, and indulge in plenty of hobbies, bringing creativity into different aspects of my life.
              <br />

              Let’s connect and discuss all things front-end, product, and technology!</p>
            <h4>I'm so glad you are here! !</h4>
          </div>
        </div>
      </section>
      </div>
  )
}
