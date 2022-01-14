'use strict';

class Article {
  /** @type {string} */
  #headline;

  /** @type {string} */
  #post;
  
  /**
   * @param {string} headline 
   * @param {string} post 
   */
  constructor(headline, post) {
    this.#headline = headline;
    this.#post = post;
  }

  /**
   * @returns {string}
   */
  headline() {
    return this.#headline;
  }

  /**
   * @returns {string}
   */
  post() {
    return this.#post;
  }

  /**
   * @returns {void}
   */
  print() {
    console.log(this.#headline);
    console.log('---');
    console.log(this.#post);
  }
}

let article = new Article('My Headline', 'This is a new cool feature.');
article.print();