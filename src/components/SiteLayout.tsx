import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { href: '#services', label: 'Услуги' },
  { href: '#team', label: 'Команда' },
  { href: '#atmosphere', label: 'Атмосфера' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Студия Успенских, к началу страницы">
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt="Логотип Студии Успенских" />
          <span className="brand-name">Студия Успенских</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-phone" href={site.contact.phoneHref}>{site.contact.phone}</a>
        </nav>
        <a className="header-booking" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-brand">
          <p>{site.name}<br /><span>{site.category}</span></p>
        </div>
        <p>{site.contact.address}<br />Ежедневно, {site.contact.hours}</p>
        <div className="footer-links">
          <a href={site.contact.phoneHref}>{site.contact.phone}</a>
          <a href={site.bookingUrl} target="_blank" rel="noreferrer">Онлайн-запись</a>
        </div>
      </footer>
    </div>
  )
}
