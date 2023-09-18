import styled from "styled-components";
import Networks from "../components/pure/Networks";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;  
`;

const Text = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;

const SectionPrime = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
`;

const Title = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const SectionSecond = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;

const Form = styled.form`
    backdrop-filter: blur(10px);
    border: 1px solid black;
    border-radius: 1rem;
    min-height: 25rem;
    padding: 1rem;
    contain: content;
    display: flex;
    margin-bottom: 1rem;
    color: #340;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    @media (max-width:950px){
        width: 100%;
    } 
`;

const Input = styled.input`
    padding: 0.5rem;
    margin: 1rem;
    background-color: transparent;
    border: 1px solid #333;
    width: 90%;
    border-radius: 4px;
    font-size: 1rem;
    border-radius: 1rem;
`;

const TextArea = styled.textarea`
    padding: 0.5rem;
    width: 90%;
    resize: vertical;
    max-height: 10rem;
    background-color: transparent;
    margin: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 1rem;
    border-radius: 1rem;
`;

const SubmitButton = styled.button`
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 1rem;
    border:1px solid #28f2b3;
    width: 10rem;
    transition: all 2s;
    position: relative;
    &:hover{
        color: black;
        background-color: #28f2b3;
        border:1px solid black;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,#28f2b3, #333, #28f2b3, #333, #28f2b3, #333
        );
        background-size: 800%;
        border-radius: 10px;
        filter: blur(8px);
        animation: glowing 50s linear infinite;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`;
const Label = styled.label`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
`;
const TitleTwo = styled.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const Redes = styled.div`
    backdrop-filter: blur(10px);
    border: 1px solid black;
    border-radius: 1rem;
    min-height: 25rem;
    padding: 1rem;
    contain: content;
    display: flex;
    color: #340;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    @media (max-width:950px){
        width: 100%;
    } 
`;

const Contact = () => {
    return (
        <Main>
            <SectionPrime>
                <Title>You can contact me . . .</Title>
                <Text>
                    Thank you for visiting my portfolio! If you have any feedback
                    on it or simply want to get in touch, your message is most
                    welcome! Rest assured, you´ll receive a prompt response from me.
                    Your opinions and comments are highly valuable, as they help me
                    grow and improve my work. I look forward to hearing from you soon!
                </Text>
            </SectionPrime>
            <SectionSecond>
                <Form action="https://mauri.f.mores@email.com" method="POST">
                    <Label> Your Name :
                        <Input type="text" placeholder="Your Name" required />
                    </Label>
                    <Label>Your Email Contact :
                        <Input type="email" placeholder="Your Email" required />
                    </Label>
                    <Label>Your Menssage :
                        <TextArea placeholder="Your Message" rows="4" required />
                    </Label>
                    <SubmitButton type="submit">
                        Send Message
                    </SubmitButton>
                </Form>
                <Redes>
                    <TitleTwo>Networks :</TitleTwo>
                    <Networks />
                </Redes>
            </SectionSecond>
        </Main>
    );
}

export default Contact;