import app from 'components/app/app';
import ItemView from './itemView';
import template from 'templates/table';

export default class CompositeView extends Marionette.CompositeView {
    get childViewContainer() {
        return 'tbody';
    }

    get childView() {
        return ItemView;
    }

    get template() {
        return template;
    }

    templateHelpers() {
        return {
            title: this.collection.title
        };
    }
}