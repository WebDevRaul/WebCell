import styled from 'styled-components';

const StyledSignIn = styled.section`
  .sign-in {
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    .paper {
      display: 'flex';
      flex-direction: column;
      align-items: 'center';
      .avatar {
        margin: 8px auto;
        background-color: var(--second);
      }
      h1 {
        text-align: center;
      }
    }
  }
`

export default StyledSignIn;