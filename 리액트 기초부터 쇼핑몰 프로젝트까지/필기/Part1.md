# React 리액트 기초부터 쇼핑몰 프로젝트까지
## Part 1 : 블로그 제작 & 기초 문법

## 목차
1. React 배우기 전에 쓰는 이유부터 알아야
2. 리액트 설치와 개발환경 셋팅
3. 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
4. 중요한 데이터는 변수 말고 state에 담습니다
5. 버튼에 기능개발을 해보자 & 리액트 state 변경하는 법
6. array, object state 변경하는 법
7. Component : 많은 div들을 한 단어로 줄이고 싶으면
8. 리액트 환경에서 동적인 UI 만드는 법(modal 창 만들기)
9. map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
10. 자식이 부모의 state를 가져다쓰고 싶을 때는 props
11. props를 응용한 상세페이지 만들기
12. input 1 : 사용자가 입력한 글 다루기
13. input 2 : 블로그 글 발행 기능 만들기
14. class를 이용한 옛날 React 문법
15. 만든 리액트 사이트를 build & Github Pages로 배포해보기

## 0. 개요
### 배울 내용
1. 최근 업데이트 된 React 18 버전으로 진행
2. 리액트 프로젝트 생성, 관리, 빌드
3. components, props, state를 이용한 모던 웹 개발
4. JSX for 반복문, 이벤트 핸들러 등 UI 기능 구현법
5. 라우터로 페이지 나누기
6. Redux와 context API로 state관리하기
7. Ajax 등으로 서버와 API 통신
8. 자주 사용하는 외부 라이브러리(Bootstrap, Styled component, SASS)
9. 자주 필요한 JS ES6 문법들
10. lazy loading 등의 간단한 성능 개선법
11. 서버 프로젝트와 리액트 연동

### 필요한 사전 지식
- HTML / CSS 기초
- JS 기초
    - var, let, const
    - function
    - if-else
    - for
    - [], {} 자료 다루기

## 1. React 배우기 전에 쓰는 이유부터 알아야
### React 사용 이유
React를 사용하는 이유 : Single Page Application 제작
- Single Page Application(SPA) : html 파일을 한 개만 사용하는 어플리케이션
- JS만으로도 SPA를 만들 수는 있지만, 코드가 길어짐을 방지
    - React 라이브러리를 설치하여 쉽게 만들기
- html을 함수, array, object 등에 보관하고 재사용 가능
- React Native를 사용할 때, 모바일 앱 개발도 가능
    - html, css 문법만 약간 다름

## 2. 리액트 설치와 개발환경 셋팅
### 리액트 설치
1. Node.js 설치
- 설치 이유 : React 라이브러리를 html 파일에 직접 설치하는 것 보다 create-react-app 라이브러리를 사용하는 것이 편함
    - npm에 해당 라이브러리가 포함되어있음
    - nodejs를 설치 시, npm이 자동 설치

2. Visual Studio Code 설치

### 리액트 프로젝트 생성
1. 작업용 폴더 생성
- 나는 실습/에 리액트 프로젝트 생성할거임!
2. 해당 디렉토리의 터미널에서 리액트 프로젝트 생성
- npx create-react-app "프로젝트명"
    - 나는 npx create-react-app blog
    - npx : 
    - create-react-app : 
3. 생성한 프로젝트로 이동 및 실행
- cd "프로젝트명"
- npm start

### 리액트 프로젝트 구조
#### 초기 구조
my-app
    - node_modules
    - public
    - src
    - .gitignore
    - package.json
    - README.me

1. node_modules : 현재 프로젝트에 포함된 라이브러리들이 설치되어 있는 폴더
- 깃과 같은 저장소에 올릴 경우 해당 폴더는 제외(.gitignore)
2. public : index.html 등의 정적(static) 파일이 포함되는 곳
- 컴파일이 필요없는 파일들이 위치하는 폴더
3. src : 리액트 내부에서 작성하는 거의 모든 파일들이 위치한 폴더
- 명령어에 따라 JS로 컴파일 진행
4. package.json : 프로젝트 관련 기본 정보(프로젝트 이름, 버전)과 라이브러리 목록 포함
- node_modules 대신 package.json을 깃에 포함하여 올린 후, npm install
##### src
src
    - components
    - assets
    - hooks(= hoc)
    - pages
    - constants
    - config
    - services(= api)
    - utils
    - contexts
    - App.js
    - index.js

- src 폴더 구조 예시 
    - ![Alt text](<images/1. src 파일 구조.PNG>)

1. components : 컴포넌트들이 위치하는 폴더
- 많아질 수 있음에 대비하여 내부에서 하위 폴더로 추가로 분류
2. assets : 이미지, 폰트 등의 파일들이 저장되는 폴더
- 정적 파일 중, 컴파일 단계에 필요한 파일을 올림(<-> public)
    - component 내부에서 사용하는 이미지 파일
3. hooks : 커스텀 훅이 위치하는 폴더
4. pages : react router 등을 이용하여 라우팅을 적용할 때의 페이지 컴포넌트가 위치하는 폴더
5. constants : 공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더
6. config
7. styles : css 파일들이 포함되는 폴더
8. services : api 관련 로직 모듈 파일이 위치하는 폴더
- auth 등의 인증 관련 파일도 포함
9. utils : 정규표현식 패턴이나 공통함수 등, 공통으로 사용하는 유틸 파일들이 위치하는 폴더
10. contexts : contextAPI를 사용할 때, 관련 파일들이 위치하는 폴더
- 상태관리를 위해 contextAPI 대신 Redux 사용 시, 해당 폴더 이름을 store로도 사용

#### 리액트 특이점
App.js에서 html 구문 생성
- 이것을 index.html로 전달
- 어떤 걸 통해서? index.js를 통해서!!!!




## 3. 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
### JSX
JSX(JavaScript Syntax Extension) : JS의 확장된 문법
- 하나의 파일에 JS와 HTML을 동시 작성 가능

#### JSX 장점
1. 태그 만들기 편함
- 리액트에서 태그 만들기 : React.createElement("태그", null, "담을 내용")
- JSX 활용해서 태그 만들기 : return() 내부에 최상단 태그 안에서 작성 
2. 데이터 바인딩이 편함
- 기존 : document.querySelector("태그").innerHTML = 변수명;
- JSX 활용 : 위에서 변수 생성 -> return 내부에서 중괄호 내부에 변수명 작성
#### JSX 특징
1. 반드시 부모 요소가 감싸는 형태
    - 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다
2. JS 표현식
- JSX 내부에서  코드를 중괄호({})로 감싸기
- camelCase로 작성(객체 형태)
    -HTM
3. React DOM은 HTML 속성 이름 대신, camelCase 속성 규칙 사용
- stlye 적용도 마찬가지
    - style= { {속성1: "값1", 속성2: "값2", ..} }
    - object 형태로 작성
    - 속성명은 camelCase로 작성
4. class 속성 대신 className 사용

### Ch3 결과
![Alt text](<images/2 - Ch 3 결과.PNG>)



## 4. 중요한 데이터는 변수 말고 state에 담습니
### 주의사항 하나!!
우리가 HTML 코드를 짜는 공간 : return() 내부
- return 내부에서 가장 큰 태그는 하나!!
    - 같은 독립 두 개의 태그가 가장 위에 있으면 안됩니다~~

### React에서 변수 담는 방법
1. let, var, const 사용
- let 변수의 값이 변할 경우, 새로고침을 통해 렌더링
2. state 사용
- import { useState } from 'react';를 통해 불러온 후 사용
- [state변수, state변수 변경 함수] = useState("초기값")
    - state 변수 : 초기값이 담긴 상태의 변수
    - state 변수 변경 함수 : state 변수에 저장된 값을 바꿀 때 사용하는 함수(기존 state 변수를 갈아엎는 느낌)

### state 
state : 컴포넌트 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체
- 유동적인 데이터를 담기 위해 useState() 함수를 사용하여 state 저장 공간에 담아 사용

#### state 사용 이유
기존 변수에 값 저장 -> 변수에 담긴 값이 변경되어도 자동으로 화면이 재렌더링 되지 않음(새로고침 이후에 렌더링)
- state를 활용 시, 자동으로 화면이 재렌더링
- 자주 변경되는 값을 저장하고 싶을 때 state를 활용

### Ch4 결과
![Alt text](<images/3 - Ch 4 결과.PNG>)



## 5. 버튼에 기능개발을 해보자 & 리액트 state 변경하는 법
### eventHandler
event : 발생하는 모든 것
- 클릭, 엔터키 등등...

eventHandler : 이벤트 발생 시 호출되는 함수

#### state 변경 함수 호출
1. 좋아요 버튼을 클릭 시(이벤트 발생)
2. state에 담겨있는 좋아요 개수(likeNumber)의 값을 1개 증가(state 변경 함수 호출)
- 정확하게 말하면, state 변수의 값을 +1 해주는 것이 아니라, state 변수의 값을 기존 state 변수의 값에 1을 더한 값으로 대체해버리는 것!
- onClick={ () => {함수 호출} }
    - 내부에서 직접 작성 or return문 밖에서 미리 작성 후 호출

### Ch 5 결과
![Alt text](<images/4 - Ch 5 결과.PNG>)



## 6. array, object state 변경하는 법
### array, object state
배열, 객체 데이터를 state에 보관할 경우, 이들을 다루기 위해 원본을 보존해야 함
- 변경해야 하는 경우, copy 본을 만들고(let 복사본=[...객체(or배열)])
- 복사본을 변경하여
- 이를 state 변경 함수의 인자로 넣는다
#### state 변경함수의 원리
state 변경함수 : 호출 될 경우
- 기존 state와 신규 state를 비교(==) -> 같으면 변경 X
- array와 object는 값을 담는 메모리 주소를 바라본다!!
    - let arr = [1, 2, 3]; 
        - 1. [1, 2, 3]이라는 배열이 RAM에 저장
        - 2. arr라는 변수가 그 주소를 바라봄
    - let copy = arr; 
        - 1. copy는 arr가 바라보는 주소를 바라보게 된다
    - copy[1] = 100;
        - 1. copy가 바라보는 메모리주소에 저장된 배열 [1, 2, 3]의 1번 인덱스 값을 100으로 변경
        - 2. arr도 같은 주소를 바라보고 있기 때문에 [1, 100, 3]
    - 위와 같은 이유로, 배열 혹은 객체를 state변경하기 위해서는 복사본으로 다뤄야 한다(reference data type의 특징,,)

### Ch 6 결과
![Alt text](<images/5 - Ch 6 결과.PNG>)



## 7. Component : 많은 div들을 한 단어로 줄이고 싶으면
### 상세 페이지 만들기
글 제목 클릭 시, 해당 글의 상세 내용을 담은 modal이 튀어나오게 해보자!!
- 각 게시글 별로 상세 페이지 필요 -> 반복하지 말고 하나 만들어서 계속 쓰자!!!

#### component
component : 리액트 프로젝트의 구성요소

### Ch 7 결과
![Alt text](<images/6 - Ch 7 결과.PNG>)



## 8. 리액트 환경에서 동적인 UI 만드는 법(modal 창 만들기)
return() 내부에서 중괄호 안에 if를 못씀 -> 삼항 연산자(? :) 또는 && 사용!

### Ch 8 결과
![Alt text](<images/7 - Ch 7 결과 - 1.PNG>)

![Alt text](<images/8 - Ch 7 결과 - 2.PNG>)

## 9. map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
return() 내부에서 중괄호 안에 for을 못씀 -> map()함수 사용!

### Ch 9 결과
Modal 컴포넌트
- ![Alt text](<images/9 - Ch 9 결과 - 1(Modal).PNG>)
Article 컴포넌트
- ![Alt text](<images/10 - Ch 9 결과 - 2(Article).PNG>)
App 컴포넌트(Articles.map((Article, index) {}))
- ![Alt text](<images/11 - Ch 9 결과 - 3(App).PNG>)

## 10. 자식이 부모의 state를 가져다쓰고 싶을 때는 props
부모 component에서 자식 component로 state 전송 가능
- props 문법을 활용하여 전송
- ex. App 컴포넌트(부모)의 state를 Article 컴포넌트(자식)에서 활용 가능
## 11. props를 응용한 상세페이지 만들기

둘다 사실상 Ch9에서 응용으로 같이 함;
Zustand : 상태 관리 라이브러리

## 12. input 1 : 사용자가 입력한 글 다루기
## 13. input 2 : 블로그 글 발행 기능 만들기
## 14. class를 이용한 옛날 React 문법
## 15. 만든 리액트 사이트를 build & Github Pages로 배포해보기
