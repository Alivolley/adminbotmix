import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'react-circular-progressbar/dist/styles.css';
import 'aos/dist/aos.css';

const client = new QueryClient({
   defaultOptions: {
      queries: {
         cacheTime: 60000,
         staleTime: 5000,
      },
   },
});

ReactDOM.createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={client}>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </QueryClientProvider>
);
