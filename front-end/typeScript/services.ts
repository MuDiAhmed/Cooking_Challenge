/**
 * Created by mudi on 16/05/17.
 */
let services = angular.module('services',['ngResource']);

services.factory('Users',['$resource','Config',function($resource,Config){
    let users = $resource(Config.server+'users/:id',null,{
            save: {
                method: 'POST',
                transformRequest: angular.identity,
                headers:{
                    'Content-Type': undefined
                }
            }
        }),
        indexAction = function(){
            return users.query().$promise;
        },
        deleteAction = function(id){
            return users.delete({id:id}).$promise;
        },
        createAction = function(user){
            let fd = new FormData();
            for (let index in user){
                fd.append(index,user[index]);
            }
            return users.save(fd).$promise;
        };

    return {
        indexAction:indexAction,
        deleteAction:deleteAction,
        createAction:createAction
    }
}]);
services.factory('Dishes',['$resource','Config',function($resource,Config){
    let dishes = $resource(Config.server+'dishes/:id',null,{
            save: {
                method: 'POST',
                transformRequest: angular.identity,
                headers:{
                    'Content-Type': undefined
                }
            }
        }),
        indexAction = function(){
            return dishes.query().$promise;
        },
        createAction = function(user){
            let fd = new FormData();
            for (let index in user){
                fd.append(index,user[index]);
            }
            return dishes.save(fd).$promise;
        };

    return {
        indexAction:indexAction,
        createAction:createAction
    }
}]);