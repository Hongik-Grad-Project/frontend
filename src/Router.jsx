import Home from './pages/Home';
import Login from './pages/Login';
import DefineSocialProblem from './pages/DefineSocialProblem';
import AuroraChat from './pages/AuroraChat';
import ChatSummary from './pages/ChatSummary';
import CreateProject from './pages/CreateProejct';
import ProjectBody from './pages/ProjectBody';
import KakaoRedirect from './components/Login/kakao/KakaoRedirect';
import NaverRedirect from './components/Login/naver/NaverRedirect';
import GoogleRedirect from './components/Login/google/GoogleRedirect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
            {/* Routes는 Route의 묶음이다 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/oauth2/callback/kakao" element={<KakaoRedirect />} />
                <Route path="/login/oauth2/callback/naver" element={<NaverRedirect />} />
                <Route path="/login/oauth2/callback/google" element={<GoogleRedirect />} />
                <Route path="/define-social-problem" element={<DefineSocialProblem />} />
                <Route path="/chat" element={<AuroraChat />} />
                <Route path="/chat/summary" element={<ChatSummary />} />
                <Route path="/create-project" element={<CreateProject />} />
                <Route path="/project-body" element={<ProjectBody />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
