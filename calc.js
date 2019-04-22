var n1 = document.getElementById('numField1');
var n2 = document.getElementById('numField2');
var r = document.getElementById('result');
var form = document.getElementById('xIsWhatPercentOfY');




form.addEventListener('submit',function(event){

    
   if (!n1.value || !n2.value){
        alert("Please enter values in the field");
    } else{

        //alert("HI");
        var x = parseFloat(n1.value);
        var y = parseFloat(n2.value);

       
        var percentage = x/y * 100;
       
       r.innerText = "Answer: "+percentage+"%";
        event.preventDefault();
    
    }
});





