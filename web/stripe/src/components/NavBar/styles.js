import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    font-size: 18px;
    color: #fff;

    padding: 20px 25px;

    outline: 0;
    transition: opacity .2s;

    cursor: pointer;

    &:hover,
    &:focus {
      opacity: .55;
    }
  }
`;
