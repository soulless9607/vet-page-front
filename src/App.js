import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
