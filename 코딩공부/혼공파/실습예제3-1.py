import datetime
now=datetime.datetime.now()
question=input("입력: ")

if "안녕" in question :
    print("안녕하세요")
elif "지금 몇 시" in question:
    print("지금은 {}시 입니다.".format(now.hour))
else:
    print(question)