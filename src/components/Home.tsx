import React from 'react';
import * as S from './styled';
import profilePicture from '../assets/박재훈 증명사진.jpg';

export const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <nav>
          <ul>
            <li>
              <a href="#Profile">자기소개</a>
            </li>
            <li>
              <a href="#Project">프로젝트</a>
            </li>
            <li>
              <a href="#Education">교육이력</a>
            </li>
            <li>
              <a href="#Tmi">TMI</a>
            </li>
          </ul>
        </nav>
      </S.Header>
      <S.Section id="Profile">
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
                <a href="https://github.com/noorong">github</a>
                <a href="https://velog.io/@noorong">velog</a>
              </li>
            </ul>
          </S.Profile>
        </S.Article>
        <S.Article id="Project">
          <h2>Project</h2>
          <h3>Project Name : Weching(위칭)</h3>
          <ul>
            <li>
              <h4>
                익명의 창찬 플랫폼.{' '}
                <a href="https://github.com/we-ching">깃허브</a>
              </h4>
            </li>
            <p>프로젝트 기간 : 2022.12.12 ~ 2022.12.30. (3주)</p>
            <p>사용한 기술스택 : Html, Scss, JS, React, Redux-toolkit</p>
            <p>서비스 소개</p>
            <p>
              익명의 누군가로부터 칭찬을 받고 싶은 날, 또는 내가 누군가를
              칭찬해주고 싶을 날 가볍게 칭찬을 주고 받을 수 있도록 자동 매칭
              서비스를 제공.
            </p>
          </ul>
          <p>역할, 성과 및 트러블 슈팅</p>
          <ul>
            <li>1. 역할</li>
            <li>a. 메인 페이지, 알람 페이지 UI 개발</li>
            <li>b. 메인 페이지 - 복잡한 Api의 데이터 불러오기 기능 구현 </li>
            <li>c. 메인 페이지 - 새로운 리뷰 알림 기능 및 페이지 구현</li>
          </ul>
          <ul>
            <li>2. 성과 및 트러블 슈팅</li>
            <li>a. useState, styled-Component, RTK 활용하여 개발</li>
            <li>
              b. CORS 에러, server/ client 레파지토리 분리를 팀원들과 해결
            </li>
            <li>
              c. 페이지 렌더시 하얀 화면만 뜨던 에러를 앰퍼샌드 문법으로 해결
            </li>
          </ul>
          <h3>Project Name : Celev (셀레브)</h3>
          <ul>
            <li>
              <h4>
                셀럽의 픽! Ce1ev
                <a href="https://github.com/noorong/Elice_Project1_ce1ev">
                  깃허브
                </a>
              </h4>
            </li>
            <p>프로젝트 기간 : 2022.10.31 ~ 2022.11.11. (2주)</p>
            <p>사용한 기술스택 : Html, Css, JS</p>
            <p>서비스 소개</p>
            <p>
              연예인, 유튜버 등 유명인의 의류 정보 검색 및 판매 서비스를
              제공하는 쇼핑몰. 다양한 키워드 검색 및 카테고리 기능 제공
            </p>
          </ul>
          <p>역할, 성과 및 트러블 슈팅</p>
          <ul>
            <li>1. 역할</li>
            <li>a. 팀 리더로서 주도적인 프로젝트 진행</li>
            <li>b. 사이트맵 제작 및 구체화</li>
            <li>c. 전체 UI 디자인 및 개발</li>
            <li>d. 검색 및 카테고리 기능 JS로 개발</li>
            <li>e. NginX로 배포</li>
          </ul>
          <ul>
            <li>2. 성과 및 트러블 슈팅</li>
            <li>
              {' '}
              a. lazyloading 으로 페이지 로딩 시간 감소(30.95s to 402 ms)
            </li>
            <li>
              b. Js, Css 파일을 제대로 못 찾는 문제를 통해 웹 팩의 필요성에 대해
              배움.{' '}
            </li>
            <li>c. aws S3 이미지 등록 및 삭제</li>
          </ul>
        </S.Article>
        <S.Article id="Education">
          <h2>Education</h2>
          <h3>기관명 : (주)엘리스 그룹</h3>
          <ul>
            <p>교육 기간 : 2022.09.12 ~ 2022.12.30. (16주)</p>
            <p>학습한 기술스택 : Html, Css&Scss, JS, React, Redux-toolkit</p>
          </ul>
          <ul>
            <p>주요 학습 내용</p>
            <li>
              1차 스터디 : 기초 JS 알고리즘, Html&Css로 자기소개 페이지 제작
            </li>
            <li>1차 프로젝트 : Html, Css, JS로 쇼핑몰 제작 </li>
            <li>
              2차 스터디 : 1차 프로젝트 기능 추가 (비회원 사용 및 후기 기능추가)
            </li>
            <li>2차 프로젝트 : React로 익명의 칭찬 페이지 제작</li>
          </ul>

          <h3>기관명 : 부스트 코스 X 모두의 연구소</h3>
          <ul>
            <p>교육 기간 : 2022.05.06. ~ 2022.06.09. (5주)</p>
            <p>사용한 기술스택 : Html, Css</p>
          </ul>
          <ul>
            <p>주요 학습 내용</p>
            <li>HTML/CSS의 이론 학습 및 실습</li>
          </ul>
        </S.Article>
        <S.Article id="Tmi">
          <h2>TMI</h2>
          <p>
            아래의 글들은 나름 열심히 살았다는 사실을 주저리 주저리 변명하고자
            작성했습니다.
          </p>
          <ol>
            <li>1. 밴드 동아리 베이시스트 출신 (간단한 연주가능)</li>
            <li>
              2. 전기기사, 전기공사기사 자격증 보유 (사무실 전구갈기 가능)
            </li>
            <li>3. 한국동서발전 울산화력본부 노무부 인턴경력 (검증된 인재)</li>
            <li>
              4. 교내 근로학생 1년반, 조선소 3개월, 부가세 신고 등 각종
              아르바이트 경험 (일 잘함, 인사 잘함)
            </li>
            <li>5. 요양병원 봉사활동, 봉사동아리 경력 (착함)</li>
            <li>6. 토익스피킹 Lv. 6, 중국어 1등급 (글로벌 인재)</li>
            <li>
              7.휴학 후 반년간 영상을 배우고 흥미를 느껴 디자인 복수전공 시작.
            </li>
            <li>
              8. 그런데 마침 영상수업 교수님의 연구년으로 영상동아리에 가입.
            </li>
            <li>가입하자마자 동아리 존폐위기, 부회장 자처.</li>
            <li>
              {' '}
              낮에는 동아리에서 얕은 지식으로 영상교육 및 동아리 관리하고 밤에는
              디자인 과제 미친듯이 해냄.(인생에서 가장 바빴던 1년)
            </li>
            <li>
              {' '}
              그래도 졸업작품으로 환경 관련 패러디 영상 제작해봄. (간단한
              영상제작 가능)
            </li>
            <li>
              9. 졸업후 디자인의 길로 가고 싶었으나 집안의 반대로 2년간
              전기공기업 준비하기로 다짐. (한 번 마음먹으면 끝까지 하는 편.)
            </li>
            <li>
              10. 목표 달성 실패후 진짜 본인이 원하는 일을 탐색. 기획자,
              디자이너, 개발자에 관심. 그 중 개발자를 고른 이유는 실제로 내
              손으로 서비스를 만들고 싶다는 욕심. (Boys Be Ambitious!)
            </li>
          </ol>
        </S.Article>
      </S.Section>
    </S.Container>
  );
};
