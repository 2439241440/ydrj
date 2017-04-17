/**
 * Created by Administrator on 2017/4/11.
 */

angular.module('homePage',[])
    .controller('homePage',function($scope,$rootScope){
        $rootScope.bar_index = 0;
        /*$scope.$on('$viewContentLoading', function(event, viewConfig){
            $rootScope.isLoading = true;
            console.log('加载中，，，');
            console.log(event);
        });
        $scope.$on('$viewContentLoaded', function(event, viewConfig){
                $rootScope.isLoading = false;
                console.log('加载完成');
                console.log(event);
        });*/

    })