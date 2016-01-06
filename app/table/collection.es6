import Model from './model';
import config from 'config';
import { props } from 'decorators';

@props({
    url: config.mainUrl,
    model: Model
})
export default class Collection extends Backbone.Collection {
    parse(data) {
        this.title = data.leagueCaption;
        return data.standing;
    }
}