#파이썬은 문자열에도 비교연사자 적용가능 비교는 사전순서로

import datetime #날짜/시간과 관련된 기능을 가져옵니다.
now = datetime.datetime.now() #현재 날짜/시간을 구합니다.

if now.hour<12: # if문에 :가 들어감
    print("현재 시간은 {}시로 오전입니다".format(now.hour))
if now.hour>12:
    print("현재 시간은 {}시로 오후입니다".format(now.hour))
    
    
# if last_character in "02468": print("짝수입니다") in을 이용하요 짝수 구분
# if number % 2 == 0 나머지 연산자를 이용하여 짝수 구분
# or연산자는 양쪽 피연사자가 불 자료형으로 들어올 것이라고 가정한다

# if elif elif else 마지막에만 else구문
# False로 반환되는 값은 None, 숫자 0과0.0, 빈컨테이너(빈 문자열, 빈 바이트열, 빈 리시트, 빈 튜플, 빈 딕셔너리)
#pass를 발견하면 '곧 개발하겠다'는 의미
#raise NotImplementedError는 아직 구현하지 않은 부분이에요라는 뜻으로 강제로 오류를 발생시킨