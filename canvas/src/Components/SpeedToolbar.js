import React from 'react';
import {StyledSpeedToolbar} from '../styles/StyledSpeedToolBar';

const SpeedToolbar = ({ play, pause, speedUp }) =>(
     <StyledSpeedToolbar>
              <input type="button" id="play" value="Play" onClick={play} />
              <input type="button" id="pause" value="Pause" onClick={pause} />
              <input type="button" id="pause" value=">>" onClick={speedUp} />
            </StyledSpeedToolbar>
);

export default SpeedToolbar;