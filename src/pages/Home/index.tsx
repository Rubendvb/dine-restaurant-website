import { Events } from '../../components/Events'
import { FamilyExperience } from '../../components/FamilyExperience'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'
import { MenuHighlights } from '../../components/MenuHighlights'
import { Reservation } from '../../components/Reservation'

import './Home.scss'

export function Home() {
  return (
    <>
      <Hero />

      <main className="main-content">
        <FamilyExperience />

        <MenuHighlights />

        <Events />

        <Reservation />
      </main>

      <Footer />
    </>
  )
}
