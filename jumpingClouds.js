function jumpingOnClouds(c) {
    var jumps = 0
    var n = c.length
  
        for(var i=0; i<n-1; i++, jumps++){
            if (i+2 < n && c[i+2] == 0){
               i++
            }    
        }  return jumps    
}         