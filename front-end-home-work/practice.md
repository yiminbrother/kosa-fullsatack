앞서 배운 내용을 직접 구현하는 5문제예요. IDE에 보이는 프로젝트 이름은 front-end-home-work이므로, 그 프로젝트의 app 아래에서 진행하면 됩니다.
각 페이지는 Exam01Counter/page.js처럼 폴더를 만들어 작성하세요. 정답 코드는 제외하고 요구사항과 힌트만 줄게요.
1. 숫자 카운터 — Exam01Counter
초기값이 0인 카운터를 구현하세요.
- 현재 숫자를 화면에 표시하세요.
- +1, -1, 초기화 버튼을 만드세요.
- +4 버튼에서는 상태 변경 함수를 두 번 호출하세요. 첫 번째는 +1, 두 번째는 +3을 처리해야 합니다.
- +4를 한 번 누르면 실제로 4가 증가해야 해요.
힌트: 이전 상태를 기준으로 계산할 때는 업데이트 함수를 전달하세요.

2. 객체 상태 관리 — Exam02ObjectState
다음 객체를 초기 상태로 사용하세요.
{ number: 0, color: "red" }
- 숫자를 현재 color 색상으로 표시하세요.
- 숫자 증가 버튼은 number만 1 증가시키세요.
- 색상 변경 버튼은 빨강과 파랑을 번갈아 적용하세요.
- 숫자를 변경해도 색상이 유지되고, 색상을 변경해도 숫자가 유지되어야 해요.
힌트: 객체 전체를 교체하므로 기존 속성을 복사해야 합니다.


3. 회원 정보 입력 — Exam03FormState
이름과 이메일 입력창을 구현하세요.
- 초기값은 모두 빈 문자열로 설정하세요.
- 두 입력값을 하나의 객체 state로 관리하세요.
- 두 입력창에서 하나의 handleChange 함수를 공유하세요.
- 이메일에는 이메일 형식 검사와 자동완성을 적용하세요.
- 이름과 이메일을 필수 입력으로 설정하세요.
- 입력창 아래에 현재 입력값을 실시간으로 표시하세요.
힌트: event.target의 name, value와 [name]을 활용하세요.

4. 제출 결과 표시 — Exam04SubmitForm
3번을 참고해서 제출했을 때만 결과가 표시되는 폼을 만드세요.
- 이름과 이메일을 입력하고 제출 버튼을 누르면 결과를 표시하세요.
- 제출해도 페이지가 새로고침되지 않아야 해요.
- 제출 후 입력창을 수정하더라도 이미 제출한 결과는 그대로 유지되어야 해요.
- 다시 제출하면 새로운 결과로 바꾸세요.
- 초기화 버튼을 누르면 입력값과 제출 결과를 모두 지우세요.
힌트: 현재 입력 상태와 제출한 결과를 별도로 관리하세요. event.preventDefault()도 필요합니다.

5. 부모와 자식의 이미지 공유 — Exam05StateToProp
다음 두 파일을 만드세요.
Exam05StateToProp/
├── page.js
└── ChildComponent.js
이미지 두 개를 작업 프로젝트의 public/images에 준비하세요.
- 부모에서 이미지 파일명을 state로 관리하세요.
- 부모 화면에 현재 파일명을 표시하세요.
- 자식에게 파일명과 이미지 변경 함수를 props로 전달하세요.
- 자식은 이미지와 이미지 변경 버튼을 표시하세요.
- 자식 버튼을 누르면 두 이미지가 번갈아 표시되어야 해요.
- 부모의 파일명 표시도 함께 바뀌어야 해요.
- 자식에는 useState를 사용하지 마세요.
힌트: 상태는 부모가 소유하고, 자식은 전달받은 함수를 호출합니다.
한 문제씩 구현하고 알려주면, 작성한 코드를 확인해서 동작과 개선할 부분을 짚어줄게요.

---

# 2026-11-04 복습 문제 — 생명주기·라우팅·전역 상태

학습 범위: [summary.md](./summary.md). 아래 문제는 기존 실습과 별개인 총 20문제이며 정답은 포함하지 않습니다.

| 문제 유형 | 문제 수 | 목표 정답률 | 목표 정답 수 |
| --- | ---: | ---: | ---: |
| 기초 개념 확인 | 5문제 | 100% | 5/5 |
| 개념 이해 | 5문제 | 80% 이상 | 4/5 이상 |
| 응용 문제 | 5문제 | 80% 이상 | 4/5 이상 |
| 심화 문제 | 5문제 | 60% 이상 | 3/5 이상 |

각 문제는 1점으로 계산합니다. 여러 요구사항이 있는 문제는 모두 충족하면 정답으로 처리합니다. 코드 문제는 필요한 import와 컴포넌트 구조를 포함하거나, 어느 함수 안에 추가하는 코드인지 명시하세요. Effect 실행 순서는 별도 언급이 없으면 Strict Mode의 추가 실행을 제외합니다.

## A. 기초 개념 확인 — 5문제

### 1. Hook의 역할 연결하기

다음 네 Hook을 알맞은 설명과 연결하세요.

- Hook: `useState`, `useEffect`, `useRef`, `useContext` 
- 가: 상위 Provider에서 제공하는 공통 데이터를 읽는다.
- 나: DOM에 접근하거나, 값 변경 자체로 렌더링을 발생시키지 않는 값을 보관한다.
- 다: 상태를 저장하고 변경하여 화면에 반영한다.
- 라: 렌더링 후 외부 작업을 수행하고 정리한다.

답:다 

### 2. 생명주기 이름 쓰기

아래 상황에 해당하는 용어를 각각 쓰세요.

1. 조건부 렌더링으로 Timer가 처음 화면에 나타났다.
2. Timer의 seconds 상태가 변경되어 화면이 갱신됐다.
3. 숨기기 버튼을 눌러 Timer가 화면에서 제거됐다.

답:마운트,업데이트,언마운트

### 3. App Router의 import 경로

`app` 폴더의 클라이언트 컴포넌트에서 사용할 useRouter의 올바른 import를 고르세요.

① `import { useRouter } from "react";`

② `import { useRouter } from "next/router";`

③ `import { useRouter } from "next/navigation";`

④ `import useRouter from "next/link";`

답:3

### 4. URL에 맞는 Hook 선택하기

각 값을 읽는 데 적합한 Hook을 `useParams`, `useSearchParams` 중에서 선택하세요.

1. `app/boards/[id]/page.js`에서 `/boards/15`의 `15`
2. `/boards?page=3&keyword=react`의 `keyword`

답:useParams, useSearchParams

### 5. null 병합 연산자 결과

각 식의 결과를 쓰세요. 빈 문자열은 `""`로 표시하세요.

```js
null ?? "없음"
undefined ?? "없음"
0 ?? "없음"
false ?? "없음"
"" ?? "없음"
``` "없음", "없음", 0, "없음", ""

답: "없음","없음",0,false,""

## B. 개념 이해 — 5문제

### 6. 이벤트 객체와 이전 상태 구분하기

다음 코드에서 `currentCount`는 무엇인가요? 숫자를 증가시키려던 의도대로 동작하지 않는 이유를 설명하고, 이전 상태를 이용한 올바른 코드로 고치세요.

```jsx
<button onClick={(currentCount) => setCount(currentCount + 1)}>
    증가
</button>
```

답: 상태변화 변수아니야? 근데 왜 (currentCount)가 들어갔지 이해가 안되네 ()=>setCount(currentCount+1)이 맞는데

### 7. 함수 전달과 즉시 호출 구분하기

`handleClick`은 색상을 받아 Context 상태를 변경하고 아무 값도 반환하지 않는 함수입니다.

```jsx
onClick={handleClick}
onClick={handleClick(color)}
onClick={() => handleClick(color)}
```

각 코드의 실행 시점과 전달되는 인자를 설명하세요. 클릭할 때 지정한 color를 전달하려면 어느 것을 선택해야 하나요?

답:
onClick={handleClick} 클릭시 
onClick={handleClick(color)} 마운트시 바로실행
onClick={() => handleClick(color)} 클릭시 실행 3번방법으로 해야해 

### 8. Effect 실행·정리 순서 추론하기

```jsx
useEffect(() => {
    console.log("시작", count);
    return () => console.log("정리", count);
}, [count]);
```

count가 0인 상태로 마운트된 뒤, count를 1로 변경하고, Effect가 실행된 다음 컴포넌트를 언마운트했습니다. 출력 순서와 각 숫자를 쓰세요. 업데이트 중 정리 함수가 실행되는 것을 언마운트라고 단정할 수 있는지도 설명하세요.

답: 언마운트때 실행되는게 이해가 안되는데 2번째인자에 들어간경우는 업데이트후 마운트된후아닌가?

### 9. 페이지 이동 도구 선택하기

다음 상황마다 Link, router.push, redirect 중 적합한 방법을 고르고 이유를 한 문장씩 쓰세요.

1. 게시판 메뉴를 눌러 목록으로 이동한다.
2. 클라이언트의 저장 버튼에서 API 요청이 성공한 다음 목록으로 이동한다.
3. 서버 컴포넌트가 로그인 여부를 확인하고 비로그인 사용자를 로그인 페이지로 보낸다.

답: link, router.push, redirect

### 10. 저장소·토큰·세션 구분하기

“localStorage를 쓰고 있으니 JWT 인증도 구현됐고, 백엔드는 memberId가 있는지만 확인하면 된다”는 설명의 문제점을 쓰세요. localStorage, JWT, 서버 세션의 역할을 각각 구분해서 답하세요.

답: localStrorage에는 브라우저에 데이터를 저장하는하는거지 jwt인증이 구현됐다고 보기힘들어 , jwt는 인증이나 권한검사를 할때 필요하고 서버세션은 로그인에대한 여부를 파악하는데 쓰여 

## C. 응용 문제 — 5문제

### 11. 쿼리 문자열 전송하기

클라이언트 페이지에 key1은 `"hello world"`, key2는 `"빨강&파랑"`이라는 문자열 값이 있습니다. 버튼을 클릭하면 아래 경로로 두 값을 전달하는 컴포넌트를 작성하세요.

```text
/Ch05Routing/Exam02QueryString/ComponentA
```

요구사항: App Router용 useRouter, URLSearchParams를 사용하고, 렌더링 중 자동 이동하지 않아야 합니다.

답:C:\gen-ai-course\projects\kosa-fullsatack\front-end-home-work\app\day02\Exam01 참고

### 12. 쿼리 문자열 수신과 Suspense

ComponentA 페이지를 작성하세요.

- 하위 컴포넌트에서 useSearchParams로 key1, key2를 읽습니다.
- 해당 컴포넌트 위에 Suspense와 로딩 문구를 배치합니다.
- 파라미터가 없으면 `전달된 값 없음`을 표시합니다.
- URL에서 읽은 값을 별도 state에 복사하지 않습니다.

답: C:\gen-ai-course\projects\kosa-fullsatack\front-end-home-work\app\day02\Exam01 참고

### 13. ColorContext로 두 컴포넌트 연결하기

ColorContextProvider가 `color`, `setColor`를 제공한다고 가정합니다. UIComponentA, UIComponentB와 이들을 배치하는 부모의 핵심 코드를 작성하세요.

- A에는 빨강·파랑 버튼이 있고 클릭하면 공통 색상을 변경합니다.
- B에는 선택한 색상의 경고 박스가 표시됩니다.
- B의 색상은 style 대신 className으로 적용합니다.
- Tailwind가 찾을 수 있는 완성된 클래스 문자열을 색상별로 준비합니다.
- 두 컴포넌트가 같은 Provider 아래에 있어야 합니다.

답: app\day02\Exam02 참고 

### 14. 로그인 입력값 변경과 취소

초기값이 `{ memberId: "", password: "" }`인 객체 state로 로그인 입력창을 작성하세요.

- 두 input은 value와 onChange로 state에 연결합니다.
- 하나의 handleChange에서 name, value와 동적 속성 이름을 사용합니다.
- 한 필드를 수정해도 다른 필드는 유지합니다.
- 취소 버튼은 명시적으로 state를 초기화하여 두 입력값을 지웁니다.

답:

### 15. 인증 정보 저장·복원·삭제

AuthContextProvider의 핵심 코드를 작성하세요.

- login(memberId, jwt)은 전역 상태와 localStorage에 두 값을 저장합니다.
- 앱 시작 시 useEffect에서 두 값을 읽고, 둘 다 있을 때 상태를 복원합니다.
- logout()은 상태를 초기화하고 localStorage에서도 두 항목을 삭제합니다.
- 로그인 정보가 없어도 복원 확인이 끝나면 isInitialized를 true로 설정합니다.
- Provider는 memberId, jwt, login, logout, isInitialized를 제공합니다.

답:

## D. 심화 문제 — 5문제

### 16. 헤더의 깜빡임과 초기화 조건 분석하기

다음과 같이 구현되어 있습니다.

```jsx
// Provider의 초기 상태는 모두 빈 문자열이다.
useEffect(() => {
    const savedMemberId = localStorage.getItem("memberId");
    const savedJwt = localStorage.getItem("jwt");

    if (savedMemberId && savedJwt) {
        setMemberId(savedMemberId);
        setJwt(savedJwt);
        setIsInitialized(true);
    }
}, []);
```

AppHeader는 isInitialized가 false면 빈 공간을, true면 로그인 여부에 따른 버튼을 표시합니다.

1. 저장된 정보가 없는 사용자의 버튼이 계속 나타나지 않는 이유를 설명하고 수정할 위치를 쓰세요.
2. 로그인 정보가 있는 사용자가 새로고침했을 때 빈 공간 뒤에 로그아웃 버튼이 나타나는 이유를 설명하세요.
3. 서버가 localStorage를 읽을 수 없는 상황에서 첫 화면부터 정확한 버튼을 표시한다고 보장할 수 있나요? 현재 구조의 대안과 서버 측 인증을 이용하는 방향을 각각 설명하세요.

답:

### 17. 타이머 정리와 재마운트 분석하기

```jsx
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    }, []);

    return <p>{seconds}</p>;
}
```

부모가 `{visible && <Timer />}`로 Timer를 보이거나 숨깁니다. 타이머를 시작한 뒤 숨겼다가 다시 보이게 할 때, 기존 코드의 문제와 새로 마운트된 Timer의 초기 숫자를 설명하세요. 이어서 정리 함수를 포함한 Effect로 수정하세요.

답:

### 18. 쿼리 값이 오래된 상태로 남는 문제

```jsx
const queryString = useSearchParams();
const [keys] = useState({
    key1: queryString.get("key1"),
});

return <p>{keys.key1}</p>;
```

컴포넌트가 언마운트되지 않은 채 URL의 key1이 `apple`에서 `banana`로 변경됐다고 가정합니다.

1. 위 코드에 계속 apple이 표시될 수 있는 이유를 설명하세요.
2. 값 조회만 필요한 화면에 맞게 고치세요.
3. 사용자가 별도로 수정 중인 입력값이라면 왜 state가 필요할 수 있는지 설명하세요.

답:

### 19. JWT 방식과 세션 방식의 요청 설계

백엔드에 `/login`과 `/members/me` API가 있다고 가정합니다. 아래 두 방식의 요청 흐름을 각각 설계하세요. 실제 서버 구현 코드는 필요하지 않습니다.

- JWT 방식: 로그인 응답 본문에 memberId, jwt가 옵니다. 로그인 응답 확인 후 Context에 저장하는 과정과 `/members/me`에 JWT를 보내는 핵심 요청 코드를 작성하세요.
- 세션 방식: 서버가 로그인 응답에서 세션 ID 쿠키를 설정합니다. 서로 다른 출처의 백엔드로 사용자 조회를 요청하는 핵심 fetch 코드를 쓰고, 서버 CORS·쿠키 설정도 맞아야 하는 이유를 설명하세요.
- React가 서버 세션 객체 자체를 가져오는 것인지, 사용자 조회 응답을 받는 것인지 구분하세요.

답:

### 20. 통합 흐름 설명과 검증 계획

현재 실습처럼 AuthContextProvider가 앱 전체를 감싸고 login·logout·localStorage 복원 기능을 제공한다고 가정합니다. 다음 순서에서 전역 상태, 저장소, 헤더 표시, 페이지 이동이 어떻게 바뀌는지 표로 정리하세요.

1. 저장된 정보 없이 앱을 처음 실행한다.
2. 헤더의 로그인 버튼으로 이동해 로그인한다.
3. 다른 페이지로 이동한다.
4. 브라우저를 새로고침한다.
5. 로그아웃한 뒤 다시 새로고침한다.

추가로 “전역 상태만 초기화하고 localStorage를 삭제하지 않는 로그아웃”이라면 5번에서 어떤 문제가 생기는지 설명하세요. 이 흐름을 직접 확인할 수 있는 검증 항목도 세 가지 작성하세요.

답:

## 풀이 후 기록

| 유형 | 맞힌 문제 수 | 정답률 | 목표 달성 |
| --- | --- | --- | --- |
| 기초 개념 확인 | /5 | % | |
| 개념 이해 | /5 | % | |
| 응용 문제 | /5 | % | |
| 심화 문제 | /5 | % | |

- 다시 확인할 개념:
- 틀린 이유:
- 재풀이할 문제 번호:
