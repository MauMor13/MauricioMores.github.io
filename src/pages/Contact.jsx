import styled from "styled-components";
import Networks from "../components/pure/Networks";
import ButtonDownload from '../components/container/ButtonDownload.jsx';
import { useState } from "react";

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
    min-height: 30rem;
    padding: 1rem;
    contain: content;
    display: flex;
    color: #340;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    @media (max-width:950px){
        width: 100%;
        margin-bottom: 1rem;
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
    min-height: 30rem;
    padding: 1rem;
    contain: content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    @media (max-width:950px){
        width: 100%;
    } 
`;

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        _subject: '',
        menssage: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitForm = async () => {
        try {
            const response = await fetch('https://formsubmit.co/e7cff579b0fcb4d8b52d651ce2538169', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage('Formulario enviado con éxito.');
            } else {
                setResponseMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setResponseMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

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
                <Form>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <Label> Your Full Name :
                        <Input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                    </Label>
                    <Label>Your Email Contact :
                        <Input type="email" name="email" placeholder="Your Email" autoComplete="off" required onChange={handleChange} />
                    </Label>
                    <Label>Email subject:
                        <Input type="text" name="_subject" placeholder="Subject" autoComplete="off" required onChange={handleChange} />
                    </Label>
                    <Label>Your Menssage :
                        <TextArea name="menssage" placeholder="Your Message" rows="4" required onChange={handleChange} />
                    </Label>
                    <SubmitButton onClick={submitForm}>
                        Send Message
                    </SubmitButton>
                    <p>{responseMessage}</p>
                </Form>
                <Redes>
                    <TitleTwo>Networks :</TitleTwo>
                    <Networks />
                    <ButtonDownload />
                </Redes>
            </SectionSecond>
        </Main>
    );
}

export default Contact;