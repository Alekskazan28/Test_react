export function createFrameWithAutoLayout(frame, layoutMode = 'NONE', alignX = 'CENTER', alignY = 'CENTER', primaryAxisSizingMode = 'AUTO', counterAxisSizingMode = 'AUTO') {
  frame.layoutMode = layoutMode;
  frame.primaryAxisSizingMode = primaryAxisSizingMode;
  frame.counterAxisSizingMode = counterAxisSizingMode;
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
