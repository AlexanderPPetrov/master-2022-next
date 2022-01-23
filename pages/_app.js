import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { appWithTranslation } from 'next-i18next';

import '../styles/styles.scss';

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default appWithTranslation(App)