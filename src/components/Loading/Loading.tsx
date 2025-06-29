import React from "react";
import * as S from "./Loading.styles";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "로딩 중..." }) => {
  return (
    <S.Overlay>
      <S.LoadingContainer>
        <S.Spinner />
        <S.Message>{message}</S.Message>
      </S.LoadingContainer>
    </S.Overlay>
  );
};

export default Loading;
