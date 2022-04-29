import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import HintOfLace from './components/HintOfLace';
import theme from './theme';

class Fashion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      knowFashion: false,
      fashionIsFriend: false,
      posing: 'like a swan',
    };
  }

  static propTypes = {
    data: PropTypes.shape({
      jazzercise: PropTypes.string.isRequired,
      lipgloss: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { jazzercise, lipgloss } = this.props;
    const { knowFashion, posing } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <h1>Hey! He-hey-hey! Hey!</h1>
        <HintOfLace
          lipgloss={lipgloss}
          posing={posing}
          knowFashion={knowFashion}
          jazzercise={jazzercise}
        />
      </ThemeProvider>
    );
  }
}

export default Fashion;
