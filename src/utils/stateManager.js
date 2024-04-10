// src/utils/stateManager.js
export const framesById = {};

export const addFrame = (id, frame, parentId = null) => {
  framesById[id] = frame;
  if (parentId && framesById[parentId]) {
    framesById[parentId].appendChild(frame);
  } else {
    figma.currentPage.appendChild(frame);
  }
};

export const getFrameById = (id) => framesById[id];
