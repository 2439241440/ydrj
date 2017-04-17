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
        $rootScope.$on('$stateChangeSuccess', function(){
            $timeout(function(){
                $rootScope.isLoading = false;
                console.log('加载完成');
            },100)
        })
    })
    .controller('mainController',function($rootScope){
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
