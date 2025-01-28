import React from 'react';
import { Container, ScrollHint, StyledTable, TableCell, TableHeader, TableRow, Title } from './PlansDetails.styles';

interface Plan {
    name: string;
    users: number;
    properties: number | string;
    features: {
        [key: string]: boolean;
    };
}

const plans: Plan[] = [
    {
        name: 'Gratuito',
        users: 1,
        properties: 50,
        features: {
            'Cadastro de Imóveis': true,
            'Cadastro de Clientes': true,
            'CRM Completo': false,
            'Integração com Portais Imobiliários': false,
            'Compartilhamento em Redes Sociais': true,
            'APP Mobile': true,
            'Site Modelo Básico': true,
            'Site Modelo Premium': false,
            'Imóveis de Construtoras': false,
            'Material online para treinamentos': false,
            'Atendimento por whatsapp': false,
            'Parametrização e configuração da conta': false,
            'Treinamentos das equipes de vendas e gerentes': false,
        },
    },
    {
        name: 'Micro',
        users: 3,
        properties: 400,
        features: {
            'Cadastro de Imóveis': true,
            'Cadastro de Clientes': true,
            'CRM Completo': true,
            'Integração com Portais Imobiliários': true,
            'Compartilhamento em Redes Sociais ': true,
            'APP Mobile': true,
            'Site Modelo Básico': true,
            'Site Modelo Premium': true,
            'Imóveis de Construtoras': true,
            'Material online para treinamentos': true,
            'Atendimento por whatsapp': true,
            'Parametrização e configuração da conta': true,
            'Treinamentos das equipes de vendas e gerentes': true,
        },
    },
    {
        name: 'Pequeno',
        users: 5,
        properties: 'Ilimitado',
        features: {
            'Cadastro de Imóveis': true,
            'Cadastro de Clientes': true,
            'CRM Completo': true,
            'Integração com Portais Imobiliários': true,
            'Compartilhamento em Redes Sociais': true,
            'APP Mobile': true,
            'Site Modelo Básico': true,
            'Site Modelo Premium': true,
            'Imóveis de Construtoras': true,
            'Material online para treinamentos': true,
            'Atendimento por whatsapp': true,
            'Parametrização e configuração da conta': true,
            'Treinamentos das equipes de vendas e gerentes': true,
        },
    },
    {
        name: 'Médio',
        users: 10,
        properties: 'Ilimitado',
        features: {
            'Cadastro de Imóveis': true,
            'Cadastro de Clientes': true,
            'CRM Completo': true,
            'Integração com Portais Imobiliários': true,
            'Compartilhamento em Redes Sociais': true,
            'APP Mobile': true,
            'Site Modelo Básico': true,
            'Site Modelo Premium': true,
            'Imóveis de Construtoras': true,
            'Material online para treinamentos': true,
            'Atendimento por whatsapp': true,
            'Parametrização e configuração da conta': true,
            'Treinamentos das equipes de vendas e gerentes': true,
        },
    },
    {
        name: 'Grande',
        users: 20,
        properties: 'Ilimitado',
        features: {
            'Cadastro de Imóveis': true,
            'Cadastro de Clientes': true,
            'CRM Completo': true,
            'Integração com Portais Imobiliários': true,
            'Compartilhamento em Redes Sociais': true,
            'APP Mobile': true,
            'Site Modelo Básico': true,
            'Site Modelo Premium': true,
            'Imóveis de Construtoras': true,
            'Material online para treinamentos': true,
            'Atendimento por whatsapp': true,
            'Parametrização e configuração da conta': true,
            'Treinamentos das equipes de vendas e gerentes': true,
        },
    },
];

const PlansDetails: React.FC = () => {
    const featureKeys = [
        'Cadastro de Imóveis',
        'Cadastro de Clientes',
        'CRM Completo',
        'Integração com Portais Imobiliários',
        'Compartilhamento em Redes Sociais',
        'APP Mobile',
        'Site Modelo Básico',
        'Site Modelo Premium',
        'Imóveis de Construtoras',
        'Material online para treinamentos',
        'Atendimento por whatsapp',
        'Parametrização e configuração da conta',
        'Treinamentos das equipes de vendas e gerentes',
    ];

    return (
        <Container>
            <Title>Compare os Planos</Title>
            <ScrollHint>Deslize para ver mais detalhes</ScrollHint>
            <StyledTable>
                <thead>
                    <tr>
                        <TableHeader>Categoria</TableHeader>
                        {plans.map((plan) => (
                            <TableHeader key={plan.name}>{plan.name}</TableHeader>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <TableRow>
                        <TableCell>Número de Usuários</TableCell>
                        {plans.map((plan) => (
                            <TableCell key={plan.name}>{plan.users}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>Imóveis Ativos</TableCell>
                        {plans.map((plan) => (
                            <TableCell key={plan.name}>{plan.properties}</TableCell>
                        ))}
                    </TableRow>
                    {featureKeys.map((feature) => (
                        <TableRow key={feature}>
                            <TableCell>{feature}</TableCell>
                            {plans.map((plan) => (
                                <TableCell key={`${plan.name}-${feature}`}>
                                    {plan.features[feature] ? '✓' : 'X'}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </Container>
    );
};


export default PlansDetails;