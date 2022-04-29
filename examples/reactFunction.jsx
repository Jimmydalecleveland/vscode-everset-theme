import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import HintOfLace from './components/HintOfLace';
import theme from './theme';

const Fashion = ({ jazzercise, lipgloss }) => {
  const { state, setState } = React.useState({
    knowFashion: false,
    fashionIsFriend: false,
    posing: 'like a swan',
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>Hey! He-hey-hey! Hey!</h1>
      <HintOfLace
        lipgloss={lipgloss}
        posing={state.posing}
        knowFashion={state.knowFashion}
        jazzercise={jazzercise}
        update={setState}
      />
    </ThemeProvider>
  );
}

Fashion.propTypes = {
  data: PropTypes.shape({
    jazzercise: PropTypes.string.isRequired,
    lipgloss: PropTypes.number.isRequired,
  }).isRequired,
}

export default Fashion;
