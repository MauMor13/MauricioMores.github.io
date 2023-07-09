import  styled  from "styled-components";

const Title = styled.h1 `
    text-align: center;
    padding: .5rem;
`;
const Container  = styled.main `
    height: 40rem;
    padding-top: 2rem;
`;
const TextOne = styled.p `
    width: 40rem;
    text-align: center;
`;
const Article = styled.article `
    min-height: 20rem;
    margin: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.div `
    
`;

const Home = () => {
    return (
        <Container>
            <Title>Hi Friends!!!</Title>
            <Article>
                <TextOne>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tortor et leo iaculis sollicitudin a sit amet ex. Integer interdum pellentesque ligula, vel gravida velit facilisis at. Ut vitae justo ac nibh feugiat ullamcorper. Mauris finibus nulla ac magna venenatis, sed consectetur sapien vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultricies libero in nisl consequat, vitae mattis tortor dignissim. Aliquam eu leo eleifend, gravida mi id, maximus tellus. Duis lobortis metus nec mauris finibus, id pulvinar nunc egestas. Quisque vitae diam urna. Fusce at mi quis lectus dignissim lobortis vitae nec risus.
                ollicitudin metus id semper malesuada. Sed elementum vestibulum odio, vitae vulputate nulla tincidunt in. Nulla non dignissim odio, in</TextOne>
            </Article>
            <Img></Img>
        </Container>
    );
}

export default Home;
