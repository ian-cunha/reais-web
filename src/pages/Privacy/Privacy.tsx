import React from 'react';
import {
    Container,
    Title,
    SubTitle,
    Section,
    Paragraph,
    SubTitle3,
    List,
    ListItem,
    Link,
} from './Privacy.styles';

const Privacy: React.FC = () => {
    return (
        <Container>
            <Title>Política de Privacidade</Title>
            <SubTitle>Última atualização: 2025</SubTitle>

            <Section>
                <Paragraph>Esta Política de Privacidade tem como objetivo afirmar, com total transparência e responsabilidade, o compromisso da plataforma RE.AI.s com a segurança e a proteção dos dados pessoais dos usuários ("Você").</Paragraph>
                <Paragraph>Ao utilizar nossos ambientes digitais, você concorda com esta Política. Caso discorde de qualquer ponto, recomendamos interromper o uso da plataforma.</Paragraph>
            </Section>

            <Section>
                <SubTitle>1. Coleta de Dados</SubTitle>
                <Paragraph>Seus dados podem ser coletados nas seguintes situações:</Paragraph>
                <List>
                    <ListItem>Cadastro na plataforma;</ListItem>
                    <ListItem>Inclusão por outro usuário da equipe;</ListItem>
                    <ListItem>Interações com funcionalidades da RE.AI.s.</ListItem>
                </List>
                <SubTitle3>1.1 Dados Cadastrais</SubTitle3>
                <List>
                    <ListItem>Nome, e-mail, telefone;</ListItem>
                    <ListItem>Documentos (CPF, RG, CRECI);</ListItem>
                    <ListItem>Endereço e experiência profissional.</ListItem>
                </List>
                <SubTitle3>1.2 Dados de Identificação Digital</SubTitle3>
                <List>
                    <ListItem>IP, sistema, datas e horários de acesso;</ListItem>
                    <ListItem>Geolocalização, telas acessadas, cookies e ID de sessão.</ListItem>
                </List>
                <SubTitle3>1.3 Informações obrigatórias</SubTitle3>
                <Paragraph>Determinados dados são essenciais. Informações incompletas podem limitar o uso da plataforma.</Paragraph>
                <SubTitle3>1.4 Atualização e Veracidade</SubTitle3>
                <Paragraph>Você é responsável pelas informações fornecidas. Mantenha seus dados sempre atualizados.</Paragraph>
                <SubTitle3>1.5 Base de Dados</SubTitle3>
                <Paragraph>A base de dados pertence à RE.AI.s e será usada para os fins descritos nesta Política.</Paragraph>
                <SubTitle3>1.6 Tecnologias</SubTitle3>
                <Paragraph>Utilizamos cookies e tecnologias semelhantes. Você pode ajustar isso no navegador.</Paragraph>
            </Section>

            <Section>
                <SubTitle>2. Compartilhamento de Dados</SubTitle>
                <Paragraph>Seus dados podem ser compartilhados:</Paragraph>
                <List>
                    <ListItem>Por exigência judicial;</ListItem>
                    <ListItem>Em transações societárias;</ListItem>
                    <ListItem>Com parceiros de infraestrutura e serviços;</ListItem>
                    <ListItem>Com plataformas como Google Analytics ou CRMs;</ListItem>
                    <ListItem>De forma anonimizada, para fins estatísticos.</ListItem>
                </List>
            </Section>

            <Section>
                <SubTitle>3. Segurança e Senhas</SubTitle>
                <Paragraph>Senhas são pessoais e intransferíveis. Proteja suas credenciais.</Paragraph>
                <SubTitle3>3.1 Recomendações</SubTitle3>
                <Paragraph>Evite acessar em dispositivos públicos e não clique em links suspeitos.</Paragraph>
                <SubTitle3>3.2 Proteção das Transações</SubTitle3>
                <Paragraph>Usamos criptografia SSL para garantir segurança nas operações.</Paragraph>
                <SubTitle3>3.3 Acesso Restrito</SubTitle3>
                <Paragraph>Apenas pessoas autorizadas têm acesso, conforme necessidade.</Paragraph>
                <SubTitle3>3.4 Links Externos</SubTitle3>
                <Paragraph>Ao sair do site, leia a política dos terceiros para onde está sendo direcionado.</Paragraph>
                <SubTitle3>3.5 Processamento por Terceiros</SubTitle3>
                <Paragraph>Empresas terceirizadas seguem os mesmos padrões de segurança da RE.AI.s.</Paragraph>
            </Section>

            <Section>
                <SubTitle>4. Armazenamento de Dados</SubTitle>
                <List>
                    <ListItem><strong>Dados cadastrais:</strong> 5 anos após encerramento</ListItem>
                    <ListItem><strong>Dados digitais:</strong> 6 meses</ListItem>
                    <ListItem><strong>Outros dados:</strong> até pedido de exclusão</ListItem>
                </List>
                <SubTitle3>4.1 Exceções</SubTitle3>
                <Paragraph>Podemos reter dados por mais tempo conforme a legislação.</Paragraph>
            </Section>

            <Section>
                <SubTitle>5. Direitos do Usuário</SubTitle>
                <Paragraph>Você pode solicitar acesso, correção, limitação ou exclusão dos dados.</Paragraph>
                <SubTitle3>5.1 Restrições Legais</SubTitle3>
                <Paragraph>Em alguns casos, por obrigações legais, manteremos dados mesmo após solicitação de exclusão.</Paragraph>
            </Section>

            <Section>
                <SubTitle>6. Atualizações e Contato</SubTitle>
                <Paragraph>Esta política pode ser atualizada a qualquer momento.</Paragraph>
                <SubTitle3>6.1 Contatos</SubTitle3>
                <Paragraph>
                    E-mail de suporte: <Link href="mailto:suporte@realestateaiplanner.com.br">suporte@realestateaiplanner.com.br</Link><br />
                    Canal de privacidade: <Link href="mailto:admin@realestateaiplanner.com.br">admin@realestateaiplanner.com.br</Link>
                </Paragraph>
                <SubTitle3>6.2 Legislação e Foro</SubTitle3>
                <Paragraph>Esta Política segue a legislação brasileira.</Paragraph>
                <SubTitle3>6.3 Glossário</SubTitle3>
                <Paragraph>Termos: Dados Pessoais, Controlador, Tratamento, Consentimento, Anonimização.</Paragraph>
            </Section>
        </Container>
    );
};

export default Privacy;
