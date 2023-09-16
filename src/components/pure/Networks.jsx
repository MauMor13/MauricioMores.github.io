import styled from "styled-components";

const PersonalNetworks = styled.section`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ImageNetworks = styled.a`
    background-image: url(${(props) => props.img});
    background-position: center;
    width: 30%;
    height: 60%;
    background-size: contain;
    background-repeat: no-repeat;
`;


const Networks = () => {
    return (
        <PersonalNetworks>
            <ImageNetworks href="https://www.linkedin.com/in/mauricio-mores-b3898817b/" img='src/assets/image/redes/linkedin-1-svgrepo-com.svg'></ImageNetworks>
            <ImageNetworks href="https://github.com/MauMor13" img='src/assets/image/iconTechnologies/iconGithub.svg' ></ImageNetworks>
            <ImageNetworks href="mailto:mauri.f.mores@gmail.com" img='src/assets/image/redes/gmail-svgrepo-com.svg' ></ImageNetworks>
        </PersonalNetworks>
    );
}

export default Networks;
