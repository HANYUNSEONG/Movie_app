### 메모

1. view(컴포넌트?)에서 액션이 발생하고 dispatch로 넘긴다
```js
useEffect(() => {
    dispatch(loadData());
  }, []);
```

2. 액션에 의해 리듀서가 실행되기 전에 middleware(saga)가 작동
3. middleware(saga)가 일을 끝내고 리듀서를 실행
4. 리듀서는 store에 새로운 값을 저장
5. store의 state에 subscribe하고 있던 컴포넌트에 변경된 값을 뿌림

* 이게 맞나..? *
- 참고해보기: https://velog.io/@kyjun/redux-saga-%ED%9D%90%EB%A6%84-2v59xa3d

### antd 적용
```
> npm install --save-dev style-loader css-loader babel-plugin-import
> npm install --save antd
```
- webpack.config.js
```js
// module.rules에 추가
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
```

- .babelrc에 추가
```
"plugins": [[
  "import",
  {
    "libraryName": "antd",
    "style": "css"
  }
]]
```