n=int(input())
arr=list(map(int, input().split()))
k=int(input())

def rec (n, arr, k):
    if n==0:
        return 0
    count = rec(n-1,arr,k)
    if arr[n-1]<k:
        return count+1
    else:
        return count
    
print(rec(n,arr,k)+1)
        
