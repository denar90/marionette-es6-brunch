import app from './app';
import AppLayout from 'views/appLayout';
import Table from 'table/compositeView';
import Collection from 'table/collection';
import { props } from 'decorators';

@props({
    layout: new AppLayout()
})
export default class AppController extends Marionette.Controller {
    initialize() {
        app.appRegion.show(this.layout);
    }
    index() {
        let collection = new Collection();
        collection.fetch({
            success: (collection) => {
                this.layout.table.show(new Table({collection: collection}))
            }
        }, this);
    }
}