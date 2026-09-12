export type Service = {
  title: string
  price: string
}

export type ServiceGroup = {
  id: 'barber' | 'salon'
  index: string
  label: string
  shortLabel: string
  services: Service[]
}

export const site = {
  name: 'Студия Успенских',
  shortName: 'Успенских',
  locale: 'ru',
  category: 'Салон красоты & барбершоп',
  description: 'Мужские и женские стрижки, окрашивание, уход и барберинг в Казани.',
  bookingUrl: 'https://b306733.yclients.com/?api_key=zna3an7p3yq13vqfny0k',
  contact: {
    phone: '+7 (927) 049-93-99',
    phoneHref: 'tel:+79270499399',
    email: 'felexbryk@icloud.com',
    emailHref: 'mailto:felexbryk@icloud.com',
    address: 'Казань, ул. Восстания, 16',
    hours: '10:00–21:00',
    schedule: 'ежедневно',
  },
  social: {
    vk: 'https://vk.com/uspenskihstudio',
    instagram: 'https://www.instagram.com/uspenskihstudio/',
    telegram: 'https://t.me/uspenskihstudio',
    whatsapp: 'https://wa.me/79270499399?text=',
  },
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'barber',
    index: '01',
    label: 'Барбершоп',
    shortLabel: 'Барбер',
    services: [
      { title: 'Модельная стрижка', price: '1300–1700' },
      { title: 'Спортивная стрижка', price: '900–1200' },
      { title: 'Спортивная стрижка с элементами Fade', price: '1100–1400' },
      { title: 'Моделирование бороды', price: '900–1000' },
      { title: 'Камуфляж седины', price: '900–1000' },
      { title: 'Камуфляж бороды', price: '800–900' },
      { title: 'Королевское бритье', price: '600–1000' },
      { title: 'Окантовка', price: '300–500' },
      { title: 'Стрижка наголо', price: '400–500' },
      { title: 'Удаление волос воском, 1 зона', price: '200–400' },
    ],
  },
  {
    id: 'salon',
    index: '02',
    label: 'Салон красоты',
    shortLabel: 'Салон',
    services: [
      { title: 'Женская стрижка', price: '1200–2000' },
      { title: 'Подравнивание длины', price: '900–1100' },
      { title: 'Полировка', price: '1400–1800' },
      { title: 'Стрижка челки', price: '500' },
      { title: 'Однотонное окрашивание', price: '2200–6000' },
      { title: 'Микромелирование / шатуш / балаяж / омбре', price: '4000–16000' },
      { title: 'Сложное окрашивание Airtouch', price: '8000–20000' },
      { title: 'Яркое окрашивание', price: '3700–9000' },
      { title: 'Осветление волос', price: '2500–3200' },
      { title: 'Выход из темного цвета в блонд', price: '6000–21000' },
      { title: 'ТоталБлонд', price: '4000–22000' },
      { title: 'Лечение для волос', price: '500–3400' },
      { title: 'Детская стрижка', price: '800–1200' },
      { title: 'Кератиновое выпрямление', price: '1000–7500' },
      { title: 'Коллагеновое выпрямление', price: '2000–11000' },
      { title: 'Укладка феном', price: '700–1000' },
      { title: 'Мытье и сушка феном на брашинг', price: '1000' },
      { title: 'Укладка выпрямителем', price: '1000–1200' },
      { title: 'Укладка «Локоны»', price: '1000–1500' },
      { title: 'Прикорневое гофре', price: '200–400' },
      { title: 'Укладка «Афрокудри»', price: '3000–3500' },
      { title: 'Мытье головы', price: '300–500' },
    ],
  },
]

export const team = [
  {
    name: 'Марат',
    role: 'Топ-барбер',
    experience: 'более 15 лет',
    summary: 'Мастер американской школы. Работает с точным срезом, формой стрижки, удлиненными формами и бородой.',
  },
  {
    name: 'Айгуль',
    role: 'Женский топ-мастер',
    experience: 'более 13 лет',
    summary: 'Берется за исправление сложных работ, помогает подобрать стрижку и подходящий стиль.',
  },
  {
    name: 'Марина',
    role: 'Парикмахер-колорист',
    experience: 'стрижки и окрашивание',
    summary: 'Помогает сменить образ, обсуждает детали новой стрижки и окрашивания и учитывает пожелания клиента.',
  },
  {
    name: 'Шах',
    role: 'Барбер',
    experience: 'более 5 лет',
    summary: 'Работает в современных техниках барберинга и создает выразительные текстурные формы.',
  },
]
