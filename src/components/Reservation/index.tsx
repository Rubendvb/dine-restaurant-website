import { Button } from '../Button'
import './Reservation.scss'

export function Reservation() {
  return (
    <section className="reservation-container">
      <section className="reservation">
        <h2 className="reservation-title">Ready to make a reservation?</h2>
        <Button text="Book a table" theme="dark" />
      </section>
    </section>
  )
}
