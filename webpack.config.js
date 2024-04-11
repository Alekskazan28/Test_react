const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Точка входа в приложение
  entry: './src/index.js',
  // Конфигурация выходного файла
  output: {
    filename: 'bundle.js',
    // Указываем папку public в корне проекта для собранного файла
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
      // Добавляем загрузчик для CSS файлов
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Добавляем загрузчик для изображений
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
  mode: 'development',
  // Добавляем source map для удобства отладки
  devtool: 'inline-source-map',
  // Добавляем plugins для расширения функциональности
  plugins: [
    // Плагин для очистки директории public перед каждой сборкой
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['**/*', '!index.html', '!manifest.json'], // Исключаем index.html и manifest.json из очистки
    }),
  ],
};
