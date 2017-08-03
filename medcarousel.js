/**
 * Created by Nachit on 03/08/2017.
 */

app.directive('medcarousel', [function() {
    return {
        restrict: 'E',
        scope: {
            images: "="
        },
        template:
        '<div id="medcarousel">' +
        '<div role="button" class="carouselleft" ng-click="goleft()"><i id="carouselicon" class="fa fa-chevron-left"  aria-hidden="true"></i></div>' +
        '<div role="button" class="carouselright" ng-click="goright()"><i id="carouselicon"  class="fa fa-chevron-right" aria-hidden="true"></i></div>' +
        '</div>',
        link: function (scope, element, attributes) {

            // initiation
            scope.current=0;
            var carousel=element[0].children[0];
            var lefticon=carousel.children[0];
            var righticon=carousel.children[1];

            // cas d'une seule image
           if(scope.images.length<=1){
                lefticon.style.display='none';
                righticon.style.display='none';
           }

            // load image
            carousel.style.backgroundImage ="url('"+scope.images[scope.current].contentUrl+"')";



           // functions
            scope.goleft=function(){
                scope.current=Math.abs((scope.current-1))%scope.images.length;
                carousel.style.backgroundImage ="url('"+scope.images[scope.current].contentUrl+"')";
            };
            scope.goright=function(){
                scope.current=(scope.current+1)%scope.images.length;
                carousel.style.backgroundImage ="url('"+scope.images[scope. current].contentUrl+"')";
            };



        }
    }
}]);