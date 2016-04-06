import Table from 'components/table/views/tableView';
import Collection from 'components/table/collection';

export default Marionette.Object.extend({
    index() {
        let collection = new Collection();
        collection.fetch({
            success: (collection) => {
                window.app.getView().showChildView('table', new Table({collection: collection}))
            }
        }, this);
    }
})