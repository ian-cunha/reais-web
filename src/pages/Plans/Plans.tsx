import React, { useRef, useState } from 'react';
import { Buttons, Container, PlanListWrapper, PlanList, PlanCard, PlanTitle, PlanPrice, PlanFeatures, SubTitle, Title, ArrowButton, ButtonDetails, DivBtnDetails, ButtonsSubmit } from './Plans.styles';
import Button from '../../components/Button/Button';
import PlansDetails from '../../components/PlansDetails/PlansDetails';
import PopupForm from '../../components/PopupForm/PopupForm';

const Plans: React.FC = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const plansDetailsRef = useRef<HTMLDivElement>(null);
  const scrollToPlansDetails = () => {
    plansDetailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [billingCycle, setBillingCycle] = useState<'mensal' | 'anual'>('mensal');

  const planListRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    planListRef.current?.scrollBy({ left: -750, behavior: 'smooth' });
  };

  const scrollRight = () => {
    planListRef.current?.scrollBy({ left: 750, behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Gratuito',
      id: '65085',
      description: 'Para quem deseja começar a organizar seu site, cadastro, imóveis e clientes.',
      mensal: 'R$0/mês',
      anual: 'R$0/mês',
      implementation: 'Consulte Implantação',
      features: [
        '1 usuário',
        '50 Imóveis ativos',
        'Cadastro de Clientes',
        'Site Personalizado',
      ],
      sign: 'https://app.reaisystems.com.br/SmartImobiliario-Corretor',
    },
    {
      name: 'Micro',
      id: '65081',
      description: 'Para o corretor que tem um funcionário ou sócio.',
      mensal: 'R$149/mês',
      anual: 'R$119/mês',
      implementation: 'Consulte Implantação',
      features: [
        '3 usuários',
        '400 imóveis ativos',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Site Premium',
        'CRM Completo',
        'Atendimento por whatsapp',
        'Treinamentos das equipes de vendas e gerentes',
        'Parametrização e configuração da conta',
      ],
      sign: 'https://app.reaisystems.com.br/cadastro/planoSmart?indicadorPlano=3',
    },
    {
      name: 'Pequeno',
      id: '65082',
      description: 'Ideal para pequenas imobiliárias',
      mensal: 'R$249/mês',
      anual: 'R$199/mês',
      implementation: 'Consulte Implantação',
      features: [
        '5 usuários',
        'Imóveis Ilimitados',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Site Premium',
        'CRM Completo',
        'Atendimento por whatsapp',
        'Treinamentos das equipes de vendas e gerentes',
        'Parametrização e configuração da conta',
      ],
      sign: 'https://app.reaisystems.com.br/cadastro/planoSmart?indicadorPlano=5',
    },
    {
      name: 'Médio',
      id: '65083',
      description: 'Para imobiliárias de médio porte ou grupo de corretores associados.',
      mensal: 'R$349/mês',
      anual: 'R$279/mês',
      implementation: 'Consulte Implantação',
      features: [
        '10 usuários',
        'Imóveis Ilimitados',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Site Premium',
        'CRM Completo',
        'Atendimento por whatsapp',
        'Treinamentos das equipes de vendas e gerentes',
        'Parametrização e configuração da conta',
      ],
      sign: 'https://app.reaisystems.com.br/cadastro/planoSmart?indicadorPlano=10',
    },
    {
      name: 'Grande',
      id: '65084',
      description: 'Para imobiliárias grandes. Consulte o valor para usuários extras.',
      mensal: 'R$449/mês',
      anual: 'R$359/mês',
      implementation: 'Consulte Implantação',
      features: [
        '20 usuários',
        'Imóveis Ilimitados',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Site Premium',
        'CRM Completo',
        'Atendimento por whatsapp',
        'Treinamentos das equipes de vendas e gerentes',
        'Parametrização e configuração da conta',
      ],
      sign: 'https://app.reaisystems.com.br/cadastro/planoSmart?indicadorPlano=20',
    },
  ];

  const PlanBilling = (cycle: 'mensal' | 'anual') => {
    setBillingCycle(cycle);
  };

  const openPopupWithPlan = (planId: string) => {
    setSelectedPlan(planId);
    setIsPopupOpen(true);
  };

  return (
    <Container>
      <Title>Planos</Title>
      <SubTitle>Escolha o plano ideal para deixar o seu negócio mais inteligente.</SubTitle>
      <Buttons>
        <Button label="Mensal" onClick={() => PlanBilling('mensal')} />
        <Button label="Anual" onClick={() => PlanBilling('anual')} />
      </Buttons>

      {/* Navegação com setas */}
      <PlanListWrapper>
        <ArrowButton onClick={scrollLeft}>{'<'}</ArrowButton>
        <PlanList ref={planListRef}>
          {plans.map((plan, index) => (
            <PlanCard key={index}>
              <PlanTitle>{plan.name}</PlanTitle>
              <p>{plan.description}</p>
              <PlanPrice>{billingCycle === 'mensal' ? plan.mensal : plan.anual}</PlanPrice>
              <p>{plan.implementation}</p>
              <PlanFeatures>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </PlanFeatures>
              <DivBtnDetails>
                <ButtonDetails onClick={scrollToPlansDetails}>Ver plano detalhado ↓</ButtonDetails>
              </DivBtnDetails>
              <ButtonsSubmit>
                <Button label="Fale com um consultor" onClick={() => openPopupWithPlan(plan.id)} />
                <Button label="✓ Assinar" onClick={() => window.open(plan.sign, '_blank')} />
              </ButtonsSubmit>
            </PlanCard>
          ))}
        </PlanList>
        <ArrowButton onClick={scrollRight}>{'>'}</ArrowButton>
      </PlanListWrapper>

      <div ref={plansDetailsRef} />
      <PlansDetails />

      {isPopupOpen && <PopupForm onClose={togglePopup} planId={selectedPlan} />}
    </Container>
  );
};

export default Plans;
