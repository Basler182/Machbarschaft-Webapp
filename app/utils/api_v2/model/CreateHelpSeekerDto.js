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
    root.ApiDocumentation.CreateHelpSeekerDto = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateHelpSeekerDto model module.
   * @module model/CreateHelpSeekerDto
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateHelpSeekerDto</code>.
   * @alias module:model/CreateHelpSeekerDto
   * @class
   * @param fullName {String} 
   * @param phone {String} 
   * @param source {module:model/CreateHelpSeekerDto.SourceEnum} 
   */
  var exports = function(fullName, phone, source) {
    this.fullName = fullName;
    this.phone = phone;
    this.source = source;
  };

  /**
   * Constructs a <code>CreateHelpSeekerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateHelpSeekerDto} obj Optional instance to populate.
   * @return {module:model/CreateHelpSeekerDto} The populated <code>CreateHelpSeekerDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {module:model/CreateHelpSeekerDto.SourceEnum} source
   */
  exports.prototype.source = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "ADMIN"
     * @const
     */
    ADMIN: "ADMIN",

    /**
     * value: "APP"
     * @const
     */
    APP: "APP",

    /**
     * value: "HOTLINE"
     * @const
     */
    HOTLINE: "HOTLINE"
  };

  return exports;

}));
