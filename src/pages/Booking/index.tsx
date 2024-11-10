import { useState } from 'react'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
// import IconArrow from '/public/images/icons/icon-arrow.svg'

import './Booking.scss'

export function Booking() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('AM')

  const options = ['AM', 'PM']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const handleSelect = (option: string) => {
    setSelected(option)
    setIsOpen(false)
  }

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

      <section className="booking-section">
        <div className="booking-section-container">
          <form className="booking-form">
            <div className="booking-form-group">
              <input
                className="booking-input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <span className="booking-input-error">
                This field is required
              </span>
            </div>

            <div className="booking-form-group">
              <input
                className="booking-input"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <span className="booking-input-error">
                This field is required
              </span>
            </div>

            <div className="booking-form-date">
              <label className="booking-label">Pick a date</label>

              <div className="booking-date-inputs">
                <div>
                  <input
                    className="booking-input booking-date-input"
                    type="number"
                    name="month"
                    id="month"
                    placeholder="MM"
                  />
                  <input
                    className="booking-input booking-date-input"
                    type="number"
                    name="day"
                    id="day"
                    placeholder="DD"
                  />
                  <input
                    className="booking-input booking-date-input"
                    type="number"
                    name="year"
                    id="year"
                    placeholder="YYYY"
                  />
                </div>

                <span className="booking-input-error">
                  This field is incomplete
                </span>
              </div>
            </div>

            <div className="booking-form-date">
              <label className="booking-label">Pick a time</label>

              <div className="booking-date-inputs">
                <div>
                  <input
                    className="booking-input booking-time-input"
                    type="number"
                    name="hour"
                    id="hour"
                    placeholder="09"
                  />
                  <input
                    className="booking-input booking-time-input"
                    type="number"
                    name="minute"
                    id="minute"
                    placeholder="00"
                  />
                  <div
                    className={`custom-select ${isOpen ? 'open' : ''}`}
                    onClick={toggleDropdown}
                  >
                    <div className="selected-option">{selected}</div>

                    {isOpen && (
                      <ul className="options">
                        {options.map((option) => (
                          <li key={option} onClick={() => handleSelect(option)}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <span className="booking-input-error">
                This field is incomplete
              </span>
            </div>

            <div className="booking-form-group">
              <input
                className="booking-input booking-people-input"
                type="number"
                name="people"
                id="people"
                value={4}
              />
            </div>

            <Button text="Make reservation" theme="light" />
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
