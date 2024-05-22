import { useEffect, useState } from 'react';
import HomeNav from '../components/Home/HomeNav';
import HomeContent from '../components/Home/HomeContent';
import styled from 'styled-components';

const Home = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if(accessToken) {
            fetch("http://localhost:8080/api/v1", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then(response => response.json())
            .then(data => {
                setProfile(data);
            })
            .catch(error => console.error("Error fetching user profile", error));
        }
    }, []);
    
    return (
        <HomeWrapperTesting>
            <HomeNav />
            <HomeContent />
        </HomeWrapperTesting>
        
    );
};

export default Home;

export const HomeWrapperTesting = styled.div`
    background-color: #FAFAFA;
    width: 100vw;
    height: 100vh;
`;
