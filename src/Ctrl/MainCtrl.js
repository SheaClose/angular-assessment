angular.module( "assessment" )
.controller( "MainCtrl", function( $scope, MainSrv ){
	const getShopInfo = () => {
		MainSrv.shopInfo().then( response => {
			$scope.shopProducts = response.data;
		} )
	}
getShopInfo();
})
