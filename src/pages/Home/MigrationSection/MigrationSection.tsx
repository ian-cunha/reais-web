import React from 'react';
import { Container, Title, Paragraph, Image, Content } from './MigrationSection.styles';
import migrationImage from '../../../assets/ai.svg';

const MigrationSection: React.FC = () => (
    <Container>
        <Image src={migrationImage} alt="Migração para o Smart" />
        <Content>
            <Title>Faz Parte de Outro Sistema?</Title>
            <Paragraph>
                Mude agora mesmo para o Smart com o nosso assistente de importação rápida e prática!
            </Paragraph>
        </Content>
    </Container>
);

export default MigrationSection;
