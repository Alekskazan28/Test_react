import React, { useState } from 'react';
import { createFrame, createFrameWithAutoLayout, align } from './utils/autoLayoutUtils';

const App = () => {
  const [framesById, setFramesById] = useState({});

  const processCommands = (commands) => {
    // Логика обработки команд
    // ...
  };

  return <div id="root" />;
};

export default App;