import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
`;

export const LoadingContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 90%;

  @media (max-width: 768px) {
    padding: 24px 32px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 20px 24px;
    gap: 10px;
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    border-width: 3px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    border-width: 2px;
  }
`;

export const Message = styled.div`
  font-size: 16px;
  color: #374151;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
