/**
 * Created by Administrator on 2017/4/11.
 */


'use strict'

angular.module('myApp',['ui.router','home','ksSwiper','homePage','serviceProcess','mass','cases','joinUs','aboutUs'])
    .controller('mainController',function($rootScope){
        $rootScope.title='益等软件-首页';
        $rootScope.rootPath = '/ydrj';
    })
