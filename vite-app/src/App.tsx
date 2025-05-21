import AppRouters from './routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()


const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRouters />
      </QueryClientProvider>
    </div>
  )
}
export default App