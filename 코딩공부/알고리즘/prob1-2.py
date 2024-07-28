N=int(input())
arr=list(map(int, input().strip()))
k=int(input())

def nearest(start,end):
    if start>=end:
        return arr[start]
    
    mid = (start+end)//2
    if abs(k-arr[mid]) <= abs(k-arr[mid+1]):
        return nearest(start,mid)
    else:
        return nearest(mid+1,end)
    
    
print(nearest(0,N-1))
    
    