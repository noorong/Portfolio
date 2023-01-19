import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

export const Header = styled.header`
  & > nav {
    margin: 20px 0;

    & > ul {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 30px;

  & > article:first-child {
    display: flex;
    gap: 50px;
  }
`;

export const Article = styled.article`
  width: 100%;

  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;

  & h1 {
    font-size: 35px;
    margin-bottom: 25px;
  }

  & h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 20%;
  height: 200px;
`;

export const Profile = styled.div`
  width: 80%;

  & > ul {
    font-size: 20px;
    padding-left: 10px;

    & > li {
      padding-bottom: 15px;
      line-height: 28px;
    }
    & > li:last-child {
      font-size: 28px;
      display: flex;

      & > a {
        margin-right: 10px;
      }
    }
  }
`;
