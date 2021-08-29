define(['ojs/ojcore', 'knockout', 'jquery','jet-composites/name-badge/1.0.0/loader','knockout-postbox'], 
function(ojs, ko){
    function homeViewModel(){
        var self = this;
        self.user = ko.observable("test");

        ko.postbox.subscribe("currentUser", function(data){
            // console.log(data);
            self.user(data.userName)
            console.log(self.user());
        })
        self.checker = () =>{
            console.log(self.user());
        }
    }
    return new homeViewModel();
});

// define(['ojs/ojcore', 'knockout', 'jquery', 'knockout-postbox'],
// function(oj, ko, $){
//         function home_1ViewModel(){
//             var self = this;
//             self.user = ko.observable("Purushotham");

//             ko.postbox.subscribe("currentUser", function (newValue) {
//                 console.log(newValue);
//                 self.user(newValue.userName);
              
//             });

//             self.checker = () =>{
//                 console.log(self.user());
//             }
//         }
//         return new home_1ViewModel();
//     }
// );
