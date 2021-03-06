//MstrJL
'use strict';

angular.module('myApp.perfilMensajero', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/perfilMensajero', {
            templateUrl: 'perfilMensajero/perfilMensajero.html',
            controller: 'PerfilMensajeroCtrl'
        });
    }])


    .controller('PerfilMensajeroCtrl', ['$scope','GetSM','mensajeros','$location',function($scope, GetSM, mensajeros, $location) {
        $scope.razon = "";
        $scope.solicitante = "";
        var a;
        $scope.agregarSolicitante = function(){                
            if($scope.razon.length > 0 && $scope.id.length > 0){
                GetSM.get({n:$scope.id},function(data){
                    a = data;
                    if(a == null){
                        alert("Ese ID no existe.");
                        console.log("||||a = "+a);
                    }
                    else{
                        $scope.solicitante = data;
                        console.info("Solicitante: "+ a.nombre);

                        var mensajero =
                            {   idSolicitante : a.idSolicitante,
                                nombre : a.nombre,
                                primerApellido : a.primerApellido,
                                segundoApellido : a.segundoApellido,
                                genero : a.genero,
                                cedula : a.cedula,
                                edad : a.edad,
                                fechaNacimiento : a.fechaNacimiento,
                                telefono : a.telefono,
                                direccion : a.direccion,
                                pais : a.pais,
                                municipio  : a.municipio,
                                codigoPostal : a.codigoPostal,
                                calificacion : '0'
                            };

                        console.log(mensajero);
                        mensajeros.save(mensajero, function(){
                            console.info("saved   "+ mensajero);
                        }); 
                        
                        $scope.mensaje = " ahora es un mensajero.";                       
                    }  
                });
                
    //                    $location.path("/viaje");
                
            }
            else
                alert("Por favor, de una razon y escriba su ID de BoxApp.");
        }; 
        
//        $scope.agregarMensajero = function(){     
//            console.info("Solicitante: "+ a);
//            mensajeros.save(function(){
//                console.info("saved   "+ $scope.solicitante);
//            });    
//        };        
    }]);