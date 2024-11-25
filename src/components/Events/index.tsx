import { useState } from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

import './Events.scss'

export function Events() {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      title: 'Family Gathering',
      description:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    },
    {
      title: 'Special Events',
      description:
        'Whether it’s a romantic dinner or special date you’re celebrating with others, we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    },
    {
      title: 'Social Events',
      description:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    },
  ]

  function handleList(index: number) {
    setActiveIndex(index)
  }
  return (
    <section className="events">
      <div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/homepage/family-gathering-desktop@2x.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/family-gathering-tablet@2x.jpg"
          />
          <img
            className="events-image"
            src="/images/homepage/family-gathering-mobile@2x.jpg"
            alt="Family gathering"
          />
        </picture>
      </div>

      <div>
        <ul className="events-list">
          {items.map((item, index) => (
            <li
              key={index}
              className={classNames('events-list-item', {
                active: index === activeIndex,
              })}
              onClick={() => handleList(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>

        <div className="events-content-wrapper">
          <div className="events-content">
            {items.map((item, index) => (
              <div
                key={index}
                className={classNames('events-content-item', {
                  active: index === activeIndex,
                })}
              >
                <h2
                  className={classNames('events-title', {
                    active: index === activeIndex,
                  })}
                >
                  {item.title}
                </h2>
                <p
                  className={classNames('events-description', {
                    active: index === activeIndex,
                  })}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Button theme="light" text="Book a table" />
        </div>
      </div>
    </section>
  )
}
