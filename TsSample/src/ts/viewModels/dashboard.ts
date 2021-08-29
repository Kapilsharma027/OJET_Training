import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "ojs/ojchart";
import 'text!models/data.json';
import "ojs/ojradioset" ;
import "ojs/ojdatetimepicker"; 
import  "ojs/ojlabel";
import  "ojs/ojformlayout";

class DashboardViewModel {
  datasource1: ko.Observable<any> = ko.observable<any>(null);
  name = ko.observable("Kapil Sharma");
  dob  = ko.observable();
  age = ko.observable();
  chartType = ko.observable("pie");

  chartOption = [
    { id: "pieopt", value: "pie", chart: "Pie" },
    { id: "baropt", value: "bar", chart: "Bar" },
    
];
   data = [
    {name:"Pedestrians", items:[42]},
    {name:"Vehicles", items:[82]},
    {name:"Bicycles", items:[20]},
    {name:"Busses", items:[76]},
    {name:"Trains", items:[31]}
  
  ];

datasource = ko.observableArray();

  constructor() {
    this.datasource(this.data);

    this.dob.subscribe((newValue) => {
      this.age(this.calculateAge(newValue, new Date()));
  
  });
  }

  calculateAge (birthDate, otherDate) {
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
  changeChart(val){
    if(val === 'pie'){
      this.chartType('pie');
    }else{
      this.chartType('bar');
    }
  // console.log(val);
  }

  
  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = DashboardViewModel;
