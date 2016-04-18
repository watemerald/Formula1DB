var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var Observable = require("data/observable").Observable;

var config = require("../shared/config");
var getRequest = require("../shared/getRequest");


function ConstructorDetailsViewModel(constructorId) {
    
    var viewModel = new Observable({
        constructorId: constructorId
    }) 
    
    viewModel.load = function() {
        var url = config.apiUrl + "constructors/" + constructorId +  ".json";
        var current = 0
        
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
            // viewModel.set("driver", res.MRData.DriverTable.Drivers[0]);
            viewModel.loadDetails(res.MRData.ConstructorTable.Constructors[0]);
        }, function(error) {
            console.log(error);
        });
        
    }
    
    viewModel.loadDetails = function(constructor) {
        viewModel.set("name", constructor.name);
        viewModel.set("nationality", constructor.nationality);
    }
    
    return viewModel;
}

module.exports = ConstructorDetailsViewModel;