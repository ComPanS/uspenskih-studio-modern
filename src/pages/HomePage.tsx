import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react'
import { serviceGroups, site, team } from '../content/site'

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`

export function HomePage() {
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0].id)
  const [expanded, setExpanded] = useState(false)
  const group = serviceGroups.find((item) => item.id === activeGroup) ?? serviceGroups[0]
  const visibleServices = expanded ? group.services : group.services.slice(0, 8)

  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={image('hero.jpg')} alt="Интерьер Студии Успенских" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Казань · салон красоты & барбершоп</p>
          <h1 id="hero-title">Студия<br />Успенских</h1>
          <p className="hero-summary">Стрижки, цвет и барберинг<br />в одном пространстве.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Записаться онлайн <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="text-link" href="#services">Смотреть услуги <ArrowDown aria-hidden="true" /></a>
        </div>
        <p className="hero-index" aria-hidden="true">01 / 02</p>
      </section>

      <section className="fact-rail" aria-label="Основная информация">
        <div className="fact"><MapPin aria-hidden="true" /><span>Где</span><strong>ул. Восстания, 16</strong></div>
        <div className="fact"><Clock3 aria-hidden="true" /><span>Когда</span><strong>{site.contact.hours}, ежедневно</strong></div>
        <div className="fact"><Phone aria-hidden="true" /><span>Связаться</span><a href={site.contact.phoneHref}>{site.contact.phone}</a></div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <header className="section-heading services-heading">
          <p className="section-number">01 — Услуги</p>
          <h2 id="services-title">Две школы.<br />Одна запись.</h2>
          <p>Выберите направление и посмотрите актуальный диапазон стоимости.</p>
        </header>

        <div className="service-catalogue">
          <div className="service-tabs" role="tablist" aria-label="Направление услуг">
            {serviceGroups.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeGroup === item.id}
                className={activeGroup === item.id ? 'service-tab is-active' : 'service-tab'}
                onClick={() => { setActiveGroup(item.id); setExpanded(false) }}
              >
                <span>{item.index}</span>
                <strong>{item.label}</strong>
                <small>{item.services.length} услуг</small>
              </button>
            ))}
          </div>

          <div className="price-panel" role="tabpanel">
            <div className="price-header"><span>{group.shortLabel}</span><span>Стоимость</span></div>
            <ol className="price-list">
              {visibleServices.map((service, index) => (
                <li key={service.title}>
                  <span className="price-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="price-title">{service.title}</span>
                  <strong>{service.price}</strong>
                </li>
              ))}
            </ol>
            {group.services.length > 8 && (
              <button className="expand-button" type="button" onClick={() => setExpanded((value) => !value)}>
                {expanded ? 'Свернуть список' : `Показать все ${group.services.length} услуг`}
                <ArrowDown aria-hidden="true" />
              </button>
            )}
            <p className="price-note">Актуальную стоимость уточняйте при записи.</p>
          </div>
        </div>
      </section>

      <section className="process-section" id="atmosphere" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="section-number">02 — В процессе</p>
          <h2 id="process-title">Форма начинается с точного движения.</h2>
          <p>Стрижка, укладка, цвет или борода — работа строится вокруг выбранного образа и конкретной техники.</p>
        </div>
        <figure className="process-image process-image-wide">
          <img src={image('studio-01.jpg')} alt="Работа с волосами в студии" loading="lazy" />
          <figcaption>Цвет / уход / укладка</figcaption>
        </figure>
        <figure className="process-image process-image-tall">
          <img src={image('studio-05.jpg')} alt="Барбер работает над стрижкой" loading="lazy" />
          <figcaption>Стрижка / борода / бритье</figcaption>
        </figure>
      </section>

      <section className="team-section" id="team" aria-labelledby="team-title">
        <div className="team-visual">
          <img src={image('studio-08.jpg')} alt="Команда Студии Успенских" loading="lazy" />
          <span>Команда<br />студии</span>
        </div>
        <div className="team-content">
          <header className="section-heading team-heading">
            <p className="section-number">03 — Мастера</p>
            <h2 id="team-title">Опыт в разных техниках</h2>
          </header>
          <div className="team-list">
            {team.map((person, index) => (
              <article className="team-member" key={person.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{person.name}</h3><p>{person.role}</p></div>
                <strong>{person.experience}</strong>
                <p>{person.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section" aria-label="Атмосфера студии">
        <figure className="gallery-main"><img src={image('studio-04.jpg')} alt="Барбер за работой" /></figure>
        <div className="gallery-statement"><span>Не просто<br />парикмахерская.</span><strong>Сообщество.</strong></div>
        <figure className="gallery-portrait"><img src={image('studio-09.jpg')} alt="Мастера студии" /></figure>
        <figure className="gallery-detail"><img src={image('studio-12.jpg')} alt="Команда в рабочем пространстве" /></figure>
      </section>

      <section className="contact-section" id="contacts" aria-labelledby="contact-title">
        <div className="contact-index" aria-hidden="true"><span>01</span><i /><span>02</span></div>
        <div className="contact-copy">
          <p className="section-number">04 — Контакты</p>
          <h2 id="contact-title">Встретимся<br />на Восстания.</h2>
          <p className="contact-address">{site.contact.address}</p>
          <p>{site.contact.hours}<br />без выходных</p>
        </div>
        <div className="contact-actions">
          <a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <ArrowUpRight aria-hidden="true" /></a>
          <a href={site.contact.phoneHref}>{site.contact.phone}</a>
          <a href={site.social.whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
          <div className="social-links" aria-label="Социальные сети">
            <a href={site.social.vk} target="_blank" rel="noreferrer">VK</a>
            <a href={site.social.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
