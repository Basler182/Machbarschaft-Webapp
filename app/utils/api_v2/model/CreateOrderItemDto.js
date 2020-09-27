/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.CreateOrderItemDto = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateOrderItemDto model module.
   * @module model/CreateOrderItemDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateOrderItemDto</code>.
   * @alias module:model/CreateOrderItemDto
   * @class
   * @param description {String} 
   */
  var exports = function(description) {
    this.description = description;
  };

  /**
   * Constructs a <code>CreateOrderItemDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrderItemDto} obj Optional instance to populate.
   * @return {module:model/CreateOrderItemDto} The populated <code>CreateOrderItemDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  return exports;

}));
