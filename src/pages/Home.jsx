import React from 'react';
import HomeNav from '../components/Home/HomeNav';
import FirstLandingImg from '../assets/images/Landing/first.svg';
import SecondLandingImg from '../assets/images/Landing/second.svg';
import ThirdLandingImg from '../assets/images/Landing/third.svg';
import FourthLandingImg from '../assets/images/Landing/forth.svg';
import FifthLandingImg from '../assets/images/Landing/fifth.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    const navigateToTarget = () => {
        navigate('/define-social-problem'); // 원하는 경로로 수정하세요.
    };

    return (
        <>
            <HomeNav />
            <ControlBack />
            <LandingContainer>
                <LandingImageComponent src={FirstLandingImg} alt="First Landing" />
                <LandingImageComponent src={SecondLandingImg} alt="Second Landing" />
                <LandingImageComponent src={ThirdLandingImg} alt="Third Landing" />
                <LandingImageComponent src={FourthLandingImg} alt="Fourth Landing" />
                <LandingImageComponent src={FifthLandingImg} alt="Fifth Landing" />
                

            </LandingContainer>
        </>
    );
};

export default Home;

const ControlBack = styled.div`
    display: flex;    
    height: 120px;
    flex-direction: column;
    width: 100%;
`;

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LandingImageComponent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageWithButton = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    position: relative;
`;
