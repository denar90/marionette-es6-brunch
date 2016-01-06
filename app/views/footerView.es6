import template from 'templates/footer';
import { props } from 'decorators';

@props({
    template: template
})
export default class ItemView extends Marionette.ItemView {
}