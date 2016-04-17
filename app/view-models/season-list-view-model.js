var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var config = require("../shared/config");
var getRequest = require("../shared/getRequest");

function SeasonListViewModel(items) {
    var viewModel = new ObservableArray(items);
    
    viewModel.load = function() {
        var url = config.apiUrl + "seasons.json";
        var current = 0
       
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) { 
            var total = parseInt(res.MRData.total, 10);
            
            _.each(res.MRData.SeasonTable.Seasons, function(element) {
                viewModel.push(element);
            });
            current = current + config.defaultResponseRows;            
            while (current < total) {
                getRequest(url, current, config.defaultResponseRows)
                .then(function(r) {return r.json();})
                .then(function(res) {
                    _.each(res.MRData.SeasonTable.Seasons, function(element) {
                        viewModel.push(element);
                    });
                }, function(error) {
                    console.log(error);
                });
                current = current + config.defaultResponseRows;
            }
        }, function(error) {
            console.log(error);
        });
        
    }
    
    return viewModel;
}

module.exports = SeasonListViewModel;