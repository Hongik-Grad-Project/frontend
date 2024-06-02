import React from 'react';
import HomeNav from '../components/Home/HomeNav';
import FirstLandingImg from '../assets/images/Landing/first.svg';
import SecondLandingImg from '../assets/images/Landing/second.svg';
import ThirdLandingImg from '../assets/images/Landing/third.svg';
import FourthLandingImg from '../assets/images/Landing/forth.svg';
import FifthLandingImg from '../assets/images/Landing/fifth.svg';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <HomeNav />
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

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* 이미지 사이의 간격 */
`;

const LandingImageComponent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 100px;
`;
