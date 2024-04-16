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

export const alignFrame = (childId, parentId, horizontalAlign, verticalAlign) => {
  const child = framesById[childId];
  const parent = framesById[parentId];
  if (child && parent) {
    switch (horizontalAlign) {
      case "Align Left":
        child.x = parent.x;
        break;
      case "Align horizontal centers":
        child.x = parent.x + (parent.width - child.width) / 2;
        break;
      case "Align right":
        child.x = parent.x + parent.width - child.width;
        break;
    }
    switch (verticalAlign) {
      case "Align top":
        child.y = parent.y;
        break;
      case "Align vertical centers":
        child.y = parent.y + (parent.height - child.height) / 2;
        break;
      case "Align bottom":
        child.y = parent.y + parent.height - child.height;
        break;
    }
  }
};
