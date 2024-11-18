import Divide from '/images/patterns/pattern-divide.svg'

import './MenuHighlights.scss'

export function MenuHighlights() {
  return (
    <section className="menu-highlights">
      <div className="menu-highlights-header">
        <img src={Divide} alt="" />
        <h2 className="menu-highlights-title">
          A few highlights from our menu
        </h2>
        <p className="menu-highlights-text">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>

      <div className="menu-highlights-content">
        <div className="menu-item">
          <picture className="menu-item-image">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/salmon-desktop-tablet@2x.jpg"
            />
            <img src="/images/homepage/salmon-mobile@2x.jpg" alt="salmon" />
          </picture>

          <div className="menu-item-info">
            <h3 className="menu-item-title">Seared Salmon Fillet</h3>
            <p className="menu-item-description">
              Our locally sourced salmon served <br /> with a refreshing
              buckwheat summer salad.
            </p>
          </div>
        </div>

        <div className="menu-item">
          <picture className="menu-item-image">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/beef-desktop-tablet@2x.jpg"
            />
            <img src="/images/homepage/beef-mobile@2x.jpg" alt="beef" />
          </picture>

          <div className="menu-item-info">
            <h3 className="menu-item-title">Rosemary Filet Mignon</h3>
            <p className="menu-item-description">
              Our prime beef served to your taste <br /> with a delicious choice
              of seasonal <br /> sides.
            </p>
          </div>
        </div>

        <div className="menu-item">
          <picture className="menu-item-image">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/chocolate-desktop-tablet@2x.jpg"
            />
            <img
              src="/images/homepage/chocolate-mobile@2x.jpg"
              alt="chocolate mousse"
            />
          </picture>

          <div className="menu-item-info">
            <h3 className="menu-item-title">Summer Fruit Chocolate Mousse</h3>
            <p className="menu-item-description">
              Creamy mousse combined with <br /> summer fruits and dark
              chocolate shavings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
