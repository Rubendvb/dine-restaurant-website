import { Button } from '../Button'
import './Events.scss'

export function Events() {
  return (
    <section className="events">
      <img
        className="events-image"
        src="/images/homepage/family-gathering-mobile@2x.jpg"
        alt="Family gathering"
      />

      <ul className="events-list">
        <li className="events-list-item active">Family Gathering</li>
        <li className="events-list-item">Special Events</li>
        <li className="events-list-item">Social Events</li>
      </ul>

      <div className="events-content">
        <h2 className="events-title">Family Gathering</h2>
        <p className="events-description">
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <h2 className="events-title">Special Events</h2>
        <p className="events-description">
          Whether it’s a romantic dinner or special date you’re celebrating with
          others, we’ll look after you. We’ll be sure to mark your special date
          with an unforgettable meal.
        </p>
        <h2 className="events-title">Social Events</h2>
        <p className="events-description">
          Are you looking to have a larger social event? No problem! We’re more
          than happy to cater for big parties. We’ll work with you to make your
          event a hit with everyone.
        </p>
      </div>

      <Button theme="light" text="Book a table" />
    </section>
  )
}
