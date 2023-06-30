var num1= document.getElementById("first");
        var num2= document.getElementById("second");
        var res= document.getElementById("res");

        document.getElementById("add").addEventListener("click",
        function(){
             res.innerHTML = parseInt(num1.value)+parseInt(num2.value);
        });

        document.getElementById("sub").addEventListener("click",
        function(){
             res.innerHTML = parseInt(num1.value)-parseInt(num2.value);
        });

        document.getElementById("multi").addEventListener("click",
        function(){
             res.innerHTML = parseInt(num1.value)*parseInt(num2.value);
        });

        document.getElementById("div").addEventListener("click",
        function(){
             res.innerHTML = parseInt(num1.value)/parseInt(num2.value);
        });
         document.getElementById("divs").addEventListener("click",
        function(){
             res.innerHTML = remove(num0.value)/remove(num0.value);
        });

        document.getElementById("mod").addEventListener("click",
        function(){
             res.innerHTML = parseInt(num1.value)%parseInt(num2.value);
        });
