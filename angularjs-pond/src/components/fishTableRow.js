angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    // some code is missing here
    if(this.showDescription === false) {

      this.showDescription = true ;
    }

  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div "on.click"(this.toggleDescription)>
      <span class="fish-name">1</span>
      <span class="fish-name">{{fish.name}}</span>
      <span>
        <img src={{$ctrl.fish.imag}}/>
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{fish.Description}}</span>
    </div>`
});
