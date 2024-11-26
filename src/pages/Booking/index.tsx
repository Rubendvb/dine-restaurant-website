import { useState } from 'react'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
import IconPlus from '/images/icons/icon-plus.svg'
import IconMinus from '/images/icons/icon-minus.svg'

import './Booking.scss'

export function Booking() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('AM')
  const [countPeople, setCountPeople] = useState<number>(0)

  const options = ['AM', 'PM']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option: string) => {
    setSelected(option)
    setIsOpen(false)
  }

  const handleCountPeople = (action: string) => {
    if (countPeople === 0 && action === 'minus') {
      return
    }

    if (action === 'plus') {
      setCountPeople(countPeople + 1)
    } else {
      setCountPeople(countPeople - 1)
    }
  }

  return (
    <>
      <header className="booking-header">
        <div className="booking-header-image">
          <Logo />
        </div>

        <div className="booking-header-content">
          <h1 className="booking-header-title">Reservations</h1>
          <p className="booking-header-description">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>

        <div className="booking-button-container">
          <Button text="Reserve place" theme="dark" />
        </div>
      </header>

      <div className="booking-container">
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
                            <li
                              key={option}
                              onClick={() => handleSelect(option)}
                            >
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
              <div className="booking-form-group people-group">
                <span
                  className="people-group-button-minus"
                  onClick={() => handleCountPeople('minus')}
                >
                  <img src={IconMinus} alt="" />
                </span>
                <p className="booking-input">
                  {countPeople} {countPeople === 1 ? 'person' : 'people'}
                </p>
                <span
                  className="people-group-button-plus"
                  onClick={() => handleCountPeople('plus')}
                >
                  <img src={IconPlus} alt="" />
                </span>
              </div>

              <Button text="Make reservation" theme="light" />
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
