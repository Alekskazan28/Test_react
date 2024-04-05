// Экспортируем функции для работы с auto layout в Figma
export function createFrame(width, height) {
  // Создаем фрейм и устанавливаем его размеры
  const frame = figma.createFrame();
  frame.resize(width, height);
  return frame;
}

export function createFrameWithAutoLayout(frame, layoutMode = 'NONE', primaryAxisAlignItems = 'CENTER', counterAxisAlignItems = 'CENTER') {
  // Настройка автоматического выравнивания для фрейма
  frame.layoutMode = layoutMode;
  frame.primaryAxisAlignItems = primaryAxisAlignItems;
  frame.counterAxisAlignItems = counterAxisAlignItems;
  frame.layoutAlign = 'STRETCH'; // Вытягиваем фрейм, чтобы он занимал всю доступную ширину в родителе
}

export function align(element, parent, alignment) {
  // Выравнивание элемента относительно его родителя
  switch (alignment) {
    case 'center':
      // Центрирование элемента по обеим осям
      element.x = (parent.width - element.width) / 2;
      element.y = (parent.height - element.height) / 2;
      break;
    case 'left':
      // Выравнивание элемента по левому краю родителя
      element.x = 0;
      break;
    case 'right':
      // Выравнивание элемента по правому краю родителя
      element.x = parent.width - element.width;
      break;
    // Можно добавить дополнительные кейсы выравнивания по мере необходимости
    default:
      break;
  }
  // Добавляем элемент к его родителю
  parent.appendChild
}