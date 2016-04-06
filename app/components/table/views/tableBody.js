import ItemView from './itemView';

export default Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: ItemView
});