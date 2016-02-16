import Model from './model';
import config from 'config';

export default class Collection extends Backbone.Collection {
    get model() {
        return Model;
    }

    get url() {
        return config.mainUrl;
    }

    parse(data) {
        this.title = data.leagueCaption;
        return data.standing;
    }
}