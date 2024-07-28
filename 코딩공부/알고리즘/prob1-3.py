N=int(input())
board=[]
for i in range(N):
    row = list(map(int, input().split()))
    board.append(row)

def count_path(board,n,k x,y,visited)