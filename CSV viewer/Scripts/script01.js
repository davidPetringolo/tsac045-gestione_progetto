/**
 * Created by David on 24/03/2016.
 */

var app = angular.module('csv_viewer', []);

app.controller('ctrl01', function($scope) {
    $scope.name = 'Viewer';
});

app.directive('fileReader', function() {
    return {
        scope: {
            fileReader: "="
        },
        link: function(scope, element) {
            $(element).on('change', function(changeEvent) {
                var files = changeEvent.target.files;
                if(files.length) {
                    var r = new FileReader();
                    r.onload = function(e) {
                        var contents = e.target.result;
                        scope.$apply(function () {
                            scope.fileReader = contents;
                        });
                    };
                    JSON.parse(r.readAsText(files[0]));
                }
            });
        }
    };
});