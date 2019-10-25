import * as ko from 'knockout';
import "ojs/ojinputtext";
import 'ojs/ojformlayout';
import 'ojs/ojselectcombobox';
import 'ojs/ojinputtext';
import 'ojs/ojtreeview'

// @ts-ignore
import ArrayTreeDataProvider = require('ojs/ojarraytreedataprovider');
// @ts-ignore
import treeViewData = require('text!data/treeViewData.json');

class DashboardViewModel {
    public data: KnockoutObservableArray<any>;
    public treedata: ArrayTreeDataProvider<any, any>;

    constructor() {
        this.data = ko.observableArray(JSON.parse(treeViewData));
        this.treedata = new ArrayTreeDataProvider(this.data, { keyAttributes: 'id'});

    }
};

export = new DashboardViewModel();