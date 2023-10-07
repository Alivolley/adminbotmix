import { useRoutes } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Configs
import routes from './routes';
import store from '../store/store';
import AppLayout from './layout/app-layout';

function App() {
   const router = useRoutes(routes);

   return (
      <Provider store={store}>
         <AppLayout>{router}</AppLayout>
      </Provider>
   );
}

export default App;
