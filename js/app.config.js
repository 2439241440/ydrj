/**
 * Created by Administrator on 2017/4/11.
 */

'use strict'

angular.module('myApp')

    .config(function($stateProvider,$urlRouterProvider){
        // $rootScope.otherwise = 'homepage';
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'/template/home.html',
                controller:'home'
            })
            .state('home.homePage',{
                url:'/homePage',
                views:{
                    'home':{
                        templateUrl:'/template/homePage.html',
                        controller:'homePage'
                    }
                }
            })
            .state('home.service',{
                url:'/service',
                views:{
                    'home':{
                        templateUrl:'/template/service.html',
                        controller:'service'
                    }
                }
            })
            .state('home.mass',{
                url:'/mass',
                views:{
                    'home':{
                        templateUrl:'/template/mass.html',
                        controller:'mass'
                    }
                }
            })
        $urlRouterProvider.otherwise('/home/homePage');
    })
    .value('navShow',{
        'val':true
    })
    .directive('temp',function(){
        return {
            restrict:'EA',
            template:function(elemaent,attrs){
               return '<span>'+attrs.title+'</span>';
            },
            replace:true
        }
    })
