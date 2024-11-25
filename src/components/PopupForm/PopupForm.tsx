import React from 'react';
import { ModalContainer, ModalContent, CloseButton, Form, Input, SubmitButton, Buttons, Title, SubTitle } from './PopupForm.styles';

interface PopupFormProps {
    onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Formulário enviado!');
        onClose();
    };

    return (
        <ModalContainer>
            <ModalContent>
                <Title>Contato</Title>
                <SubTitle>Preencha e fale com um dos nossos consultor agora!</SubTitle>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Nome" required />
                    <Input type="email" placeholder="Email" required />
                    <Input type="tel" placeholder="Telefone" required />
                    <Buttons>
                        <CloseButton onClick={onClose}>Fechar</CloseButton>
                        <SubmitButton type="submit">Enviar →</SubmitButton>
                    </Buttons>
                </Form>
            </ModalContent>
        </ModalContainer>
    );
};

export default PopupForm;
