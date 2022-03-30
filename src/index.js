import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../src/styles';

import App from './App';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <StyledMainContainer className="fillHeight">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StyledMainContainer>
  </ThemeProvider>,
  document.getElementById('root')
);
