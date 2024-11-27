import { Button } from '../Button'
import { Logo } from '../Logo'

import './HeroHome.scss'

export function HeroHome() {
  return (
    <header className="hero">
      <picture className="hero__picture">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/homepage/hero-bg-desktop@2x.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/images/homepage/hero-bg-tablet.jpg"
        />
        <img src="/images/homepage/hero-bg-mobile.jpg" alt="hero-bg-mobile" />
      </picture>

      <div className="hero__content">
        <div className="hero__content__logo">
          <Logo />
        </div>

        <h1 className="hero__content__title">
          Exquisite dining <br /> since 1989
        </h1>

        <p className="hero__content__description">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <Button theme="dark" text="Book a table" />
      </div>
    </header>
  )
}
