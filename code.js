function solution(a, b, k) {
    let result = 0
    b.reverse()
    a.forEach((x,index) => {
        const y = b[index];
        let comboIndex = ""+ x + "" + y
       if(parseInt(comboIndex) < k){
        result ++
       } 
    });
    return result
}
console.log(solution([1,2,3],[1,2,3],31))