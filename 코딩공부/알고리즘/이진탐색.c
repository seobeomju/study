#include<stdio.h>

int binarySearch(int data[],int target,int begin,int end){
    if(begin>end)
        return -1;
    else{
        int middle=(begin+end)/2;
        if(data[middle]==target)
            return middle;
        else if (data[middle]>target)
            return binarySearch(data,target,begin,middle-1);
        else
            return binarySearch(data,target,middle+1,end);
    }
}
int main(){
    int arr[9]=[1,2,3,4,5,6,7,8,9];
    int target=4;
    binarySearch(arr,target,0,9);

}