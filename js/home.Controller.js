/**
 * Created by Administrator on 2017/4/11.
 */

angular.module('home',['ngAnimate'])
    .controller('home',function($scope,$compile,$rootScope,$timeout){
       /* $scope.mainOptions = {
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        };*/
        $rootScope.navShow = true;
        $scope.index = 0;
        $scope.isShowMenu = false
        $scope.toggle = function(){
            $scope.isShowMenu = !$scope.isShowMenu;
        }
        $scope.changePage = function(index,otherwise){

            $rootScope.bar_index = index;
            $scope.isShowMenu =false;

        }
        $rootScope.bar_index = 0;
        $scope.items= [1,2,3,4,5,6,7]
    })