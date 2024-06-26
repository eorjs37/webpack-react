const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
  devtool: "source-map",
  resolve: {
    // 확인 가능한 확장자로 '.ts' 와 '.tsx' 를 추가합니다.
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵이 있습니다.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // 경로가 다음 중 하나와 일치하는 모듈을 가져올 때,
  // 해당 전역 변수가 있다고 가정하고 사용합니다.
  // 브라우저가 빌드간에 라이브러리를 캐시 할 수 있도록
  // 모든 의존성을 묶지 않아도 되기 때문에 중요합니다.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
}
