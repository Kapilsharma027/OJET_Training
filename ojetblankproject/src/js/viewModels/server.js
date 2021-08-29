define(['knockout', 'ojs/ojcollectiondataprovider', 'ojs/ojmodel', 'ojs/ojtable'], function (ko, CollectionDataProvider, Model) {

    function serverViewModel() {
        // Following steps from the 
        // Steps for fatching data from server
        //   step 1: Define URL
        self.serviceURL = "https://apex.oracle.com/pls/apex/oraclejet/lp/activities/";


        //   step 2: Define Prototype for model or response
        self.parseData = function (response) {
            return {
                name: response['name'],
                short_desc: response['short_desc']
            };
        };

        //   step 3: Extend the model class
        self.Department = Model.Model.extend({
            urlRoot: self.serviceURL,
            parse: self.parseData,
            idAttribute: 'id'
        });

        // step 4:create the model object 
        self.myDept = new self.Department();

        // create the collection  
        // Extend the collection class
        self.DeptCollection = Model.Collection.extend({
            url: self.serviceURL + "?limit=50",
            model: self.myDept
        });
        // Create the collection object
        self.DeptCol = ko.observable();
        self.DeptCol(new self.DeptCollection());

        // connect the datasource to collection through CDP
        self.datasource = ko.observable();
        self.datasource(new CollectionDataProvider(self.DeptCol()));


    }
    return serverViewModel;

})