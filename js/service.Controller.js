/**
 * Created by Administrator on 2017/4/11.
 */

angular.module('service',[])
    .controller('service',function($scope,$compile,$rootScope){
        $scope.join = false;
        $scope.leave = true;
        $scope.join_step = 0;
        $scope.leave_step = 0;
        $scope.serviceOptions = {
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: [
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service',
                'home/service'
            ],
            afterLoad:function(anthor,index){
                $scope.join_step = index;
                console.log(index);
            },
            onLeave:function(index,nextIndex){
                $scope.join_step = nextIndex;
                $scope.leave_step = index;
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