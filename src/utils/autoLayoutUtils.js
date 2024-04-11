export function createFrameWithAutoLayout(frame, layoutMode = 'NONE', alignX = 'CENTER', alignY = 'CENTER') {
  frame.layoutMode = layoutMode;
  frame.layoutAlign = 'STRETCH';

  switch (layoutMode) {
    case 'HORIZONTAL':
      frame.primaryAxisAlignItems = alignX;
      frame.counterAxisAlignItems = alignY;
      frame.itemSpacing = 10;
      break;
    case 'VERTICAL':
      frame.primaryAxisAlignItems = alignY;
      frame.counterAxisAlignItems = alignX;
      frame.itemSpacing = 10;
      break;
    case 'NONE':
      break;
  }
}