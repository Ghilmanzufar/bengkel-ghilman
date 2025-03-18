import HomePage from './pages/Home';
import BookingService from './pages/BookingService';
import SparepartPage from './pages/Sparepart';
import DetailProduct from './pages/DetailProduct';
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';
import PromoPage from './pages/PromoPage';
import Login from './pages/FormLogin';
import Register from './pages/FormRegister';
import ForgotPassword from './pages/FormFotgetPassword';
import ResetPassword from './pages/ResetPassowrd';
import HistoryBookingService from './pages/HistoryBookingService';
import OrderHistory from './pages/OrderHistory';
import CheckOutPage from './pages/CheckOutPage';
import Artikel from './pages/ArtikelTipsPage';
import AboutUs from './pages/AboutPage';
import DetailPromoPage from './pages/DetailPromoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/booking" element={<BookingService />} />
                <Route path="/sparepart" element={<SparepartPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/detailProduct" element={<DetailProduct />} />
                <Route path="/promo" element={<PromoPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/historyBookingService" element={<HistoryBookingService />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="/checkOutPage" element={<CheckOutPage />} />
                <Route path="/detailArtikel" element={<Artikel />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/detailPromoPage" element={<DetailPromoPage />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App
