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
        this.getRegion('header').show(new HeaderView());
        this.getRegion('footer').show(new FooterView());
    }
})