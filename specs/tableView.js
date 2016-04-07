import TableBody from 'components/table/views/tableView';
import TableCollection from 'components/table/collection';

const should = chai.should();
let table;

describe('Table view', () => {
    before(() => {
        const data = {
            leagueCaption: 'Lorem Ipsum',
            standing: [
                {
                    position: 1,
                    teamName: 'Lorem',
                    playedGames: 10,
                    points: 30
                },
                {
                    position: 20,
                    teamName: 'Ipsum',
                    playedGames: 10,
                    points: 30
                }
            ]
        };
        let collection = new TableCollection();
        collection.add(data, {parse: true});
        table = new TableBody({collection: collection});
        table.render();
    });
    it('should has title', () => {
        table.$el.find('caption').text().should.be.equal('Lorem Ipsum');
    });
    it('should has leader', () => {
        let $leaderEl = table.$el.find('tr').first();
        $leaderEl.attr('class').should.be.equal('table-info');
    });
    it('should has 4 columns', () => {
        let $rows = table.$el.find('tr');
        $rows.each((index, row) => {
            $(row).find('td').length.should.be.equal(4);
        });
    });
    it('should has outsider', () => {
        let $outsiderEl = table.$el.find('tr').last();
        $outsiderEl.attr('class').should.be.equal('table-danger');
    });
});