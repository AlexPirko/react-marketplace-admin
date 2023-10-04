import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import App from 'App';
import store from 'store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter
      basename={process.env.REACT_APP_ENV === 'production' ? '/admin' : ''}
    >
      <App />
    </BrowserRouter>
  </Provider>
);
