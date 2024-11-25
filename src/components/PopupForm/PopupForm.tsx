import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, ModalContent, CloseButton, Form, Input, SubmitButton, Buttons, Title, SubTitle } from './PopupForm.styles';

interface PopupFormProps {
    onClose: () => void;
    planId: string | null;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, planId }) => {
    const [formData, setFormData] = useState({
        nome_contato: '',
        email: '',
        telefone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requestData = {
            nome_contato: formData.nome_contato,
            email: formData.email,
            telefone: formData.telefone,
            id_empreendimento: planId,
            url_origem: "https://www.reaisystems.com.br/",
            id_empresa: 7341,
            tipo_origem: 3,
            id_outra_origem: 5,
            id_detalhe_outra_origem: 820,
            tipo_de_interesse: 0,
            idAcao: 0,
            mensagem: "Quero ter mais informações.",
        };

        try {
            await axios.post('https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline', requestData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('Dados enviados com sucesso! Você será redirecionado.');
            onClose();

            const whatsappLink = `https://wa.me/5581973382868?text=${encodeURIComponent(
                'Olá, quero saber mais sobre os planos!'
            )}`;
            window.open(whatsappLink, '_blank');
        } catch (error) {
            alert('Ocorreu um erro ao enviar os dados. Tente novamente.');
            console.error(error);
        }
    };

    return (
        <ModalContainer>
            <ModalContent>
                <Title>Contato</Title>
                <SubTitle>Preencha e fale com um dos nossos consultores agora!</SubTitle>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="nome_contato"
                        placeholder="Nome"
                        required
                        value={formData.nome_contato}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                    />
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
