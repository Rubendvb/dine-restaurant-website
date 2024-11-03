import { Logo } from '../Logo'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <Logo />

      <div className="footer-content">
        <div className="footer-content-info">
          <span>Marthwaite, Sedbergh</span>
          <span>Cumbria</span>
          <span>+00 44 123 4567</span>
        </div>

        <div className="footer-content-info">
          <span>Open Times</span>
          <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
          <span>Sat - Sun: 09:00 AM - 11:30 PM</span>
        </div>
      </div>
    </footer>
  )
}
