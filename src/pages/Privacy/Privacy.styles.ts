import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: 81px;
  font-size: 32px;
  font-weight: 700;
  color: #181818;
  margin-bottom: 16px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
`;

export const Section = styled.section`
  width: 100%;
  text-align: left;
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #666666;
`;

export const SubTitle3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #181818;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 24px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  color: #666666;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  color: #e36108;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;