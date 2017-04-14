/**
 * Created by Administrator on 2017/4/11.
 */

angular.module('cases',[])
    .controller('cases',function($scope,$compile,$rootScope){
        $scope.index = 0;
        $scope.toggle = function(index){
            $scope.index = index;
        }
        $rootScope.bar_index = 3;
    })