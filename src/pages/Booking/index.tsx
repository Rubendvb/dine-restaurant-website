import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'

import './Booking.scss'

export function Booking() {
  return (
    <>
      <header className="booking-header">
        <Logo />

        <h1 className="booking-header-title">Reservations</h1>

        <p className="booking-header-description">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>

        <Button text="Reserve place" theme="dark" />
      </header>

      <form className="booking-form">
        <div className="booking-form-names">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>

        <div className="booking-form-names">
          <label htmlFor="date" className="booking-label">
            Pick a date
          </label>
          <input type="date" name="date" id="date" className="booking-input" />
        </div>

        <div className="booking-form-names">
          <label htmlFor="time" className="booking-label">
            Pick a time
          </label>
          <input type="time" name="time" id="time" className="booking-input" />
        </div>

        <div>
          <label htmlFor="people" className="booking-label">
            4 people
          </label>
          <input
            type="number"
            name="people"
            id="people"
            className="booking-input"
            min={1}
            max={10}
          />
        </div>

        <button type="submit">Make Reservation</button>
      </form>

      <Footer />
    </>
  )
}
