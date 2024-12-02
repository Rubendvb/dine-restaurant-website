import { useState } from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

import './Events.scss'

export function Events() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageDesktop, setImageDesktop] = useState(
    '/images/homepage/family-gathering-desktop@2x.jpg'
  )
  const [imageTablet, setImageTablet] = useState(
    '/images/homepage/family-gathering-tablet@2x.jpg'
  )
  const [imageMobile, setImageMobile] = useState(
    '/images/homepage/family-gathering-mobile@2x.jpg'
  )

  const items = [
    {
      title: 'Family Gathering',
      description:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
      imageDesktop: '/images/homepage/family-gathering-desktop@2x.jpg',
      imageTablet: '/images/homepage/family-gathering-tablet@2x.jpg',
      imageMobile: '/images/homepage/family-gathering-mobile@2x.jpg',
    },
    {
      title: 'Special Events',
      description:
        'Whether it’s a romantic dinner or special date you’re celebrating with others, we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
      imageDesktop: '/images/homepage/special-events-desktop@2x.jpg',
      imageTablet: '/images/homepage/special-events-tablet@2x.jpg',
      imageMobile: '/images/homepage/special-events-mobile@2x.jpg',
    },
    {
      title: 'Social Events',
      description:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
      imageDesktop: '/images/homepage/social-events-desktop@2x.jpg',
      imageTablet: '/images/homepage/social-events-tablet@2x.jpg',
      imageMobile: '/images/homepage/social-events-mobile@2x.jpg',
    },
  ]

  function handleList(index: number) {
    setActiveIndex(index)

    setImageDesktop(items[index].imageDesktop)
    setImageTablet(items[index].imageTablet)
    setImageMobile(items[index].imageMobile)
  }

  return (
    <section className="events">
      <div className="events-container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageDesktop} />
          <source media="(min-width: 768px)" srcSet={imageTablet} />
          <img
            className="events-image"
            src={imageMobile}
            alt="Family gathering"
          />
        </picture>
      </div>

      <div className="events-container">
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
