/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils','knockout', 'ojs/ojchart', 'text!models/data.json',"ojs/ojradioset", "ojs/ojdatetimepicker", "ojs/ojlabel", "ojs/ojformlayout"],
 function(accUtils,ko, tempoj, file) {
    function DashboardcpViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
// ------------------------------------------------------------------------------
    var self =  this;
    // Observables for name and age
    self.name = ko.observable("Kapil Sharma");
    self.dob  = ko.observable();
    self.age = ko.observable();
    self.chartType = ko.observable("pie");
    this.chartOption = [
      { id: "pieopt", value: "pie", chart: "Pie" },
      { id: "baropt", value: "bar", chart: "Bar" },
      
  ];
    var data = [
      {name:"Pedestrians", items:[42]},
      {name:"Vehicles", items:[82]},
      {name:"Bicycles", items:[20]},
      {name:"Busses", items:[76]},
      {name:"Trains", items:[31]}
    
    ];

self.datasource = ko.observableArray(data);

  self.changeChart = (val)=> {
    if(val === 'pie'){
      self.chartType('pie');
    }else{
      self.chartType('bar');
    }
  // console.log(val);
  }
  self.dob.subscribe((newValue) => {
    self.age(calculateAge(newValue, new Date()));

});

function calculateAge (birthDate, otherDate) {
  birthDate = new Date(birthDate);
  otherDate = new Date(otherDate);
  console.log("birthDate", birthDate);
  console.log("otherDate", otherDate);
  var years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() || 
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
  }

  return years;
}

// ------------------------------------------------------------------------------
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboardcp";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardcpViewModel;
  }
);