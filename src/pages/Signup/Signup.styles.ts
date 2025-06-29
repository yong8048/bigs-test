import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #f8e1e7 0%, #e3f6f5 60%, #fdf6ec 100%);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
    align-items: flex-start;
    padding-top: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: solid 1px #dddddd;
  border-radius: 15px;
  padding: 32px;
  width: 100%;
  max-width: 450px;
  min-height: 400px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
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
    font-size: 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    &:focus {
      border-color: #4f8cff;
      outline: none;
      box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
    }
    button {
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    min-height: 350px;
    gap: 16px;
    h1 {
      font-size: 22px;
    }
    form {
      gap: 16px;
    }
  }
  @media (max-width: 480px) {
    padding: 20px 12px;
    min-height: 320px;
    h1 {
      font-size: 20px;
    }
    input {
      padding: 12px;
      font-size: 15px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.92em;
  margin: 6px 0 0 2px;
  letter-spacing: -0.01em;
  @media (max-width: 768px) {
    font-size: 0.85em;
  }
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
