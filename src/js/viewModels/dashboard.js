define(["require", "exports", "knockout", "ojs/ojarraytreedataprovider", "text!data/treeViewData.json", "ojs/ojinputtext", "ojs/ojformlayout", "ojs/ojselectcombobox", "ojs/ojinputtext", "ojs/ojtreeview"], function (require, exports, ko, ArrayTreeDataProvider, treeViewData) {
    "use strict";
    var DashboardViewModel = /** @class */ (function () {
        function DashboardViewModel() {
            this.data = ko.observableArray(JSON.parse(treeViewData));
            this.treedata = new ArrayTreeDataProvider(this.data, { keyAttributes: 'id' });
        }
        return DashboardViewModel;
    }());
    ;
    return new DashboardViewModel();
});
//# sourceMappingURL=dashboard.js.map