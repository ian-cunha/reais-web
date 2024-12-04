import React from 'react';
import {
  Container,
  Title,
  TestimonialsGrid,
  TestimonialCard,
  ClientName,
  ClientPosition,
  ClientMessage,
} from './ClientsSection.styles';

const testimonials = [
  {
    name: 'Dimas',
    position: 'Diretor da Acelera Imobiliária',
    message:
      '"Com o Smart tento uma plataforma moderna para gerenciar meus anúncios em vários portais, enviar material para cliente e fazer acompanhamento, além de poder acessá-lo 24hs! Tudo na palma da mão!"',
  },
  {
    name: 'Valéria',
    position: 'Dimas Cruz e Valéria Lucena',
    message:
      '"O Smart me proporciona atender meus clientes com velocidade, praticidade e profissionalismo! Consigo oferecer o mesmo atendimento dado por grandes imobiliárias! Tô muito satisfeita!"',
  },
  {
    name: 'Rogério',
    position: 'Rio Lar Imóveis',
    message:
      '"Minha experiência com a Smart Imobiliário foi simplesmente fora do comum. Qualidade e competência, estas duas palavras traduzem o atendimento que a Smart emprega nos serviços que realiza, os quais faço questão de destacar."',
  },
  {
    name: 'Iris Anjo',
    position: 'Conlar Empreendimentos',
    message:
      '"Estamos muito satisfeitos com o serviço da Smart Empreendimentos! Desde já, manifestamos aqui o nosso contentamento com a agilidade do sistema e profissionalismo da equipe. Esperamos continuar esta parceria, facilitando nossa relação com nossos clientes. Parabéns!"',
  },
];

const ClientsSection: React.FC = () => (
  <Container>
    <Title>O que nossos clientes dizem:</Title>
    <TestimonialsGrid>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <ClientName>{testimonial.name}</ClientName>
          <ClientPosition>{testimonial.position}</ClientPosition>
          <ClientMessage>{testimonial.message}</ClientMessage>
        </TestimonialCard>
      ))}
    </TestimonialsGrid>
  </Container>
);

export default ClientsSection;
