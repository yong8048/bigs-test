import styled from "styled-components";

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
    padding: 20px 16px;
    min-height: 320px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const SignupRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
  }

  a {
    color: #4f8cff;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 0.9rem;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.92em;
  margin: 0 0 0 2px;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 0.85em;
  }
`;
