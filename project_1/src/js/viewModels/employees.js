define(['accUtils', 'knockout', 'jquery'],
 function(accUtils, ko, $) {
    function EmployeesViewModel() {
        self = this;
        self.inputValue = ko.observable(0); 
        
        self.checkPrime = () => {
            console.log("isPrime called");
            var opa = Number(document.getElementById("inpulValue").value);
            var res = isPrime(opa);
            document.getElementById("result").innerHTML = res;
        }
     
        function isPrime(num) {
            console.log("isPrime called");
            for(var i = 2; i < num; i++)
              if(num % i === 0) return false;
            return num > 1;
          }

        // $("#submitbtn").click(function(){
        //     console.log("btn clicked called");
        //     var opa = Number($("#inpulValue").val());
        //     var res = isPrime(opa);
        //     document.getElementById("result").innerHTML = res;
    
        //  });
    }
    return EmployeesViewModel;
  }
);