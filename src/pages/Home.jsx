import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    padding: .5rem;
`;
const Container = styled.main`
    background-image: url(src/assets/image/pxfuel.jpg);
    background-size: contain;
    background-position: center;
    height: 40rem;
    padding-top: 2rem;
`;
const TextOne = styled.p`
    max-width: 40rem;
    text-align: center;
`;
const Article = styled.article`
    font-family:   'Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 20rem;
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
`;
const Img = styled.div`
    background-image: url(src/assets/image/MauricioMores.jpeg);
    background-position: center;
    background-size: cover;
    filter: grayscale(100%);
    border-radius: 50%;
    width: 25rem;
    height: 30rem;
`;

const Home = () => {
    return (
        <Container>
            <Article>
                <div>
                    <Title>Hi Friends!!!</Title>
                    <TextOne>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tortor et leo iaculis sollicitudin a sit amet ex. Integer interdum pellentesque ligula,
                        ollicitudin metus id semper malesuada. Sed elementum vestibulum odio, vitae vulputate nulla tincidunt in. Nulla non dignissim odio, in</TextOne>
                </div>
                <Img></Img>
            </Article>
        </Container>
    );
}

export default Home;
