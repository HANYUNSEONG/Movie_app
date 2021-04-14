# 영화 API를 사용해서 데이터를 가져와보자
- [영화 데이터 API 사이트](https://developers.themoviedb.org/3/getting-started)

## 목표
- [ ] 수동으로 세팅해보기 (React, Redux-saga, Typescript)

## 사용한 스택
- Typescript
- React
- Redux + Redux-saga
- antd + emotion

## gh-pages로 배포하기 (github page)
```
> npm install --save gh-pages
```
or
```
> npm install --save-dev gh-pages
```

- package.json 추가
```json
"homepage": "https://hanyunseong.github.io/movie_app",
"scripts": {
  // ...
  "build": "webpack",
  "deploy": "gh-pages -d build"
},
```

```
> npm run build
> npm run deploy
```