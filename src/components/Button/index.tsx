import { Link } from 'react-router-dom'

import './Button.scss'

interface ButtonProps {
  theme?: 'light' | 'dark'
  text: string
}

export function Button({ theme = 'light', text }: ButtonProps) {
  return (
    <>
      <Link className={`btn btn-${theme}`} to={`booking`}>
        {text}
      </Link>
    </>
  )
}
