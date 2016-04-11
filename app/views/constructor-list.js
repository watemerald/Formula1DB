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

console.log("Loaded Module");