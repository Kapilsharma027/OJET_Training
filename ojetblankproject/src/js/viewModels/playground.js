define(['knockout', 'ojs/ojchart', "ojs/ojinputtext", "ojs/ojbutton", "ojs/ojradioset"], function (ko) {

  function playgroundViewModel() {

    var self = this;

    self.calInput1 = null;
    self.calInput2 = null;
    self.calResult = ko.observable();

    self.primeValue = ko.observable();
    self.isPrime = ko.observable();

    self.Fahrenheit = ko.observable(null);
    self.Celcius = ko.observable(null);

    self.operationType = ko.observable("add");
    this.operation = [
      { id: "add", value: "add", chart: "Add" },
      { id: "sub", value: "sub", chart: "Sub" },
      { id: "mul", value: "mul", chart: "Mul" },
      { id: "div", value: "div", chart: "Div" },

    ];
    // ----------------------------------------------------------------


    // subscribe 
    self.calResult.subscribe(function () {
      self.primeValue(self.calResult());
    })


    // self.primeValue = ko.computed(function(){
    //   return self.calResult();
    // });

    self.isPrime = ko.computed(function () {
      return isPrimeNumber(self.primeValue());
    }, this);

    self.buttonAction = () => {
      //  console.log(self.operationType());
      var res = self.operationType();
      var opa = Number(self.calInput1);
      var opb = Number(self.calInput2);
      switch (res) {
        case "add": { self.calResult(opa + opb); break; }
        case "sub": { self.calResult(opa - opb); break; }
        case "mul": { self.calResult(opa * opb); break; }
        case "div": { self.calResult(opa / opb); break; }
      }
    }

    function isPrimeNumber(num) {
      for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num > 1;
    }

    var data1 = [
      { name: "Papers Published", items: [12] },
      { name: "Projects Completed", items: [14] },
      { name: "Team Size", items: [28] }
    ];

    var data2 = [
      { name: "Papers Published", items: [10] },
      { name: "Projects Completed", items: [18] },
      { name: "Team Size", items: [8] }
    ];

    var data3 = [
      { name: "Papers Published", items: [17] },
      { name: "Projects Completed", items: [8] },
      { name: "Team Size", items: [18] }
    ];

    self.datasource1 = ko.observableArray(data1);
    self.datasource2 = ko.observableArray(data2);
    self.datasource3 = ko.observableArray(data3);

    self.Fahrenheit.subscribe(function () {
      self.Celcius((self.Fahrenheit() - 32) * 5 / 9);
    });

    self.Celcius.subscribe(function () {
      self.Fahrenheit(self.Celcius() * 9 / 5 + 32);
    });

    //  self.Celcius = ko.computed(function(){
    //     return (self.Fahrenheit() - 32) * 5 / 9
    //   });

    //   self.Fahrenheit = ko.computed(function(){
    //     return self.Celcius() * 9 / 5 + 32;
    //   });

    self.tablegen = () => {
      console.log("hello");
    }
  }
  return playgroundViewModel;

})