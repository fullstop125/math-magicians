import './style.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
