import React from "react";
import * as S from "./InputForm.styles";

interface InputFormProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({ type, value, onChange }: InputFormProps) => (
  <S.Form>
    <h2>{type === "email" ? "이메일" : "비밀번호"}</h2>
    <S.Input type={type} value={value} onChange={onChange} />
  </S.Form>
);

export default InputForm;
