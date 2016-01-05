import config from 'config';

export default class Model extends Backbone.Model {
    parse(data) {
        if (data.position <= config.maxLeaderPosition) {
            this.set('isLeader', true);
        } else if (data.position >= config.minOutsiderPosition) {
            this.set('isOutsider', true);
        }
        return data;
    }
}