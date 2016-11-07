(function () {
  'use strict';
  angular
      .module('maerkApp')
      .controller('skillsController', skillsController)
      // .controller('skillsController', function($scope) {


 //})();
      // })

  function skillsController ($scope, $log) {
    this.year = '';
    this.years = ['2016','2015','2014'];
    var tabs = [
          { title: 'January', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'February', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'March', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'April', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'May', content: "If you remove a tab, it will try to select a new one."},
          { title: 'June', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'July', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'August', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'September', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'October', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
          { title: 'November', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'December', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }
})();
