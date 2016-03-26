import app from './app';
import Table from 'components/table/views/compositeView';
import Collection from 'components/table/collection';

export default Marionette.Object.extend({
    index() {
        let collection = new Collection();
        collection.fetch({
            success: (collection) => {
                window.app.getView().getRegion('table').show(new Table({collection: collection}))
            }
        }, this);
    }
})