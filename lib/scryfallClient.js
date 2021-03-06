/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a ScryfallClient. */
class ScryfallClient extends ServiceClient {
  /**
   * Create a ScryfallClient.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(baseUri, options) {

    if (!options) options = {};

    super(null, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://api.scryfall.com';
    }

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.sets = new operations.Sets(this);
    this.cards = new operations.Cards(this);
    this.rulings = new operations.Rulings(this);
    this.symbology = new operations.Symbology(this);
    this.catalogOperations = new operations.CatalogOperations(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = ScryfallClient;
module.exports['default'] = ScryfallClient;
module.exports.ScryfallClient = ScryfallClient;
module.exports.ScryfallModels = models;
