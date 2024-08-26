import Nav from 'react-bootstrap/Nav';
import styled from '@emotion/styled';

// Sintaxis base tomando el Nav.Link de Boostrap

const NavLinkStyled = styled(Nav.Link)(
  {
    color: 'white',
  },
  (props) => ({}),
);

// Example without sass
const NavLinkStyled1 = styled(Nav.Link)(
  {
    borderRadius: '800px',
    color: 'white',
    paddingRight: '24px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  },
  ({ active }) => ({
    fontWeight: active ? 'bold' : 'normal',
  }),
);

// FINAL: with emotion and sass
const NavLinkHomeStyled = styled(NavLinkStyled)(({ theme }) => ({
  color: theme.colors.primary,
  marginTop: theme.space[2],
  paddingRight: 0,
  '&:hover': {
    backgroundColor: theme.colors['gray-200'],
    color: theme.colors.primary,
  },
  '&.active': {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  },
}));

const IconStyled = styled('i')(({ theme }) => ({
  fontSize: theme.fonts[4],
  marginRight: theme.space[3],
}));
