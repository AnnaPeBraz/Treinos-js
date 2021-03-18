function birthdayCakeCandles(candles) {
    // Write your code here
    var a=0
    var maiorValor = Math.max(...candles)
    var count=0
    
    for (var i=0; i<candles.length; i++){
        a = candles[i]
        
        if (a == maiorValor){
            count++
        } 
        
    }return count
}