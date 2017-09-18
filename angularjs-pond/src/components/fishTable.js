angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in $FishTableCtrlh">
      {{fish}}

      </fish-table-row>
    </div>`
});