import Model from './model';
import config from 'config';

export default Backbone.Collection.extend({
    model: Model,
    url: config.mainUrl,

    parse(data) {
        this.title = data.leagueCaption;
        return data.standing;
    }
});