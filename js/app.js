/**
 * Created by Administrator on 2017/4/11.
 */


'use strict'

angular.module('myApp',['ui.router','home','ksSwiper','homePage','serviceProcess','mass','cases','joinUs','aboutUs'])
    .run(function($rootScope,$timeout){
        $rootScope.$on('$stateChangeStart', function(){
            $rootScope.isLoading = true;
            console.log('加载中，，，');
        })
      /*  $rootScope.$on('$stateChangeSuccess', function(){

        })*/
        $rootScope.$on('$viewContentLoaded', function(event, viewConfig){
            $rootScope.isLoading = false;
            console.log('加载完成');
            console.log(event);
        });
    })
    .controller('mainController',function($rootScope,$scope){
        $rootScope.title='益等软件-首页';
        $rootScope.rootPath = '/ydrj';
        /*$scope.$on('$viewContentLoading', function(event, viewConfig){
            $rootScope.isLoading = true;
            console.log('加载中，，，');
        });
        $scope.$on('$viewContentLoaded', function(event, viewConfig){
            $timeout(function(){
                $rootScope.isLoading = false;
                console.log('加载完成');
            },100)
        });*/
    })
    .directive('width',function(){
        return {
            strict:'EA',
            controller:function($element){
                console.log($element);
                console.log(angular.element($element)[0].scrollWidth);
                console.log(angular.element($element)[0].offsetWidth);
            }
        }
    })
