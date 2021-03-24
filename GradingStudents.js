function gradingStudents(grades) {
    var cont = 0
    
    for(var i =0; i<grades.length; i++){
        var n = grades[i]
        
        if(grades[i]>=38){
            cont = 0
            while(grades[i]%5!= 0){
                cont++
                grades[i] ++   
            }
            if (cont >=3 ){
                grades[i] = n
            } 
        }
    }
    return grades
}
