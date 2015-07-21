angular.module('challengeApp.services', [])

.factory('Auth', function ($http) {
  var getUserInfo = function() {
    return $http.get('/api/1/user_info').then(function(data) {
      return data.data;
    }, function(error) {
      throw Error(error);
    });
  };

  var logout = function() {
    return $http.get('/auth/logout').then(function() {
      return true;
    }, function(error) {
      throw Error(error);
    });
  };

  return {
    'getUserInfo': getUserInfo,
    'logout': logout
  };
})

.factory('ChallengeFactory', function($http){
  var getChallengeInfo = function(challengeId){
    return $http({
      method: 'GET',
      url: '/api/1/challenge/' +  challengeId,
    }).then(function(resp){
      console.log("this is resp", resp);
      return resp.data;
    });
  };

  var acceptChallenge = function(challengeId) {
    return $http({
      method: 'PUT',
      url: '/api/1/challenge/' + challengeId + '/accept',
    }).then(function(resp){
      console.log("challenge has been accepted, resp");
    });
  };

  var challengeCompleted = function(challengeId) {
    return $http({
      method: 'PUT',
      url: '/api/1/challenge/' + challengeId + '/accept',
    }).then(function(resp) {
      console.log("challenge completed", resp);
    })
  };


  return {
    getChallengeInfo: getChallengeInfo,
    acceptChallenge: acceptChallenge,
    challengeCompleted: challengeCompleted
  };
})

.factory('CreateChallengeFactory', function($http){
  var getAllUsers = function(){
    return $http({
      method: 'GET',
      url: '/api/1/allUsers',
    }).then(function(resp){
      console.log("this is the getAllUsers resp", resp);
      return resp.data;
    });
  };

  var getCreatorInfo = function(){
    return $http({
      method: 'GET',
      url: '/api/1/user_info',
    }).then(function(resp){
      console.log("this is the getCreatorInfo resp", resp);
      return resp.data;
    });
  };

  // POST method for creating a challenge



  return {
    getAllUsers: getAllUsers,
    getCreatorInfo: getCreatorInfo
  };
});


