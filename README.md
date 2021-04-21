# 영화 API를 사용해서 데이터를 가져와보자
- [영화 데이터 API 사이트](https://developers.themoviedb.org/3/getting-started)

## 목표
- 수동으로 세팅해보기 (React, Redux-saga, Typescript)
- Redux-saga 적용해보기
- Typescript 적용해보기
- 무한 스크롤(Infinity Scroll) 구현해보기
- 장르별 영화 목록 나오게 해보기

![image](https://user-images.githubusercontent.com/58321856/115488865-2e44ff80-a296-11eb-934e-2fe40fedceab.png)

## 사용한 스택
- Typescript
- React
- Redux + Redux-saga
- antd + emotion
- webpack

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
