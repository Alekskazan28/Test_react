const path = require('path');

module.exports = {
  // Точка входа в приложение
  entry: './src/index.js',
  // Конфигурация выходного файла
  output: {
    filename: 'bundle.js',
    // Указываем папку dist в корне проекта для собранного файла
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // Применяем babel-loader к файлам .js и .jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            // Указываем пресеты для транспиляции JSX и последних версий JS
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Добавляем загрузчик для CSS файлов, если нужно
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Добавляем загрузчик для изображений, если ваш UI использует изображения
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // Добавляем расширения файлов, которые Webpack будет обрабатывать
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Настройка для разработки
  // Если вы собираете продакшн версию, можете использовать 'production'
  mode: 'development',
  // Добавляем source map для удобства отладки
  devtool: 'inline-source-map',
};
