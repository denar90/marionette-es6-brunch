import ItemView from 'components/table/views/itemView';
import ItemModel from 'components/table/model';

const should = chai.should();
let itemView;
let counter = 0;
const testData = [
    {
        position: 1,
        teamName: 'Lorem',
        playedGames: 10,
        points: 30
    },
    {
        position: 20,
        teamName: 'Lorem',
        playedGames: 10,
        points: 30
    },
    {
        position: 10,
        teamName: 'Lorem',
        playedGames: 10,
        points: 30
    }
];

describe('Table item view', () => {
    beforeEach(() => {
        let model = new ItemModel(testData[counter], {parse: true});
        itemView = new ItemView({model: model});
        itemView.render();
    });

    it('should has leader css-class', () => {
        itemView.$el.hasClass('table-info').should.be.true;
    });
    it('should has outsider css-class', () => {
        itemView.$el.hasClass('table-danger').should.be.true;
    });
    it('should has no css classes', () => {
        itemView.$el.hasClass('table-info').should.be.false;
        itemView.$el.hasClass('table-danger').should.be.false;
    });
    afterEach(() => {
        counter ++;
    });
});