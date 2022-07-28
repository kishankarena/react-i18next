import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguaDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';

i18n
  .use(LanguaDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
          },
          counter_one: 'Changed language just once',
          counter_other: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}',
          },
        },
      },
      de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React',
          },
          counter_one: 'Die Sprache wurde erst ein mal gewechselt',
          counter_other: 'Die Sprache wurde {{count}} mal gewechselt',
          footer: {
            date: 'Heute ist {{date, DATE_HUGE}}',
          },
        },
      },
    },
  });
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});
export default i18n;
