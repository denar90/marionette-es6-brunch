import app from 'app';
import ItemView from './itemView';
import template from 'templates/table';
import { props } from 'decorators';

@props({
    childViewContainer: 'tbody',
    childView: ItemView,
    template: template
})
export default class CompositeView extends Marionette.CompositeView {
    templateHelpers() {
        return {
            title: this.collection.title
        };
    }
}