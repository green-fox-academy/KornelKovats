import test from 'tape';
import pokerPlay from './poker';

test('which has the highest card from the deck', (t) => {
  const deckWhite: string[] = ['2H', '3D', '5S', '9C', 'KD'];
  const deckBlack: string[] = ['5H', '5H', '5S', '9C', 'KD'];
  t.equals(pokerPlay(deckWhite, deckBlack), 'White wins!');
  t.end();
});
test('which has the highest card from the deck', (t) => {
  const deckWhite: string[] = ['3H', '3D', '5S', '9C', 'KD'];
  const deckBlack: string[] = ['5H', '5H', '5S', '9C', 'KD'];
  t.equals(pokerPlay(deckWhite, deckBlack), 'White wins!');
  t.end();
});


