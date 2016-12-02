angular.module("assessment", ["ui.router"])
.directive("products", function(MainSrv){
	return {
		restrict: "E"
		, templateUrl: "../views/product-tmpl.html"
		, scope: {
      dirProd: '=product'
    }
    , link: function(scope){
			scope.imgToggle = false;
			scope.hideElem = () => {
				scope.imgToggle = !scope.imgToggle;
			}
		}
	}
})
.config( ( $stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise( "/" );
	$stateProvider
	.state( "home", {
		url: "/"
	, templateUrl: "../views/home.html"
	// , controller: "MainCtrl"
	} )
	.state( "about", {
		url: "/about"
	, templateUrl: "../views/about.html"
	, controller: "MainCtrl"
	} )
	.state( "blog", {
		url: "/blog"
	, templateUrl: "../views/blog.html"
	, controller: "MainCtrl"
	} )
	.state( "shop", {
		url: "/shop"
	, templateUrl: "../views/shop.html"
	, controller: "MainCtrl"
	} )
	.state( "product", {
		url: "/product/:id"
	, templateUrl: "../views/product-details.html"
	, controller: function($scope, $state, MainSrv){
			let getspecificProduct = () => {
				MainSrv.getProduct($state.params.id).then(response => {
					$scope.specificProduct = response.data;
				})
			}
			getspecificProduct();
		}
	} )
} )
