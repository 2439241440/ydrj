/**
 * Created by Administrator on 2017/2/27.
 */

(function (win,AMap){
    //高德地图方法封装
    var M = function(container,zoom){
        this.container = container;
        this.zoom = zoom;
        this.mapObj = new AMap.Map(this.container, {
            resizeEnable: true,
            zoom: this.zoom //地图显示的缩放级别
        });
    }
    M.fn = M.prototype = {
        geolocation:function(onComplete,onError){
            //引入定位组件
            var mapObj = this.mapObj;
            var that = this;
            this.mapObj.plugin('AMap.Geolocation', function () {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(20, 40),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                mapObj.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete',onComplete);//返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
            });
        },
        toAddr:function(lnglat,fn){
            this.mapObj.plugin(["AMap.Geocoder"],function() {
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });
                geocoder.getAddress(lnglat, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        fn(result);
                    }
                });
            })
        },
        toCoder:function(addr,fn){
            this.mapObj.plugin(["AMap.Geocoder"],function(){
                var geocoder = new AMap.Geocoder({
                    radius: 1000 //范围，默认：500
                });
                //地理编码,返回地理编码结果
                geocoder.getLocation(addr, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        fn(result);
                    }
                });
            })
        },
        distance:function(lnglat1,lnglat2){
            var lnglat = new AMap.LngLat(lnglat1[0],lnglat1[1]);
            var distance = lnglat.distance(lnglat2);
            return distance
        },
        marker:function(lnglat,fn){
            var that = this;
            var marker = new AMap.Marker({
                position: lnglat,
                map: that.mapObj
            });
            if(fn){
                fn(marker)
            }
        },
        infoWindow:function(lnglat,content){
            var that = this;
            var infoWindow = new AMap.InfoWindow({
                offset:new AMap.Pixel(0,-25),
                content:content
            });
            infoWindow.open(that.mapObj,lnglat);
            return infoWindow;
        },
        search:function(addr,fn){
            var that = this;
            this.mapObj.plugin(["AMap.PlaceSearch"],function() {
                var placeSearch = new AMap.PlaceSearch();
                //关键字查询
                placeSearch.search(addr,function(status, result){
                    if(fn){
                        fn(result)
                    }
                });
            })

        }
    }
    win.M = M;
})(window,AMap)