import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "ojs/ojchart";
class AboutViewModel {
  datasource1: ko.Observable<any> = ko.observable<any>(null);
  datasource2: ko.Observable<any> = ko.observable<any>(null);
  datasource3: ko.Observable<any> = ko.observable<any>(null);
  data1 = [
    { name: "Papers Published", items: [12] },
    { name: "Projects Completed", items: [14] },
    { name: "Team Size", items: [28] }
  ];

   data2 = [
    { name: "Papers Published", items: [10] },
    { name: "Projects Completed", items: [18] },
    { name: "Team Size", items: [8] }
  ];

   data3 = [
    { name: "Papers Published", items: [17] },
    { name: "Projects Completed", items: [8] },
    { name: "Team Size", items: [18] }
  ];
  constructor() {
    this.datasource1(this.data1);
    this.datasource2(this.data2);
    this.datasource3(this.data3);
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
    AccUtils.announce("About page loaded.");
    document.title = "About";
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

export = AboutViewModel;