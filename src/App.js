import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './page/Home';
import routers from './page/router';
import './i18n';

const App = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage('vi');
  };
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {routers.map(({ component: Component, path, ...rest }) => (
            <Route component={Component} key={path} {...rest} />
          ))}
        </Routes>
      </BrowserRouter> */}
      <HomePage />
    </>
  );
};

export default App;
