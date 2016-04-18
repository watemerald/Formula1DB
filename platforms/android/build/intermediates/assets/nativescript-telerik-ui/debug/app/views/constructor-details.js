var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var ConstructorDetailsViewModel = require("../view-models/constructor-details-view-model");

var constructorDetails;
var pageData;

exports.loaded = function(args) {
    var page = args.object;
    
    var constructorId = page.navigationContext.constructorId;
    
    constructorDetails = ConstructorDetailsViewModel(constructorId);
    
    constructorDetails.load();
    
    page.bindingContext = constructorDetails;
};