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
    root.ApiDocumentation.GeoPointResourceReq = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GeoPointResourceReq model module.
   * @module model/GeoPointResourceReq
   * @version 1.0
   */

  /**
   * Constructs a new <code>GeoPointResourceReq</code>.
   * @alias module:model/GeoPointResourceReq
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GeoPointResourceReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoPointResourceReq} obj Optional instance to populate.
   * @return {module:model/GeoPointResourceReq} The populated <code>GeoPointResourceReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  return exports;

}));
