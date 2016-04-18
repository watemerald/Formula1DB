var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var ConstructorListViewModel = require("../view-models/constructor-list-view-model");

var constructorList = new ConstructorListViewModel([]);
var pageData = new Observable({
    constructorList: constructorList
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;
    
    constructorList.load();   
    console.log("Loaded page");
}

exports.onItemClick = function(args) {
    var itemIndex = args.itemIndex;
    var itemObject = args.object;
    
    var constructorTapped = constructorList.getItem(itemIndex);
    
    var navigationEntry = {
        moduleName: "views/constructor-details",
        context: constructorTapped
    }
    
    frameModule.topmost().navigate(navigationEntry);
};

console.log("Loaded Module");