import { Suspense, useEffect, useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import 'moment/locale/ru';

import { SECOND_IN_MS } from 'consts';
import Preloader from 'components/Preloader';

import {
  GlobalAppWrapper,
  AppStyles,
  PageArea,
  MainContentWrapper,
  MainContent,
} from './App.styled';

const App = () => {
  return (
    <GlobalAppWrapper>
      <AppStyles />
    </GlobalAppWrapper>
  );
};

export default App;
