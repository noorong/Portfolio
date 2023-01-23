import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;

  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background-color: white;

  & > nav {
    width: 80%;
    margin: 20px auto;

    & > ul {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 150px 30px 30px 30px;

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
    margin-bottom: 25px;
    padding-left: 10px;
    font-weight: bold;

    border-left: 5px solid black;
  }

  & h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 10px 0;
    padding-left: 5px;
  }

  & h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  & p {
    padding-bottom: 15px;
    font-size: 16px;
    padding-left: 10px;
  }

  & ul {
    font-size: 16px;
    padding-left: 10px;

    & li:first-child {
      padding: 15px 0;
    }

    & li {
      padding: 0 0 8px 8px;
    }
  }

  & ol {
    font-size: 16px;

    & li {
      padding-left: 15px;
      margin-bottom: 10px;
    }
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
        color: lightgrey;
      }
    }
  }
`;
