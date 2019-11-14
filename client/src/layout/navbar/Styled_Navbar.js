import styled from 'styled-components';
import { breakpoints } from '../../components/responsive/responsive';

const StyledNavbar = styled.nav`
  .navbar {
    display: flex;
    .title {
      padding-left: 52px;
    }
    .menu-button {
      display: none;
      margin-right: 16px;
    }
    .search {
      position: relative;
      margin-left: 24px;
      .search-icon {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        right: 2%;
      }
    }
    .section-desktop {
      display: flex;
      margin: 0 0 0 auto;
    }
  }

  @media ${breakpoints.lg} {
    .navbar{
      .title {
        padding-left: 0px;
      }
      .menu-button {
        display: block
      }
      .section-desktop {
        .account {
          display: none;
        }
      }
    }
  }
`

export default StyledNavbar;