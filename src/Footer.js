import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('footer.date', { date: new Date() })}</div>
    </div>
  );
};
export default Footer;
