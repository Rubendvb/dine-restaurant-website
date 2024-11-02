import './Button.scss'

interface ButtonProps {
  theme?: 'light' | 'dark'
  text: string
}

export function Button({ theme = 'light', text }: ButtonProps) {
  return <button className={`btn btn-${theme}`}>{text}</button>
}
