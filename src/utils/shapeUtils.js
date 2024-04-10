// Этот модуль отвечает за создание геометрических фигур

export function createRectangle(width, height) {
  const rectangle = figma.createRectangle();
  rectangle.resize(width, height);
  rectangle.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }]; // Устанавливаем базовый серый цвет
  return rectangle;
}
