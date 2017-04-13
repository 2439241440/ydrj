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
                        // controller:'homePage'
                    }
                }
            })
            .state('home.serviceProcess',{
                url:'/serviceProcess',
                views:{
                    'home':{
                        templateUrl:'/template/serviceProcess.html',
                    }
                }
            })
            .state('home.mass',{
                url:'/mass',
                views:{
                    'home':{
                        templateUrl:'/template/mass.html',
                        // controller:'mass'
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
            scope:{
                name:'='
            },
            template:function(elemaent,attrs){
               return '<span style="color:#fff;">'+attrs.title+'{{name}}</span>';
            },
            replace:true
        }
    })
