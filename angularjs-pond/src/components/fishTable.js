angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repet="fish in $ctrl.fishes"> 
      fishe=fish </fish-table-row>
      
    </div>`
});