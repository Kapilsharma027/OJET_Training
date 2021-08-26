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

 // Define the routes
 this.routes = [
    { path: "", redirect: "home" },
    { path: "home", detail: { label: "Home" } },
    { path: "playground", detail: { label: "Playground" } },
    { path: "server", detail: { label: "Server" } },
    { path: "about", detail: { label: "About" } },
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


    }
    return new rootViewModel();
    
})