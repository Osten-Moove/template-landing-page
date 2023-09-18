import * as i18n from 'react-i18next';
import { Container, Content } from './styles';

export const Footer = () => {
  const { t } = i18n.useTranslation('EXAMPLE');

  return (
    <>
      <Container>
        <Content>
          <h1>{t('TEXT2')}</h1>
        </Content>
      </Container>
    </>
  );
};
