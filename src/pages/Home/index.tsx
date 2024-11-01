import { FamilyExperience } from '../../components/FamilyExperience'
import Hero from '../../components/Hero'
import { Logo } from '../../components/Logo'

import './Home.scss'

export function Home() {
  return (
    <>
      <Hero />

      <main className="main-content">
        <FamilyExperience />

        <section className="section-menu-highlights">
          <article className="menu-highlights-content">
            <h2 className="menu-title">A few highlights from our menu</h2>
            <p className="menu-text">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>

            <div className="menu-item">
              <img src="/images/homepage/salmon-mobile@2x.jpg" alt="salmon" />
              <h3 className="menu-item-title">Seared Salmon Fillet</h3>
              <p className="menu-item-description">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>

            <div className="menu-item">
              <img src="/images/homepage/beef-mobile@2x.jpg" alt="beef" />
              <h3 className="menu-item-title">Rosemary Filet Mignon</h3>
              <p className="menu-item-description">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>

            <div className="menu-item">
              <img
                src="/images/homepage/chocolate-mobile@2x.jpg"
                alt="chocolate mousse"
              />
              <h3 className="menu-item-title">Summer Fruit Chocolate Mousse</h3>
              <p className="menu-item-description">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </article>
        </section>

        <section className="section-events">
          <img
            className="events-image"
            src="/images/homepage/family-gathering-mobile@2x.jpg"
            alt="Family gathering"
          />

          <ul className="events-list">
            <li className="event-item">Family Gathering</li>
            <li className="event-item">Special Events</li>
            <li className="event-item">Social Events</li>
          </ul>

          <h2 className="events-title">Family Gathering</h2>
          <p className="events-description">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>

          <h2 className="events-title">Special Events</h2>
          <p className="events-description">
            Whether it’s a romantic dinner or special date you’re celebrating
            with others, we’ll look after you. We’ll be sure to mark your
            special date with an unforgettable meal.
          </p>

          <h2 className="events-title">Social Events</h2>
          <p className="events-description">
            Are you looking to have a larger social event? No problem! We’re
            more than happy to cater for big parties. We’ll work with you to
            make your event a hit with everyone.
          </p>

          <button className="button-book">Book a table</button>
        </section>

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
