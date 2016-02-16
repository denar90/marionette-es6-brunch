import template from 'templates/item';

export default class ItemView extends Marionette.ItemView {

    get tagName() {
        return 'tr';
    }

    get template() {
        return template;
    }

    initialize() {
        if (this.model.get('isLeader')) {
            this.$el.addClass('table-info');
        } else if (this.model.get('isOutsider')) {
            this.$el.addClass('table-danger');
        }
    }
}