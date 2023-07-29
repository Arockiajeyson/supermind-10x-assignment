import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import RegisterPage from './component/RegisterPage';
import { ToastContext } from './component/ToastContext';
import Upload from './component/Upload';
import PostView from './component/PostView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContext>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/post' element={<Upload/>} />
            <Route path='/blog' element={<PostView/>} />
          </Routes>
        </ToastContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
