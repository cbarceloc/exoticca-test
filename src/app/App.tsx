import { AppRoutes } from 'src/shared/routes';
import AppProviders from './providers';

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
