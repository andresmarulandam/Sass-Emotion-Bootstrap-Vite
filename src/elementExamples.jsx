import styled from '@emotion/styled';

// Ejemplo 1
const Container = styled.div`
  display: flex;
  margin: 16px 8px;
`;

// Ejemplo 2: collapse sería una prop que se le pasaría:
// <Container collapse={true}></Container>

const Container1 = styled.div(function (props) {
  return {
    display: 'flex',
    margin: props.collapse ? '0' : ' 16px 8px',
  };
});

// Otra sintaxis para el mismo ejemplo del Container1
/* const Container = styled.div((props) => ({
  display: 'flex',
  margin: props.collapse ? '0' : '16px 8px',
})); */

// Ejemplo 3: Se usa parentesis para el div porque no necesariamente tiene que ser una etiqueta HTML, puede ser un componente de bootstrap

const Container2 = styled('div')((props) => ({
  display: 'flex',
  margin: props.collapse ? '0' : '16px 8px',
}));

// Ejemplo 4: Primero muestra los estilos base y luego los parametros dinamicos

const Container3 = styled('div')(
  {
    display: 'flex',
  },
  ({ collapse = false }) => ({
    margin: collapse ? '0' : '16px 8px',
  }),
);
