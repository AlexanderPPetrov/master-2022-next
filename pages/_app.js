import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { appWithTranslation } from 'next-i18next';
import SSRProvider from 'react-bootstrap/SSRProvider';

import '../styles/styles.scss';

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  )
}
export default appWithTranslation(App)