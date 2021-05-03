export function numdivisors(n){
    //this function returns the number of positive integer divisors of an integer n
    var num = 0;
    for (var i = 1; i <= n; i++){
        if (!(n % i)) {
        num += 1;
        }
    }
    return num;
}