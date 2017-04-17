/**
 * Created by Administrator on 2017/4/11.
 */


'use strict'

angular.module('myApp',['ui.router','home','ksSwiper','homePage','serviceProcess','mass','cases','joinUs','aboutUs'])
    .run(function($rootScope,$timeout){
        $rootScope.$on('$stateChangeStart', function(){
            $rootScope.isLoading = true;
        })
        $rootScope.$on('$viewContentLoaded', function(event, viewConfig){
            $rootScope.isLoading = false;
        });
    })
    .controller('mainController',function($rootScope,$scope){
        $rootScope.title='益等软件-首页';
        $rootScope.rootPath = '/ydrj';
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
