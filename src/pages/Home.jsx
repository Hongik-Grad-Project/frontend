import { useEffect, useState } from 'react';
import HomeNav from '../components/Home/HomeNav';
import styled from 'styled-components';

const Home = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if(accessToken) {
            fetch("http://localhost:9000/api/v1", {
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
        </HomeWrapperTesting>
        
    );
};

export default Home;

export const HomeWrapperTesting = styled.div`
    background-color: #000000;
    width: 100vw;
    height: 100vh;
`;
