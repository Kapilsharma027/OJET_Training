define(['ojs/ojcore', 'knockout', 'jquery', 'knockout-postbox'],
function(oj, ko, $){
        function home_1ViewModel(){
            var self = this;
            self.name = ko.observable("Purushotham");
            self.age  = ko.observable("35");

            ko.postbox.subscribe("currentUser1", function (newValue) {
                console.log(newValue);
                self.name(newValue.name);
            });

            self.checker = () =>{
                console.log(self.name());
            }
        }
        return new home_1ViewModel();
    }
);