import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #f8e1e7 0%, #e3f6f5 60%, #fdf6ec 100%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: solid 1px #dddddd;
  border-radius: 15px;
  padding: 32px;
  min-width: 450px;
  min-height: 400px;
  background-color: white;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  button {
    width: 100%;
  }
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    color: gray;
  }
  input {
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
    button {
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.92em;
  margin: 6px 0 0 2px;
  letter-spacing: -0.01em;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;

  button {
    width: 37px;
    height: 37px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;
