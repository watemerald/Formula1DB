var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;

var SeasonDetailsViewModel = require("../view-models/season-details-view-model");


var seasonDetails;
var pageData;

exports.loaded = function(args) {
    var page = args.object;
    
    var season = page.navigationContext.season;
    
    seasonDetails = SeasonDetailsViewModel(season);
    
    seasonDetails.load();
    
    page.bindingContext = seasonDetails;
};