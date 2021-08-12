import styled from 'styled-components';

import { FaDropbox } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;

  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --background-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --background-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --background-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --background-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;

    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background-color: var(--background-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  max-width: 1440px;
  
  margin: 0 auto;
  padding: 16px 32px;

  display: flex;
  justify-content: space-between;

  z-index: 3;

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  background-color: var(--background-color);  

  > h1 {
    display: flex;
    align-items: center;

    margin-right: 30px;

    > span {
      font-size: 29px;
      color: var(--text-color);

      margin-left: 10px;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;

  fill: var(--logo-color);
`;

export const Navigation = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    > button {
    font-size: 16px;
    color: var(--text-color);

    padding: 10px 15px;

    outline: 1px;

    background: none;
    border: none;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  }
`;

export const MenuIcon = styled(FiMenu)`
  width: 24px;
  height: 24px;

  color: var(--text-color);

  cursor: pointer;
`;

export const Content = styled.div`
  max-width: 1440px;

  z-index: 2;
  position: relative;

  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);

  > h2 {
    max-width: var(--content-width);

    font-size: var(--heading-font-size);
    color: var(--logo-color);
  }

  > p {
    max-width: var(--content-width);

    margin-top: 20px;

    font-size: 16px;
    color: var(--text-color);
  }
`;
