import HomeNav from '../components/Home/HomeNav';
import styled from 'styled-components';

const Home = () => {
    
    return (
        <HomeWrapperTesting>
            <HomeNav />
        </HomeWrapperTesting>
        
    );
};

export default Home;

export const HomeWrapperTesting = styled.div`
    background-color: #FAFAFA;
    width: 100vw;
    height: 100vh;
`;
