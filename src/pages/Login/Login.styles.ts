import styled from "styled-components";

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
`;

export const CheckboxForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.92em;
  margin: 0 0 0 2px;
  letter-spacing: -0.01em;
`;
