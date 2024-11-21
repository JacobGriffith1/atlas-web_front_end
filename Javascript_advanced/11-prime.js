function countPrimeNumbers() {
    let prime = true;
    let pCount = 0;

    for (let i = 2; i <= 100; i++) {
        prime = true;
        let sqrt = Math.round(Math.sqrt(i));
        for (let div = 2; div <= sqrt; div++) {
            if (i % div == 0) {
                prime = false;
                break;
            }
        }
        if (prime){
            pCount++;
        }
    }
    return pCount;
}

let begin = performance.now();
setTimeout(function(){
    for (let i = 0; i <= 99; i++) {
        countPrimeNumbers();
    }
}, 0);
let end = performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end - begin) + " milliseconds.");
