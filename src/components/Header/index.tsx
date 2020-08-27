import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link
          style={
            useLocation().pathname === '/'
              ? { color: 'white' }
              : { color: '#bebebe' }
          }
          to="/"
        >
          Listagem
        </Link>
        <Link
          style={
            useLocation().pathname === '/import'
              ? { color: 'white' }
              : { color: '#bebebe' }
          }
          to="/import"
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
