import template from 'templates/layout';
import HeaderView from './headerView';
import FooterView from './footerView';

export default class LayoutView extends Marionette.LayoutView {
    get template() {
        return template;
    }

    regions() {
        return {
            header: '#header',
            table: '#table-view',
            footer: '#footer'
        };
    }

    onBeforeShow() {
        this.getRegion('header').show(new HeaderView());
        this.getRegion('footer').show(new FooterView());
    }
}