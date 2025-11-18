import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store.ts';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import './styles/global.scss';
import App from './App.tsx';

const querryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={querryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
