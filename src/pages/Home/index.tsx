import { Events } from '../../components/Events'
import { FamilyExperience } from '../../components/FamilyExperience'
import { Hero } from '../../components/Hero'
import { Logo } from '../../components/Logo'
import { MenuHighlights } from '../../components/MenuHighlights'

import './Home.scss'

export function Home() {
  return (
    <>
      <Hero />

      <main className="main-content">
        <FamilyExperience />

        <MenuHighlights />

        <Events />

        <section className="section-reservation">
          <h2 className="reservation-title">Ready to make a reservation?</h2>
          <button className="button-book">Book a table</button>
        </section>
      </main>

      <footer className="footer">
        <Logo />
        <div className="footer-info">
          <span>Marthwaite, Sedbergh</span>
          <span>Cumbria</span>
          <span>+00 44 123 4567</span>
        </div>
        <div className="footer-hours">
          <span>Open Times</span>
          <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
          <span>Sat - Sun: 09:00 AM - 11:30 PM</span>
        </div>
      </footer>
    </>
  )
}
