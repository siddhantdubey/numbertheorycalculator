export function sigma(n){
    //this function finds the sum of all divisors of n
    var sum = 0;
    for (var i = 1; i <= n; i++){
        if (!(n % i)) {
        sum += i;
        }
    }
    return sum;
}