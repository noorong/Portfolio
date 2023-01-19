import React from 'react';
import * as S from './styled';

export const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <nav>
          <ul>
            <li>자기소개</li>
            <li>자기소개</li>
            <li>자기소개</li>
            <li>자기소개</li>
          </ul>
        </nav>
      </S.Header>
      <S.Section>
        <S.Article>
          <S.Image />
          <S.Profile>
            <h1>신입개발자 박재훈</h1>
            <ul>
              <li>ㅎㅇ</li>
              <li>ㅎㅇ</li>
              <li>ㅎㅇ</li>
              <li>
                <a>github</a>
                <a>velog</a>
              </li>
            </ul>
          </S.Profile>
        </S.Article>
        <S.Article>
          <h2>Project</h2>
          <ul>
            <li>Elice</li>
            <li>Elice</li>
          </ul>
        </S.Article>
      </S.Section>
    </S.Container>
  );
};
