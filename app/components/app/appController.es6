import app from './app';
import AppLayout from './views/appLayout';
import Table from 'components/table/views/compositeView';
import Collection from 'components/table/collection';

export default class AppController extends Marionette.Controller {

    initialize() {
        this.layout = new AppLayout();
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