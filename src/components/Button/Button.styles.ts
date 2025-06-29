import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#4f8cff")};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  border-radius: 10px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s ease, transform 0.1s ease;
  width: 100%;

  &:active {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#174ea6")};
    transform: ${({ disabled }) => (disabled ? "none" : "scale(0.98)")};
  }

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3a7ce0")};
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 15px;
  }
`;
