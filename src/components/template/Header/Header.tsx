import { useThemeStore } from '@/context/ThemeStore';
import * as i18n from 'react-i18next';
import i18nMain from 'src/i18n/index';
import { Container, Content } from './styles';

export const Header = () => {
  const { switchTheme, theme } = useThemeStore();
  const { t } = i18n.useTranslation('EXAMPLE');

  return (
    <>
      <Container>
        <Content>
          <button
            onClick={() =>
              switchTheme('default', theme.mode === 'light' ? 'dark' : 'light')
            }
          >
            Change theme
          </button>
          <h1>{t('TEXT1')}</h1>
          <div>
            <button onClick={() => i18nMain.changeLanguage('en')}>En</button>
            <button onClick={() => i18nMain.changeLanguage('pt')}>Pt</button>
          </div>
        </Content>
      </Container>
    </>
  );
};
