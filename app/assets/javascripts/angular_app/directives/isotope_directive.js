groominatiApp.directive('isotope', function(){
       return{
                restrict: 'A',
                require: '?ngmodel',
                scope: {select: '&'},
                link: function(scope, element, attrs){

                    var isoOptions = {
                        animationEngine : 'jquery',
                        itemSelector: 'article',
                        layoutMode: 'masonry',
                        sortAscending: true
                    };

                    element.isotope(isoOptions);




                }











       };
});