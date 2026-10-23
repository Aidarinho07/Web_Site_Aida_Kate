window.FORM_CONFIG = {
  // Google Apps Script: каждая заявка с формы приходит уведомлением на почту Аиде
  endpoint: 'https://script.google.com/macros/s/AKfycbwLBqV7nStHE6TVKsq_xd4n7s-Pr6rwgsg5drylcPuRgPjaNAR04aMlYZAE1HJMjnDfBQ/exec',
  subject: 'Заявка на тренинг «Почему я соглашаюсь, когда не хочу»',

  // Мессенджеры, в которые человек пишет после формы — заявки собирает Катерина.
  // Пустое значение — кнопка этого мессенджера скрыта.
  booking: {
    message: 'Здравствуйте, хочу записаться на тренинг «Почему я соглашаюсь, когда не хочу» 14 ноября',
    vk: 'katykeren',  // числовой id или короткое имя страницы ВК
    tg: '',           // @username в Telegram
    max: '',          // ссылка на профиль в MAX
  },

  contact: {
    name: 'Катерина Керен',
    phone: '+7 908 888 4127',
    vk: 'https://vk.ru/katykeren',
  },
};
