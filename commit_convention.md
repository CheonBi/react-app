# [프로젝트 명] 
## Conventional Commits 스타일 가이드

## 소개

Conventional Commits는 커밋 메시지를 일관되고 명확하게 작성하기 위한 표준 스타일입니다.  
이 규칙을 따르면 프로젝트 변경 사항의 히스토리를 더 쉽게 이해하고, 효율적으로 관리할 수 있습니다.  
본 가이드는 프로젝트에 적용될 커밋 메시지 작성 규칙과 예제를 포함합니다.


## 커밋 메시지 기본 구조
```text
<type>(<scope>) : <subject>

type: 커밋의 목적을 나타냅니다. (필수)
scope: 변경된 기능, 모듈, 파일 등의 범위를 지정합니다. (선택)
subject: 변경 내용을 간략히 설명합니다. (필수)
```

## 주요 규칙
```text
type: 소문자로 작성합니다.  

scope: 선택 사항이며, 괄호로 감싸서 작성합니다. 
예: (auth) 또는 (header)    

subject: 
(한국어 Ver)
변경된 내용을 간결하고 명확하게 요약
50자 이내로 간결하게 작성합니다.

(English Ver)
첫 글자는 소문자로 시작합니다.
명령문(동사 원형)으로 작성하며 마침표(.)는 생략합니다.
```


## Types
| Type      | 설명                                                               |
|-----------|------------------------------------------------------------------- |
| **feat**  | 새로운 기능 추가                                                    |
| **fix**   | 버그 수정                                                           |
| **docs**  | 문서 작성 또는 변경                                                 |
| **style** | 코드 포맷팅, 세미콜론 추가 등 동작에 영향을 주지 않는 변경          |
| **refactor** | 리팩토링 (기능 변경 없이 코드 구조 개선)                          |
| **test**  | 테스트 코드 추가 또는 수정                                          |
| **chore** | 빌드 및 설정 파일 수정 등 기타 작업                                 |
| **perf**  | 성능 개선 작업                                                     |
| **ci**    | CI 설정 변경                                                       |
| **build** | 빌드 관련 설정 및 변경 사항    |
| **revert** | 이전 커밋 되돌리기                                                 |

## 작성 예시

### 새로운 기능 추가 (feat)
```text
feat(auth): add login functionality

- 사용자가 이메일과 비밀번호로 로그인할 수 있는 기능 추가
- JWT를 사용한 인증 토큰 발급 기능 구현
```

### 버그 수정(fix)
```text
fix(payment): correct rounding error in discount calculation

- 결제 시 할인율 소수점 처리 오류 수정
- 기존 로직에서 발생한 정수 변환 문제 해결
```

### 코드 스타일 변경(style)
```text
docs(readme): add API usage examples

- 주요 API 사용법 예제 추가
- 사용자의 이해를 돕기 위한 설명 문구 추가
```

### 리팩토링(refactor)
```text
refactor(user-service): optimize data fetching logic

- 반복적인 코드 제거
- 캐싱 로직 추가로 성능 최적화
```

### 테스트 추가(test)
```text
test(cart): add unit tests for checkout functionality

- 체크아웃 로직에 대한 단위 테스트 추가
- 할인 로직 및 예외 처리 테스트 포함
```

### 기타 작업 (chore)
```text
chore(deps): update dependency versions

- vue 버전 업데이트: 3.2.0 -> 3.3.0
- eslint 플러그인 최신 버전 적용
```