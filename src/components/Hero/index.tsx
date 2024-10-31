import { Logo } from '../Logo'

import './Hero.scss'

export default function Hero() {
  return (
    <header className="hero">
      <img
        className="hero__img"
        src="/images/homepage/hero-bg-mobile@2x.jpg"
        alt="hero-bg-mobile"
      />

      <div className="hero__content">
        <Logo />

        <h1 className="hero__content__h1">Exquisite dining since 1989</h1>

        <p className="hero__content__p">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <button className="hero__content__btn">Book a table</button>
      </div>
    </header>
  )
}
