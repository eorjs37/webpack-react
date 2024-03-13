# webpack-react

## 설치 플러그인

```bash
npm install --save-dev webpack webpack-cli
npm install react react-dom
npm install --save-dev babel-loader @babel/preset-env @babel/preset-react
npm install --save-dev html-loader
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
```

## typescript

```bash
npm install --save-dev @types/react @types/react-dom
npm install --save-dev typescript ts-loader source-map-loader
```

## react-hook

### useState
```
useState 를 통해 컴퍼넌트의 변수를 바꿀 수 있다.
```

```javascript
const [number,setNumber] = useState(0);
```

### useReducer

### useContext

### useMemo

### useCallback