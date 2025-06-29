import styled from "styled-components";

export const Form = styled.div`
  h2 {
    font-size: 14px;
    margin-bottom: 10px;
    color: gray;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 13px;
      margin-bottom: 8px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #dddddd;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px; /* 모바일에서 줌 방지 */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #4f8cff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px 14px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
  }
`;
