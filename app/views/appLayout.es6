import template from 'templates/layout';
import HeaderView from './headerView';
import FooterView from './footerView';
import { props } from 'decorators';

@props({
    regions: {
        header: '#header',
        table: '#table-view',
        footer: '#footer'
    },
    template: template
})
export default class LayoutView extends Marionette.LayoutView {
    onBeforeShow() {
        this.header.show(new HeaderView());
        this.footer.show(new FooterView());
    }
}