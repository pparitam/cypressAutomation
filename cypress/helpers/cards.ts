import { brand, locale } from "cypress/support/e2e";

class Cards {

  visa: CardDetails = {
    name: 'Visa',
    cardNo: '4111111111111111',
    end: '1111',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '737',
  };

  master: CardDetails = {
    name: 'Master',
    cardNo: '5555444433331111',
    end: '1111',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '737',
  };

  masterUS: CardDetails = {
    name: 'Master',
    cardNo: '5454 5454 5454 5454',
    end: '0008',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '737',
  };

  amex: CardDetails = {
    name: 'Amex',
    cardNo: '370000000100018',
    end: '0018',
    owner: 'test',
    date: '03/30',
    month: '03',
    year: '2030',
    code: '7373',
  };

  getCards() {
    const cards: { [key: string]: CardDetails } = {
      visa: this.visa,
      master: this.master,
      masterUS: this.masterUS,
      amex: this.amex
    };
    if ((brand == 'karenmillen.com' || brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
      delete cards.master;
    } else {
      delete cards.masterUS
    }

    return Object.values(cards);
  }

  getCard(index) {
    const cards = this.getCards();
    const cardTypes = Object.keys(cards);
    const selectedCardType = cards[cardTypes[index]];

    return selectedCardType;
  }

  getLength() {
    return this.getCards().length
  }

}

const card = new Cards();
export default card;