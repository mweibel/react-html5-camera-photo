import React from 'react';
import Camera, { FACING_MODES } from '../lib';
import './reset.css';

function App (props) {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto', {dataUri});
  }

  return (
    <Camera
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      isImageMirror={true}
      onTakePhoto={ (dataUri) => { handleTakePhoto(dataUri); } }
      torch={true}
    />
  );
}

export default App;
