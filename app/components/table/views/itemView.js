import template from 'templates/item';

export default Marionette.View.extend({
    tagName: 'tr',
    template: template,

    initialize() {
        if (this.model.get('isLeader')) {
            this.$el.addClass('table-info');
        } else if (this.model.get('isOutsider')) {
            this.$el.addClass('table-danger');
        }
    }
});