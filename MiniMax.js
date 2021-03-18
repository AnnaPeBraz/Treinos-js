function miniMaxSum(arr) {
    var soma = arr.reduce((acc, num) => acc + num)
        
        var min = soma - Math.max.apply(null,arr)
        var max = soma - Math.min.apply(null,arr)
        console.log(min + ' ' + max)
    }