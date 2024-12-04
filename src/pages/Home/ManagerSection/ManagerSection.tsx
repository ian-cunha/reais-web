import React from 'react';
import {
    Container,
    Title,
    FeaturesGrid,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
} from './ManagerSection.styles';

const features = [
    {
        icon: '🗺️',
        title: 'Mapa de imóveis e empreendimentos',
        description: 'Visualize em tempo real o mapa com informações detalhadas organizadas por região.',
    },
    {
        icon: '📢',
        title: 'Anúncio em Portais',
        description: 'Integre automaticamente seus imóveis com portais imobiliários.',
    },
    {
        icon: '🌐',
        title: 'Site de Imóveis',
        description: 'Divulgue seus imóveis em seu próprio site.',
    },
    {
        icon: '📊',
        title: 'Funil de vendas',
        description: 'Controle a jornada de venda do seu imóvel, em tempo real.',
    },
    {
        icon: '💬',
        title: 'Atendimento a Clientes',
        description:
            'Contato direto com o cliente via WhatsApp, através do número cadastrado no sistema.',
    },
    {
        icon: '🏠',
        title: 'Gestão de Imóveis',
        description: 'Tenha cadastros ilimitados e acesso a todos os seus imóveis em uma única plataforma.',
    },
    {
        icon: '🤝',
        title: 'Realize Parcerias',
        description: 'Amplie sua rede de negócios online, encontrando parceiros da sua região.',
    },
    {
        icon: '🔎',
        title: 'Detetive Imobiliário',
        description: 'Encontre o match ideal entre clientes interessados e suas captações de imóveis.',
    },
    {
        icon: '📋',
        title: 'Painel de Controle',
        description:
            'Visualize oportunidades de negócios e fases de venda, atenda com agilidade seus clientes, entre outras facilidades.',
    },
    {
        icon: '🗓️',
        title: 'Roteiro de Visitas',
        description: 'Acompanhe como foram as visitas aos imóveis e o feedback dos clientes.',
    },
    {
        icon: '📧',
        title: 'Feedback ao Proprietário',
        description:
            'Relacionamento com os proprietários através de informações completas e automáticas do processo de venda.',
    },
    {
        icon: '🔗',
        title: 'Compartilhar Imóveis',
        description: 'Compartilhe imóveis compatíveis com interesse de seu cliente via WhatsApp e email.',
    },
];

const ManagerSection: React.FC = () => (
    <Container>
        <Title>Gestão inteligente de seus negócios</Title>
        <FeaturesGrid>
            {features.map((feature, index) => (
                <FeatureCard key={index}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
            ))}
        </FeaturesGrid>
    </Container>
);

export default ManagerSection;
