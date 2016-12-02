angular.module("app")
.service("MainSrv", function($http){
	this.shopInfo = () => {
		return $http.get("http://practiceapi.devmounta.in/products")
	}
	this.getProduct = (id) => {
		return $http.get(`http://practiceapi.devmounta.in/products/${id}`)
	}
})
