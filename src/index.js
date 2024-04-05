const { createFrame, createFrameWithAutoLayout, align } = require('./utils/autoLayoutUtils');

figma.showUI(__html__, { width: 420, height: 840 });

let frameOffset = 0;
let framesById = {};

figma.ui.onmessage = msg => {
  if (msg.type === 'submit') {
    try {
      const commands = msg.data;
      processCommands(commands);
      frameOffset = 0;
    } catch (error) {
      console.error("Error processing commands:", error);
      figma.ui.postMessage({ type: 'error', text: 'Error processing commands. Please check the format of your input.' });
    }
  }
};

function processCommands(commands) {
  commands.forEach(command => {
    if (command.action === "createFrame") {
      let element = createFrame(parseFloat(command.width) || 0, parseFloat(command.height) || 0);
      figma.currentPage.appendChild(element);
      frameOffset++;
      framesById[command.id] = element;
    }
  });

  commands.forEach(command => {
    if (command.action === "align" || command.action === "createFrameWithAutoLayout") {
      let element = framesById[command.id];
      if (!element) return;
      
      if (command.action === "createFrameWithAutoLayout") {
        createFrameWithAutoLayout(element, command.layoutMode, command.primaryAxisAlignItems, command.counterAxisAlignItems);
      }
      
      if (command.parentId) {
        let parent = framesById[command.parentId];
        if (parent && command.alignment) {
          align(element, parent, command.alignment);
        }
      }
    }
  });
}
