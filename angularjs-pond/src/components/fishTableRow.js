angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    // some code is missing here
    if(this.showDescription()){
      this.showDescription = true;
    }
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.showDescription" >
      <span class="fish-name" {{$ctrl.fish.number}}></span>
      <span class="fish-name">{{$ctrl.fish.name}}</span>
      <span>
        <img src={{$ctrl.fish.image}} />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">where am i ?</span>
    </div>`
});
