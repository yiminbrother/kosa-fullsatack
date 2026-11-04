# 2026-11-04 학습 정리

## 정리 기준: 오늘의 Git 이력과 대화

- 날짜 기준: **2026-11-04, 한국 시간(Asia/Seoul)**.
- 확인한 커밋: **`44a02c1`**, 2026-11-04 **17:20:09 +09:00**.
- 커밋 메시지: `react life cycle, global state학습완료`.
- 이 커밋의 `front-end` 변경은 **14개 파일, 521줄 추가·8줄 삭제**이며, 신규 11개·수정 3개다.
- Git 커밋의 변경 파일, 파일 최종 수정 시각, 현재 소스와 이 대화에서 요청·설명한 내용을 대조했다. 확인 시점의 front-end 작업 트리에는 미커밋 변경이 없었다.
- 수정 시각은 마지막 저장 시각이며 모든 편집 단계의 이력은 아니다. 대화의 각 메시지가 작성된 날짜를 별도로 확인한 것은 아니므로, 오늘 커밋된 파일과 연결되는 대화 내용을 중심으로 정리했다.

### 오늘 변경한 파일과 실습 내용

아래 경로는 `front-end/` 기준이다. 시간은 모두 2026-11-04 한국 시간의 최종 수정 시각이다.

| 파일 | 변경 | 시각 | 실습 내용 |
| --- | --- | --- | --- |
| `app/Ch04LifeCycle/page.js` | 생성 | 09:40:30 | 두 카운터 상태, 증가 이벤트, Effect 의존성 배열과 정리 함수 |
| `app/Ch05Routing/Exam01Navigation/page.js` | 생성 | 10:27:12 | `router.push()`로 버튼 클릭 후 이동 |
| `app/Ch05Routing/Exam02QueryString/page.js` | 생성 | 10:40:55 | Link와 router를 이용한 key1·key2 쿼리 전달 |
| `app/Ch05Routing/Exam02QueryString/ComponentA/page.js` | 생성 | 16:57:45 | Suspense, useSearchParams, URL 값 직접 표시, `??` |
| `contexts/ColorContext.js` | 생성 | 12:20:40 | 색상 상태와 setColor를 Provider로 공유 |
| `app/Ch07GlobalState/Exam01ColorContext/page.js` | 생성 | 12:17:04 | 두 UI 컴포넌트 배치 |
| `app/Ch07GlobalState/Exam01ColorContext/UIComponentA.js` | 생성 | 12:16:40 | 색상 클릭으로 전역 상태 변경 |
| `app/Ch07GlobalState/Exam01ColorContext/UIComponentB.js` | 생성 | 12:31:41 | 공유된 색상을 className으로 경고 박스에 반영 |
| `contexts/AuthContext.js` | 생성 | 16:34:25 | login·logout, localStorage 저장·복원, isInitialized |
| `app/Ch07GlobalState/Exam02AuthContext/page.js` | 생성 | 15:48:21 | 로그인 여부에 따른 버튼 표시와 페이지 이동 |
| `app/Ch07GlobalState/Exam02AuthContext/LoginComponent/page.js` | 생성 | 15:48:21 | 객체 state로 입력 관리, 공통 onChange, login 호출 |
| `app/AppHeader.js` | 수정 | 16:34:16 | 인증 상태에 따른 로그인·로그아웃 버튼, 복원 전 빈 공간 |
| `app/AppMenu.js` | 수정 | 14:33:37 | 새 챕터 메뉴와 링크 추가, 로그인 페이지 직접 메뉴 링크 제거 |
| `app/layout.js` | 수정 | 15:12:48 | Auth·Color Provider 적용, 문서 언어 ko 설정 |

### 실습과 설명의 범위

오늘 파일에서 확인되는 중심 내용은 **생명주기 → 라우팅과 쿼리 문자열 → Context → 로그인 상태 저장·복원**이다.

대화에서는 useRef, useParams, fetch·Axios, JWT와 서버 세션의 차이도 설명했다. 이 내용은 관련 개념을 이해하기 위한 보충 학습이며, 해당 기능을 모두 오늘 구현했다는 의미는 아니다. 기존 Exam09DomRef의 useRef 코드는 읽고 설명했지만 오늘 커밋된 변경 파일은 아니다.

## 1. React Hook

Hook은 함수 컴포넌트에서 상태 등의 React 기능을 사용하는 함수이며, 이름이 `use`로 시작한다.

| Hook | 역할 |
| --- | --- |
| `useState` | 상태를 저장하고 변경한다. 상태 변경은 다시 렌더링하는 계기가 된다. |
| `useEffect` | 렌더링 후 외부 시스템과 동기화하고, 이전 작업을 정리한다. |
| `useRef` | DOM에 접근하거나 렌더링 사이에 값을 보관한다. `current` 변경만으로 다시 렌더링되지 않는다. |
| `useContext` | 상위 Provider에서 제공한 공통 데이터를 사용한다. |

Hook은 함수 컴포넌트 또는 커스텀 Hook의 최상위에서 호출한다. 조건문, 반복문, 이벤트 처리 함수 안에서는 호출하지 않는다.

## 2. 상태 변경과 이벤트 함수

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(prev => prev + 1)}>증가</button>
```

`setCount`에 전달한 함수의 인자는 이전 상태 값이다. 반면 `onClick` 함수의 첫 인자는 클릭 이벤트 객체다.

```jsx
// event는 현재 count가 아니라 이벤트 객체다.
onClick={(event) => console.log(event)}
```

| 코드 | 실행 방식 |
| --- | --- |
| `onClick={handleClick}` | 클릭할 때 실행하며 이벤트 객체를 전달한다. |
| `onClick={handleClick(color)}` | 렌더링 중 즉시 호출하고 반환값을 등록한다. 일반적인 이벤트 등록 방식이 아니다. |
| `onClick={() => handleClick(color)}` | 클릭할 때 함수를 실행하며 `color`를 전달한다. |

## 3. 생명주기와 useEffect

- **마운트:** 컴포넌트가 화면에 처음 나타난다.
- **업데이트:** 상태나 props 등의 변화가 화면에 반영된다.
- **언마운트:** 컴포넌트가 화면에서 제거된다.

| 작성 형태 | Effect 실행 시점 |
| --- | --- |
| `useEffect(작업)` | 마운트 후와 매 업데이트 후 |
| `useEffect(작업, [])` | 마운트 후 |
| `useEffect(작업, [count])` | 마운트 후와 `count` 변경 후 |

```jsx
useEffect(() => {
    const timerId = setInterval(() => {
        setCount(prev => prev + 1);
    }, 1000);

    return () => {
        clearInterval(timerId);
    };
}, []);
```

반환한 함수는 정리 함수다. 언마운트할 때뿐 아니라, 의존성 변경으로 Effect를 다시 실행하기 전에도 실행된다. 개발 모드의 Strict Mode에서는 점검을 위해 실행 → 정리 → 실행 과정이 추가될 수 있다.

단순 초기값은 `useState(0)`처럼 지정한다. 화면에 표시할 파생값을 계산하거나 버튼 클릭을 처리하기 위해 무조건 Effect를 사용할 필요는 없다.

## 4. 입력값과 백엔드 요청

입력값의 state 관리는 오늘 로그인 페이지에서 구현했다. 아래 fetch는 설명용 예시이며 실제 로그인 API는 아직 연결하지 않았다.

```jsx
const [memberId, setMemberId] = useState("");

<input
    value={memberId}
    onChange={(event) => setMemberId(event.target.value)}
/>
```

- `useState`: 입력값에 따라 화면, 검증 메시지, 버튼 활성화 등을 갱신할 때 사용한다.
- `useRef`: 입력창 포커스 등 DOM 조작이나 제출 시점에 값을 읽는 용도로 사용할 수 있다.
- `fetch`, Axios: 백엔드에 데이터를 요청하거나 전송하는 도구다. state/ref 선택과는 별개다.

```jsx
// 버튼의 이벤트 처리 함수 등에서 실행
const response = await fetch("/api/members", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ memberId }),
});

if (!response.ok) {
    throw new Error("요청 실패");
}
```

## 5. Next.js App Router의 페이지 이동

| 방법 | 용도 |
| --- | --- |
| `Link` | 메뉴처럼 단순한 링크 이동 |
| `router.push()` | 버튼 클릭, 검증, API 요청 완료 후 이동 |
| `redirect()` | 렌더링 또는 서버 처리 중 조건에 따른 이동 |

App Router에서는 `useRouter`를 `next/navigation`에서 가져온다. `next/router`는 Pages Router용이다.

```jsx
"use client";

import { useRouter } from "next/navigation";

const router = useRouter(); // 실제로는 함수 컴포넌트 안에서 호출

// 이벤트 처리 함수 안에서 실행
router.push("/Ch05Routing/Exam02QueryString");
```

`redirect()`는 클라이언트의 `onClick` 이벤트 처리 함수에서 직접 사용하는 용도가 아니다. 단순 이동이라면 `Link`를 사용하고, 작업 후 이동이라면 `router.push()`를 사용한다.

## 6. 쿼리 문자열과 동적 경로

오늘 구현한 것은 useSearchParams를 통한 쿼리 전달·조회다. useParams와 동적 경로는 대화에서 비교 설명했다.

| Hook | 읽는 값 | 예시 |
| --- | --- | --- |
| `useParams()` | 동적 경로의 값 | `app/boards/[id]/page.js`에서 `/boards/10`의 `id` |
| `useSearchParams()` | URL의 `?` 뒤 쿼리 문자열 | `/boards?page=2`의 `page` |

```jsx
const queryString = useSearchParams();
const key1 = queryString.get("key1");
const key2 = queryString.get("key2");
```

예를 들어 `?key1=value1&key2=value2`이면 각각 문자열 `"value1"`, `"value2"`를 읽는다. 해당 이름이 없으면 `null`을 반환한다.

URL 값을 표시하기만 한다면 별도 state로 복사하지 않고 직접 읽으면 된다. `useState`의 초기값은 최초 렌더링에만 적용되므로 이후 URL 변경을 자동으로 따라가지 않는다.

값을 보내는 URL은 다음처럼 만들 수 있다.

```jsx
const query = new URLSearchParams({ key1: "value1", key2: "value2" });
router.push(`/Ch05Routing/Exam02QueryString/ComponentA?${query.toString()}`);
```

## 7. Suspense

하위 컴포넌트가 렌더링에 필요한 준비를 기다릴 때 `fallback` 화면을 표시한다.

```jsx
export default function ComponentA() {
    return (
        <Suspense fallback={<p>불러오는 중...</p>}>
            <ComponentAContent />
        </Suspense>
    );
}

function ComponentAContent() {
    const queryString = useSearchParams();
    return <p>{queryString.get("key1")}</p>;
}
```

현재 프로젝트에서는 사전 렌더링 시 URL 값을 기다릴 수 있도록 `useSearchParams()`를 사용하는 컴포넌트 위에 Suspense를 배치했다. 같은 함수에서 Hook을 먼저 호출한 뒤 반환 JSX만 감싸는 것으로는 해결되지 않는다.

일반적인 `useEffect` 안의 `fetch`를 Suspense가 자동으로 감지하는 것은 아니다.

## 8. Context로 전역 상태 공유

Provider가 공통 상태를 제공하고 하위 컴포넌트가 `useContext`로 사용한다.

```jsx
const colorContext = useContext(ColorContext);

// 공유된 값 읽기
console.log(colorContext.color);

// 공유된 값 변경
colorContext.setColor("orange");
```

- `ColorContext`: 여러 컴포넌트에서 색상 공유
- `AuthContext`: `memberId`, `jwt`와 로그인·로그아웃 함수 공유
- `layout.js`: Provider로 헤더와 페이지 등을 감싸 공통 상태 제공

Context 자체는 영구 저장소가 아니다. `useState`로 만든 상태는 새로고침하면 초기화된다.

## 9. Tailwind className으로 색상 적용

Tailwind가 빌드 시 클래스를 찾을 수 있도록 완성된 클래스 문자열을 작성한다.

```jsx
const colorClasses = {
    red: "bg-[red] text-black",
    blue: "bg-[blue] text-white",
    black: "bg-black text-white",
};

<div className={`rounded p-4 ${colorClasses[colorContext.color] ?? colorClasses.black}`}>
    경고: 내용을 확인해 주세요.
</div>
```

`bg-${colorContext.color}-100`처럼 실행 중 조합되는 이름은 Tailwind가 자동으로 인식하지 못할 수 있다.

## 10. 로그인 유지와 localStorage

| 시점 | 현재 구현의 처리 |
| --- | --- |
| 로그인 | `login()`에서 전역 상태와 localStorage에 `memberId`, `jwt` 저장 |
| 앱 시작 | `AuthContextProvider`의 `useEffect`에서 저장된 값 복원 |
| 로그아웃 | `logout()`에서 전역 상태 초기화 및 localStorage 값 삭제 |

```jsx
localStorage.setItem("memberId", memberId);
localStorage.getItem("memberId");
localStorage.removeItem("memberId");
```

`localStorage`는 브라우저 종료 후에도 일반적으로 유지된다. `sessionStorage`는 새로고침에는 유지되지만 탭 세션이 종료되면 일반적으로 삭제된다.

### 새로고침 시 버튼이 바뀌는 이유

1. 초기 `memberId`는 빈 문자열이다.
2. 첫 렌더링에서는 로그인 상태를 아직 복원하지 못했다.
3. `useEffect`가 저장소 값을 읽어 전역 상태를 변경한다.
4. 헤더가 다시 렌더링되어 로그아웃 버튼을 표시한다.

이를 구분하기 위해 `isInitialized` 상태를 사용했다. 저장된 로그인 정보가 없어도 복원 확인이 끝나면 `true`로 설정해야 한다.

복원 전에는 빈 공간이나 로딩 표시를 보여준다. 빈 공간을 사용하면 버튼이 나중에 나타나며, 처음부터 정확한 인증 상태를 서버에서 표시하려면 서버가 읽을 수 있는 쿠키 등의 인증 설계가 필요하다.

## 11. localStorage, JWT, 서버 세션

아래는 대화에서 다룬 개념 정리다. 현재 예제에서 실제 JWT 발급·검증이나 서버 세션 인증을 구현한 것은 아니다.

| 구분 | 의미 |
| --- | --- |
| localStorage | 브라우저의 저장 장소 |
| JWT | 서버가 발급하는 서명된 토큰 형식 |
| 서버 세션 | 서버가 로그인 사용자 정보를 관리하는 방식 |
| AuthContext | React 화면에서 사용할 인증 정보를 공유하는 수단 |

JWT를 localStorage에 저장할 수 있으므로 둘은 대체 관계가 아니다.

- **JWT 방식:** 로그인 응답으로 토큰을 받고 이후 요청의 `Authorization: Bearer ...` 헤더 등에 첨부한다. 서버가 토큰을 검증한다.
- **세션 방식:** 브라우저가 세션 ID 쿠키를 보내고 서버가 세션을 조회한다. React는 세션 자체가 아니라 API가 반환한 사용자 정보를 받는다.
- 쿠키 인증의 다른 출처 요청에서는 `fetch`의 `credentials: "include"`와 서버 CORS·쿠키 설정이 필요하다.
- Context나 localStorage의 `memberId`만으로 실제 인증 여부를 판단할 수는 없다. 백엔드에서 검증해야 한다.
- 현재 예제의 `"xxx.xxxx.xxxxx"`는 실제 JWT가 아닌 연습용 값이다.

## 12. null 병합 연산자 ??

왼쪽 값이 `null` 또는 `undefined`일 때 오른쪽 값을 사용한다.

```jsx
<p>key1: {key1 ?? "전달된 값 없음"}</p>
```

```js
null ?? "기본값";      // "기본값"
undefined ?? "기본값"; // "기본값"
0 ?? "기본값";         // 0
false ?? "기본값";     // false
"" ?? "기본값";        // ""
```

`||`와 달리 `0`, `false`, 빈 문자열을 기본값으로 바꾸지 않는다.

## 13. 대화에서 해결한 오류와 배운 점

| 문제·질문 | 원인 또는 해결 방법 |
| --- | --- |
| count를 더하려는데 object가 나옴 | onClick의 첫 인자는 이벤트 객체다. `setCount(prev => prev + 1)`로 이전 상태를 받는다. |
| `onClick={handleClick(color)}`가 왜 안 되는가 | 렌더링 중 즉시 호출된다. 클릭 시 인자를 전달하려면 `() => handleClick(color)`를 넘긴다. |
| Router 사용 후 렌더링 실패·instant 검증 오류 | 당시 next/router import를 확인해 App Router용 next/navigation으로 수정했다. |
| useSearchParams가 Suspense 밖에 있다는 오류 | Hook을 호출하는 자식 컴포넌트를 분리하고 상위에서 Suspense로 감쌌다. |
| 쿼리 값을 state에 넣었는데 갱신되지 않음 | state 초기값은 처음에만 적용된다. 표시용 값은 useSearchParams에서 직접 읽도록 수정했다. |
| 쿼리 값이 전달되지 않음 | URL에 실제 `?key1=...&key2=...`가 있어야 한다. 메뉴의 ComponentA 링크에는 쿼리가 없다. |
| 비로그인 상태에서 로그인 버튼이 동작하지 않음 | 이동 코드가 로그인 상태 조건 안에만 있었다. 공통 이동 처리를 조건 밖에 배치했다. |
| 새로고침 후 로그인에서 로그아웃으로 문구가 바뀜 | 초기 상태는 빈 문자열이고 Effect 복원은 이후 실행된다. isInitialized로 복원 완료를 구분했다. |

## 14. 현재 구현의 한계와 다음 확인 사항

- 헤더는 복원 전 빈 공간을 표시한다. 잘못된 로그인 문구는 숨기지만 버튼이 나중에 나타나는 현상은 남아 있다. 로딩 버튼은 설명한 대안이며 현재 적용된 코드는 아니다.
- `Exam02AuthContext/page.js`의 버튼에는 헤더와 달리 isInitialized 표시 조건이 없다.
- 로그인 버튼은 입력한 memberId와 예시 JWT를 저장한다. 서버에서 비밀번호나 토큰을 검증하는 실제 인증 과정은 없다.
- 로그인 화면의 취소 버튼은 현재 form 밖의 reset 버튼이고, 객체 state를 초기화하는 함수도 없다. 현재 코드 기준으로 입력값 초기화 동작은 추가 구현이 필요하다.
- 복원 시 memberId와 jwt가 모두 있을 때만 전역 상태에 반영한다. 저장된 정보가 없어도 isInitialized는 true가 돼야 한다.
- localStorage에서 값을 읽는 것은 인증 검증이 아니다. 실제 백엔드 연동 시 사용자 조회 API와 토큰 만료 처리 등을 구분해야 한다.

이번 문서 갱신에서는 Git 이력과 소스를 확인했다. 앱을 실행해 브라우저 동작을 새로 검증한 것은 아니다.
