define(["ojs/ojcorerouter", 
"ojs/ojknockoutrouteradapter",
 "ojs/ojurlparamadapter", 
 "ojs/ojarraydataprovider", 
 "knockout",
 "ojs/ojmodulerouter-adapter",
 "ojs/ojnavigationlist",
 "ojs/ojmodule-element"],
  function(
    CoreRouter, 
    KnockoutRouterAdapter, 
    UrlParamAdapter, 
    ArrayDataProvider, 
    ko,
    ModuleRouterAdapter
 ){

    function rootViewModel(){
        this.loggedIn  = ko.observable(false);

 // Define the routes
 this.routes = [
    { path: "", redirect: "login" },
    { path: "login", detail: { label: "Login" } },
    { path: "home", detail: { label: "Home" } },
    { path: "login_ex2", detail: { label: "Login 2" } },
    { path: "home_ex2", detail: { label: "Home 2" } },
    { path: "playground", detail: { label: "Playground" } },
    { path: "server", detail: { label: "Server" } },
    { path: "about", detail: { label: "About" } },
    { path: "form", detail: { label: "Form" } },
    { path: "editable_Table", detail: { label: "Editable Table" } },
    { path: "table_filter", detail: { label: "Table Filter" } },
    { path: "drag&drop_table", detail: { label: "Table Drag & Drop" } },
];
// Create ADP with partial array, excluding first redirect route
this.dataProvider = new ArrayDataProvider(this.routes.slice(1), {
    keyAttributes: "path",
});
// Create the router with the routes
this.router = new CoreRouter(this.routes, {
    urlAdapter: new UrlParamAdapter(),
});
// Create an observable to react to the current router state path
this.selection = new KnockoutRouterAdapter(this.router);

this.moduleAdapter = new ModuleRouterAdapter(this.router );
// Synchronize the router, causing it to go to its default route
this.router.sync();
this.login = function(){
    this.loggedIn(true);
    //ko.postbox.publish("loggedIn", true );
  }

  this.logout = function(){
    this.loggedIn(false);
    //ko.postbox.publish("loggedIn", false );
  }

    }
    return new rootViewModel();
    
})