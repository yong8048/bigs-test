import styled from "styled-components";

export const Form = styled.div`
  h2 {
    font-size: 14px;
    margin-bottom: 10px;
    color: gray;
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

  &:focus {
    border-color: #4f8cff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
  }
`;
