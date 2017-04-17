/**
 * Created by Administrator on 2017/4/11.
 */

'use strict'

angular.module('myApp')

    .config(function($stateProvider,$urlRouterProvider,$locationProvider){
        // $rootScope.otherwise = 'homepage';
        // $locationProvider.html5Mode(true);
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
                        templateUrl:'/ydrj/template/homePage.html',
                        controller:'homePage'
                    }
                }
            })
            .state('home.serviceProcess',{
                url:'/serviceProcess',
                views:{
                    'home':{
                        templateUrl:'/ydrj/template/serviceProcess.html',
                        controller:'serviceProcess'
                    }
                }
            })
            .state('home.mass',{
                url:'/mass',
                views:{
                    'home':{
                        templateUrl:'/ydrj/template/mass.html',
                        controller:'mass'
                    }
                }
            })
            .state('home.cases',{
                url:'/cases',
                views:{
                    'home':{
                        templateUrl:'/ydrj/template/cases.html',
                        controller:'cases'
                    }
                }
            })
            .state('home.joinUs',{
                url:'/joinUs',
                views:{
                    'home':{
                        templateUrl:'/ydrj/template/joinUs.html',
                        controller:'joinUs'
                    }
                }
            })
            .state('home.aboutUs',{
                url:'/aboutUs',
                views:{
                    'home':{
                        templateUrl:'/ydrj/template/aboutUs.html',
                        controller:'aboutUs'
                    }
                }
            })
        $urlRouterProvider.otherwise('/home/homePage');
    })
    .value('navShow',{
        'val':true
    })
    .constant('rootPath','/ydrj')
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
    .directive('map',function(){
        return {
            restrict:'EA',
            controller:function($element,$attrs){
                var mapObj = new M($attrs.id,13);
                mapObj.geolocation(function(complate){
                    var currentPosition = [121.50013, 31.13897];
                    mapObj.marker(currentPosition);
                    mapObj.infoWindow(currentPosition,'上海益等软件科技有限公司')
                })
            }
        }
    })

