import template from './templates/layout';
import { props } from 'decorators';

@props({
    regions: {
        'table': '#table-view'
    },
    template: template
})
export default class LayoutView extends Marionette.LayoutView {
}