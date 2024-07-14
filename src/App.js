import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/default-components/Header';
import MainPage from './components/main-page/MainPage';
import AdminPage from './components/Admin/AdminPage'
import Footer from "./components/default-components/Footer";
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashBoard from './components/Admin/components/AdminDashBoard';
import UploadForm from './components/Admin/components/UploadForm';
import DisplayProductList from './components/Admin/components/DisplayProductList';
import Contact from './components/default-components/Contact';
import AboutUs from './components/default-components/AboutUs';
function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Login' element={<AdminLogin />}/>
          <Route path="/admin" element={<AdminPage />}>
            <Route index  element={<AdminDashBoard/>}/>
            <Route path='/admin/upload-product' element={<UploadForm/>}/>
            <Route path='/admin/my-products' element={<DisplayProductList/>}/>
            <Route path='/admin/orders' />
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
