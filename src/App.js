import { BrowserRouter } from 'react-router-dom';

import PageHeader from './pages/PageHeader';
import PageFooter from './pages/PageFooter';

import './App.css';

  
function App() {
  return (
    <BrowserRouter>

          <PageFooter/>
    </BrowserRouter>
  );
}


export default App;