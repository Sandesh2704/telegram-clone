
import './App.css';
import { Routes, Route, Navigate  } from 'react-router-dom'
import Layout from './layout/Layout';
import MoblieChatSection from './components/MobileChatSection';
 function App() {


  return (
    <>
          <Routes>
          <Route path='/' element={<Navigate  to='/home' />} />
          <Route path='*' element={<Layout />} />
          <Route path="*" element={<Layout />} />
            <Route path="/chat/:chatId" element={<MoblieChatSection/>} />
          </Routes>
    </>
  );
}

export default App;
