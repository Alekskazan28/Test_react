import { createRectangle } from './utils/shapeUtils';
import { createFrameWithAutoLayout } from './utils/autoLayoutUtils';
import { addFrame, getFrameById, alignFrame } from './utils/stateManager';

figma.showUI(__html__, { width: 420, height: 840 });

figma.ui.onmessage = msg => {
  if (msg.type === 'submit') {
    try {
      const commands = msg.data;
      processCommands(commands);
    } catch (error) {
      console.error("Error processing commands:", error);
      figma.ui.postMessage({ type: 'error', text: 'Error processing commands. Please check the format of your input.' });
    }
  }
};

function processCommands(commands) {
  commands.forEach(command => {
    let element;
    switch (command.action) {
      case "createFrame":
        element = figma.createFrame();
        element.resize(parseFloat(command.width), parseFloat(command.height));
        addFrame(command.id, element, command.parentId);
        break;
      case "createRectangle":
        element = createRectangle(parseFloat(command.width), parseFloat(command.height));
        addFrame(command.id, element);
        break;
      case "applyAutoLayout":
        element = getFrameById(command.id);
        createFrameWithAutoLayout(element, command.layoutMode, command.alignX, command.alignY, command.primaryAxisSizingMode, command.counterAxisSizingMode);
        break;
      case "globalAlign":
        alignFrame(command.childId, command.parentId, command.horizontalAlign, command.verticalAlign);
        break;
    }
  });
}
