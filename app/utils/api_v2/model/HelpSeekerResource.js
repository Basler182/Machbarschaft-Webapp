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
    define(['ApiClient', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.HelpSeekerResource = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.UserResource);
  }
}(this, function(ApiClient, UserResource) {
  'use strict';

  /**
   * The HelpSeekerResource model module.
   * @module model/HelpSeekerResource
   * @version 1.0
   */

  /**
   * Constructs a new <code>HelpSeekerResource</code>.
   * @alias module:model/HelpSeekerResource
   * @class
   * @param enteredBy {module:model/UserResource} 
   * @param source {module:model/HelpSeekerResource.SourceEnum} 
   */
  var exports = function(enteredBy, source) {
    this.enteredBy = enteredBy;
    this.source = source;
  };

  /**
   * Constructs a <code>HelpSeekerResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HelpSeekerResource} obj Optional instance to populate.
   * @return {module:model/HelpSeekerResource} The populated <code>HelpSeekerResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enteredBy'))
        obj.enteredBy = UserResource.constructFromObject(data['enteredBy']);
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = UserResource.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * @member {module:model/UserResource} enteredBy
   */
  exports.prototype.enteredBy = undefined;

  /**
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {module:model/HelpSeekerResource.SourceEnum} source
   */
  exports.prototype.source = undefined;

  /**
   * @member {module:model/UserResource} user
   */
  exports.prototype.user = undefined;


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
