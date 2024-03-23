import styled from 'styled-components';

export const NavBox = styled.div`
    height: 80px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`;

export const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin-left: 150px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 10px;
    }
`;

// font-size: 0.875rem; = font-size: 14px;

export const LinkWrapper = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 50vw;
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-right: 0;
    }

    a {
        color: ${(props)=>props.theme.colors.greyscale80};
        text-decoration: none;
        margin: 0 20px;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
`;

export const UserProfileImg = styled.img`
    width: 1.875rem;
    height: 1.875rem;
`;

export const ProfileRegisterButton = styled.button`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    
    background-color: #4D82F3;
    color: #fff;

    margin-left: 2vw;

    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
    }
`;