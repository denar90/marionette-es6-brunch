import app from 'components/app/app';
import ItemView from './itemView';
import template from 'templates/table';

export default Marionette.CompositeView.extend({
    childViewContainer: 'tbody',
    childView: ItemView,
    template: template,

    templateContext() {
        return {
            title: this.collection.title
        };
    }
});