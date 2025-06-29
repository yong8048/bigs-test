import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  width: 100%;
  max-width: 800px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 20px;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
  line-height: 1.4;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  gap: 16px;
  color: #64748b;
  font-size: 14px;

  div {
    display: flex;
    gap: 16px;
  }
`;

export const Category = styled.span`
  background: #e2e8f0;
  color: #475569;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export const Date = styled.span`
  color: #64748b;
`;

export const Content = styled.div`
  margin-bottom: 32px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TextContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: #374151;
  white-space: pre-wrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
  button {
    width: 100px;
  }
`;

export const ActionButtons = styled.div`
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  & > svg:first-child {
    color: #22c55e;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #16a34a;
    }
  }
  & > svg:last-child {
    color: #ef4444;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #b91c1c;
    }
  }
`;
