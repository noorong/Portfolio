import React from 'react';
import * as S from './styled';
import profilePicture from '../assets/박재훈 증명사진.jpg';

export const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <nav>
          <ul>
            <li>자기소개</li>
            <li>프로젝트</li>
            <li>교육이력</li>
            <li>하고싶은말</li>
          </ul>
        </nav>
      </S.Header>
      <S.Section>
        <S.Article>
          <S.Image src={profilePicture} />
          <S.Profile>
            <h1>사회문제를 해결하고싶은 개발자</h1>
            <ul>
              <li>
                저는 사람들이 자기도 모르게 좋은 일을 하도록 만들고 싶습니다.
              </li>
              <li>분리수거와 유기동물에 관심이 많습니다.</li>
              <li>효율적인 일처리를 사랑합니다.</li>
              <li>
                <a>github</a>
                <a>velog</a>
              </li>
            </ul>
          </S.Profile>
        </S.Article>
        <S.Article>
          <S.Project>
            <h2>Project</h2>
            <ul>
              <li>
                <h3>
                  익명의 창찬 플랫폼.{' '}
                  <a href="http://kdt-sw3-team09.elicecoding.com">
                    WeChing(위칭)
                  </a>
                </h3>
              </li>
              <p>프로젝트 기간 : 2022.12.12 ~ 2022.12.30. (3주)</p>
              <p>사용한 기술스택 : Html, Scss, JS, React, Redux-toolkit</p>
              <p>서비스 소개</p>
              <p>
                익명의 누군가로부터 칭찬을 받고 싶은 날, 또는 내가 누군가를
                칭찬해주고 싶을 날 가볍게 칭찬을 주고 받을 수 있도록 자동 매칭
                서비스를 제공.
              </p>
              <p>역할, 성과 및 트러블 슈팅</p>
              <ul>
                1. 역할
                <li>a. 메인 페이지, 알람 페이지 UI 개발</li>
                <li>
                  b. 메인 페이지 - 복잡한 Api의 데이터 불러오기 기능 구현{' '}
                </li>
                <li>c. 메인 페이지 - 새로운 리뷰 알림 기능 및 페이지 구현</li>
              </ul>
              <ul>
                2. 성과 및 트러블 슈팅
                <li>a. useState, styled-Component, RTK 활용하여 개발</li>
                <li>
                  b. CORS 에러, server/ client 레파지토리 분리를 팀원들과 해결
                </li>
                <li>
                  c. 페이지 렌더시 하얀 화면만 뜨던 에러를 앰퍼샌드 문법으로
                  해결
                </li>
              </ul>
            </ul>
          </S.Project>
        </S.Article>
        <S.Article>
          <h2>Education</h2>
          <ul>
            <li>Elice</li>
            <li></li>
          </ul>
        </S.Article>
        <S.Article>
          <h2>Ps.</h2>
          <ul>
            <li>Elice</li>
            <li></li>
          </ul>
        </S.Article>
      </S.Section>
    </S.Container>
  );
};
