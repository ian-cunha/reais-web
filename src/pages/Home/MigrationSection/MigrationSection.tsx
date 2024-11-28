import React from 'react';
import {
    Container,
    Title,
    Image,
    Content,
    HighlightText,
    SubTitle
} from './MigrationSection.styles';
import migrationImage from '../../../assets/migration/migration.svg';

const MigrationSection: React.FC = () => (
    <Container>
        <Content>
            <Title>Faz Parte de Outro Sistema?</Title>
            <SubTitle>
                Mude agora mesmo para o <HighlightText>RE.AI.s</HighlightText> com o nosso assistente de importação rápida e prática!
            </SubTitle>
        </Content>
        <Image src={migrationImage} alt="Migração para o Smart" />
    </Container>
);

export default MigrationSection;
