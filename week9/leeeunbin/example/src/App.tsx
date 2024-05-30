import Router from './Router.tsx';

import { Provider as ReduxProvider} from 'react-redux';
import { useStore } from './store/index.ts';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard, Arial, sans-serif',
    },
  });

  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  )
}

export default App
