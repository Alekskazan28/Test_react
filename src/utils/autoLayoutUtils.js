// src/utils/autoLayoutUtils.js
export function createFrameWithAutoLayout(frame, layoutMode = 'NONE') {
  frame.layoutMode = layoutMode;
  frame.layoutAlign = 'STRETCH'; // Делаем так, чтобы фрейм занимал всю доступную ширину в родителе
}