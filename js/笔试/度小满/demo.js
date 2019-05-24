function ifHui2(str) {
    var revStr = str.split('').reverse().join('');
    //console.log(revStr);
    var len = str.length;
    var ss = []
    var temp = [];
    for (var i = 0; i < len; i++) {

        if (str[i] != revStr[i]) {
            temp.push([i,str[i],revStr[i]]);           
        }
    }
    console.log(temp)
    // for(var j = 0;j<temp.length;j++){
    //     if(temp[i][1]!=temp[temp.length-1-i][2]){
    //         return 'No';
    //     }
    // }
    // return 'Yes';
}
console.log(ifHui2('AABB'))


==

haole

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    private static boolean test(String str) {
        int[] times = new int[26];
        char[] chs = str.toCharArray();
        for (char c : chs)
            times[c - 'a']++;

        int t = 0;
        char x = 0;
        for (int i : times) {
            if (i % 2 == 1) {
                t++;
                x = (char)('a' + i);
            }
        }

        if (t >= 2)
            return false;


        int n = str.length();
        int change = 0;

        int j = 0, i = 0, k = 0;
        for(i=0;i < n / 2;i++) {
            if(chs[i] == x) {
                for(j = i; j < n - i - 1;j++) {
                    if(chs[n-i-1] == chs[j])
                        break;
                }
                change += j - i;
                if (change > 1)
                    return false;

                for(k = j; k > i; k--)
                    chs[k] = chs[k - 1];
                chs[i] = chs[n - i - 1];
            } else {
                for(j = n - i - 1;j >= i; j--) {
                    if(chs[i] == chs[j])
                        break;
                    change += n - i - 1 - j;
                    for(k = j; k < n - i - 1; k++)
                        chs[k] = chs[ k + 1];
                    chs[n - i - 1] = chs[i];
                }
            }
        }
        return change <= 1;
    }

    private static  void swap(char[] chs, int i, int j) {
        char t = chs[i];
        chs[i] = chs[j];
        chs[j] = t;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            boolean result = test(sc.nextLine());
            System.out.println(result ? "Yes" : "No");
        }
    }
}

