import TableBody from './tableBody';
import template from 'templates/table';

export default Marionette.View.extend({
    tagName: 'table',
    className: 'table',
    template: template,
    regions: {
        body: {
            el: 'tbody',
            replaceElement: true
        }
    },

    templateContext() {
        return {
            title: this.collection.title
        };
    },

    onRender() {
        this.showChildView('body', new TableBody({
            collection: this.collection
        }));
    }
});