import template from 'templates/item';
import { props } from 'decorators';

@props({
    tagName: 'tr',
    template: template
})
export default class ItemView extends Marionette.ItemView {
    initialize() {
        if (this.model.get('isLeader')) {
            this.$el.addClass('table-info');
        } else if (this.model.get('isOutsider')) {
            this.$el.addClass('table-danger');
        }
    }
}