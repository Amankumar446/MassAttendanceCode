import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NewStudent from "./components/NewStudent"
import Update_Delete from './components/Update_Delete';
import View_log from './components/View_log';
import Login from './components/Login';
import SignUp from './components/Signup'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewStudent" element={<HomePage />} />
          <Route path="/Update_Delete" element={<HomePage />} />
          <Route path='/View_log' element={<View_log />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
