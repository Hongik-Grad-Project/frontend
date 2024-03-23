import Home from './pages/Home';
import Login from './pages/Login';
import KakaoRedirect from './components/Login/kakao/KakaoRedirect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            {/* Routes는 Route의 묶음이다 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/oauth2/callback/kakao" element={<KakaoRedirect />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
