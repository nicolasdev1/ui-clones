import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  Container,
  HeaderWrapper,
  Header,
  DropboxLogo,
  Navigation,
  MenuIcon,
  Content,
} from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>
          <Navigation>
            {isDesktop
            ?
            <div>
              <button>Para equipes</button>
              <button>Para pessoas físicas</button>
            </div>
            :
            <div></div>
            }
            <div>
              <button>  {!isDesktop && title === 'Concentre-se apenas no trabalho importante' ? 'Acessar' : !isDesktop ? 'Registrar-se' : 'Acessar'}</button>
              {isDesktop ? <button>Registrar-se</button> : <MenuIcon />}
            </div>
          </Navigation>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;
