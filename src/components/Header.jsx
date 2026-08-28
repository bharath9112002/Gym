import { useState } from 'react'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'

const NAV_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'BMI', href: '/#bmi' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Reviews', href: '/#review' },
  { label: 'Coaches', href: '/#coaches' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Gallery', href: '/#gallery' },
]

function Header({ variant = 'transparent', active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`site-header site-header--${variant}${open ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="/" className="brand">
          <img src={variant === 'solid' ? logoBlack : logoWhite} alt="Beast" className="brand__logo" />
        </a>
        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.label === active ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="btn btn--sm site-header__cta">
          Join Now
        </a>
        <button
          type="button"
          className="site-header__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
