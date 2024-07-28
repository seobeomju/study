#------list는 인덱스를 기반으로 값을 저장 변수 =[]

# list_a[1:3]은 1번째 글자부터 2번째까지
# 대괄호 안에 음수를 넣으면 뒤에서부터 선택
# list_a[3][0]은 3번째 글자를 가져와 첫번째를 선택한다 ex) list_a[3] = '문자열' -->list_a[3][0]='문'

# ---------------리스트에 추가
# 리스트명.append(요소) 리스트 뒤에 요소를 추가
# 리스트명.insert(위치, 요소) 정해진 위치에 요소를 추가
# 리스트명.extend([요소]) 한 번에 여러 요소를 추가할 수 있다

# --------------리스트에서 삭제
# del 리스트명[인덱스] 특정 인덱스에 있는 요소를 제거
# 리스트명.pop(인덱스) 제거할 위치에 있는 요소를 제거 입력 x--> -1이 들어가서 맨 마지막이 삭제
# del 리스트명[3:6] 3,4,5번째 인덱스 삭제
# *****리스트 인덱스[시작:끝:단계]  리스트 슬라이싱
numbers=[1,2,3,4,5,6,7,8,]
numbers[0:5:2] #0번째부터 4번째까지 2칸씩띄어서  출력--> 1,3,5
numbers[::-1] #역으로 출력 *중요*
# 리스트.remove(값) 값으로 삭제 동일한 값이 있으면 맨 앞이 삭제 다 삭제할려면 반복문 사용
# 리스트.clear() 내부요소를 모두 제거
# 리스트.sort() 오름차슴으로 정렬 sort(reverse=Ture)은 내림차순으로 정렬
# 값 in list는 값이 리스트 않에 있는지 확인  not in은 in과 반대로 행동
for i in range(100):
    print("출력") # "출력"을 100번 반복
    
list_of_list=[[1,2,3],[4,5,6,7],[8,9]]

for items in list_of_list:
    for item in items:
        print(item) #1 2 3 4 5 6 7 8 9 로 출력

#전개연산자 *을 붙임
a=[1,2,3,4]
b=[*a,6,7]#b=[1,2,3,4,6,7]

#----------딕셔너리는 키를 기반으로 값을 저장 변수 = {}
# 변수 = {키:값, 키:값,} 형태로 저장 키값에 " "빠지면 안됨
dict_a = {
    "name": "어벤져스 엔드게임",
    "type": "히어로 무비",
    "ingredient": ["망고","설탕","메타중아황산나트륨"] #딕셔너리 키이지만 여러개의 자료를 가지고있는 키이기도 하다
}
print(dict_a)
dict_a["name"] # "어벤져스 엔드게임"출력
dict_a["ingredient"][1] #"설탕"
# 딕셔너리[새로운 키]=새로운 값 새로운 값 추가, 이미 있는 키면 값을 변경
# del 딕셔너리[키] 특정 키를 제거
key=input("접근하고자 하는 키: ")
if key in dict_a: # in을 사용하여 존재하는지 찾음
    print(dict_a[key])
else:
    print("찾고자 하는 키 값이 없습니다")

# get함수를 사용하면 존재하지 않는 키에대한 접근에 KeyError를 발생시키지 않고 None을 출력
for key in dict_a:
    print(key," : ", dict_a[key])
    
# 정수로 이루어진 범위를 만들 때는 range()함수를 사용
#range(A) 0부터 A-1까지의 정수로 범위를 만든다
#range(A,B) A부터 B-1까지의 정수로 범위를 만든다
#range(A,B,C) A부터 B-1까지의 정수로 버무이를 만드는데 앞 뒤의 숫자가 C만큼의 차이를 가진다
# range(0,n//2) 정수 나누기 연산자를 사용
# for 숫자변수 in  범위: 코드 
array =[273,32,103,57,52]
for i in range(len(array)):
    print("{}번째 반복:{}".format(i,array[i])) 

for i in range(4,-1,-1): #역반복문
    print("현재 반복 변수:{}".format(i))

for i in reversed(range(5)): # reversed 사용
    print("현재 반복 변수:", i)
    
# while 불 표현식:  문장  while반복문
k=0
while k<10:
    print("{}번째 반복입니다.".format(k))
    k+=1
#상태를 기반으로 반복하기
list_test=[1,2,1,2]
value=2
while value in list_test:
    list_test.remove(value)
print(list_test)
#시간을 기반으로 반복
import time

number=0

target_tick=time.time()+5
while time.time()<target_tick:
    number+=1
print("5초 동안 {}번 반복했습니다".format(number))
#break를 사용하면 반복문을 벗어나고 continue를 사용하면 다음 반복으로 넘어간다