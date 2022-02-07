#include <bits/stdc++.h>
using namespace std;
#define ll long long  int
ll v1[200002];
ll v2[200002];
ll temp1=0;
ll temp2=0;
void check1(ll x,ll y);

void check2(ll x,ll y);

int main()
{
    ll t;
    cin >> t;
    while(t--){
        temp1=0;
        temp2=0;
        
        ll sum1 = 0;
        ll sum2 = 0;
        
        ll n;
        cin >> n;
        ll a[n];
        ll arr2[n];
        
        ll Y1=0,Y=2;
        ll y1=0,y=0;
        
        ll oddcount =0;
        for(ll i=0; i<n ;i++){
            cin>>a[i];
            arr2[i]=a[i];
        }
      
if(a[0]%2==0)
{
    if(a[1]%2==0){
         
         for(ll i=2;i<n;i++){
             if(a[i]%2==1){
                 Y1=a[i];
                 y1=i;
                 oddcount = 1;
                 
                 a[1] = a[1]^Y1;
                 sum1++;
                 check1(1,y1);
                 break;
             }
         }
         
    }
    else{
        Y1=a[1];
        y1=1;
        oddcount = 1;
    }
      Y=a[1];
      y=1;
      for(ll i =2;i<n;i++){
          if(a[i]%2==1){
              a[i]=a[i]^Y;
              sum1++;
              check1(i,y);
          }
          i++;
          if(i<n){
              if(a[i]%2==0){
                  a[i]=a[i]^Y;
              sum1++;
              check1(i,y);
              }
          }
      }
      arr2[0]=arr2[0]^Y1;
      sum2++;
      check2(0,y1);
      
      Y=arr2[0];
      y=0;
      
      for(ll i=1;i<n;i++){
          if(arr2[i]%2==1){
              arr2[i]=arr2[i]^Y;
              sum2++;
              check2(i,y);
          }
          i++;
          if(i<n){
              if(arr2[i]%2==0){
                  arr2[i]=arr2[i]^Y;
                  sum2++;
                  check2(i,y);
              }
          }
      } 
}
else{
    oddcount = 1;
    Y=arr2[0];
    y=0;
    for(ll i=1;i<n;i++){
        if(a[i]%2==1){
            a[i]=a[i]^Y;
            sum1++;
            check1(i,y);
        }
        i++;
        if(a[i]%2==0 && i<n){
            a[i]=a[i]^Y;
            sum1++;
            check1(i,y);
        }
    }
    
    Y = arr2[0];
    y=0;
    
    for(ll i=1;i<n;i++){
        if(arr2[i]%2==0){
            arr2[i]=arr2[i]^Y;
            sum2++;
            check2(i,y);
        }
        i++;
        if(arr2[i]%2==1 && i<n){
            arr2[i]=arr2[i]^Y;
            sum2++;
            check2(i,y);
        }
    }
    
    arr2[0]=arr2[0]^arr2[1];
    sum2++;
    check2(0,1);  
}
 if(oddcount==0){
     cout<<"-1\n";
 }
 else if(sum1>sum2){
     ll j;
     cout<<sum2<<"\n";
     for(ll i=0;i<sum2;i++){
         j=i*2;
         cout<<v2[j]+1<<" "<<v2[j+1]+1<<"\n";
     }
 }
 else{
     int j;
     cout<<sum1<<"\n";
     for(ll i=0;i<sum1;i++){
         j=i*2;
         cout<<v1[j]+1<<" "<<v1[j+1]+1<<"\n";
     }
 } 
}      
    return 0;  
}

void check1(ll x,ll y){
    v1[temp1]=x;
    temp1++;
    v1[temp1]=y;
    temp1++;
}

void check2(ll x,ll y){
    v2[temp2]=x;
    temp2++;
    v2[temp2]=y;
    temp2++;
}