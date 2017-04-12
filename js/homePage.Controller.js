/**
 * Created by Administrator on 2017/4/11.
 */

angular.module('homePage',[])
    .controller('homePage',function($scope,$compile,$rootScope){
        $scope.join = false;
        $scope.leave = false;
        $scope.mainOptions = {
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['home/homePage', 'home/homePage', 'home/homePage', 'home/homePage', 'home/homePage'],
            afterLoad:function(currentPage,index){
                if(index == 2){

                }
            },
            onLeave:function(index,nextIndex){
                if(index == 1 || index == 3){
                    $scope.join = true;
                    $scope.leave = false;

                }else if(index == 2){
                    $scope.join = false;
                    $scope.leave = true;
                }
                if(index == 2 && nextIndex == 1){
                    $rootScope.navShow = true
                }else{
                    $rootScope.navShow = false
                }
                console.log($rootScope.navShow);

            }
        };
    })