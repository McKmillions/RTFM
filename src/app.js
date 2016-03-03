var app = angular.module('rtfmApp', ['ui.router', 'firebase'])
.config(function( $stateProvider, $urlRouterProvider ) {

  $stateProvider
		.state('threads', {
			  url: '/threads',
				templateUrl: './src/components/threads/threads.html',
				controller: 'threadsCtrl',
        resolve: {
        threadsRef: function(threadService) {
          return threadService.getThreads();
        }
      }
		})
    .state('thread', {
			  url: '/thread/:threadId',
				templateUrl: './src/components/thread/thread.html',
				controller: 'threadCtrl',
        resolve: {
        threadRef: function(threadService, $stateParams) {
          return threadService.getThread($stateParams.threadId);
        },
        commentsRef: function(threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
      }
		});

	$urlRouterProvider.otherwise('/threads');

})
.constant('fb', {
	url: 'https://chatroomnv.firebaseio.com'
});
