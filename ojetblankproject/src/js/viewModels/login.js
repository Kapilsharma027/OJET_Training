define(['knockout', 'ojs/ojchart', "ojs/ojinputtext", "ojs/ojbutton", "ojs/ojradioset", 'knockout-postbox'], function (ko) {

  function playgroundViewModel() {

    var self = this;

    self.calInput1 = ko.observable();
    self.calInput2 = ko.observable();

self.buttonAction = function() {
      ko.postbox.publish("currentUser",{
      "userName": self.calInput1()
      });
 
}

  }
  return playgroundViewModel;

})