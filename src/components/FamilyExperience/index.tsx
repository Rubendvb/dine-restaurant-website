import Divide from '/images/patterns/pattern-divide.svg'

import './FamilyExperience.scss'

export function FamilyExperience() {
  return (
    <section className="family-experience">
      <article className="family-experience-place">
        <img
          className="family-experience-image"
          src="/images/homepage/enjoyable-place-mobile@2x.jpg"
          alt="enjoyable place"
        />

        <img className="family-experience-divide" src={Divide} alt="" />

        <h2 className="family-experience-title">
          Enjoyable place for all the family
        </h2>
        <p className="family-experience-text">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </article>

      <article className="family-experience-place">
        <img
          className="family-experience-image"
          src="/images/homepage/locally-sourced-mobile@2x.jpg"
          alt="locally sourced"
        />

        <img className="family-experience-divide" src={Divide} alt="" />

        <h2 className="family-experience-title">
          The most locally sourced food
        </h2>
        <p className="family-experience-text">
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </article>
    </section>
  )
}
