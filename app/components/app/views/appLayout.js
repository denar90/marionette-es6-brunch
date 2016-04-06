import template from 'templates/layout';
import HeaderView from './headerView';
import FooterView from './footerView';

export default Marionette.View.extend({
    template: template,
    regions: {
        header: '#header',
        table: '#table-view',
        footer: '#footer'
    },

    onRender() {
        this.showChildView('header', new HeaderView());
        this.showChildView('footer', new FooterView());
    }
})