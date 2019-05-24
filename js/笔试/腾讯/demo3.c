struct monstar {
    int id;
    long d;
    long p;
};

long DFS(vector<monster> mons,int i , int N,long mon,long pow){
    if(i===N)
        return mon;
    if(pow < mons[i].d)
        return DFS(mons,i+1,N,mon[i].p, pow+mons[i].d);
    else 
        return min(DFS(mons,i+1,N,mon+mons[i].p,pow+mons[i].d));
}
int main() {
    int N;
    cin >>N;
    vector<monstar> mons[N];
    for(int i = 0;i<N;i++){
        mons[i].id = i ;
        cin >>mons[i].d;
    }
}