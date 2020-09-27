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
    define(['ApiClient', 'model/PatchUserAdminDto', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PatchUserAdminDto'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.AdminRestServiceApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.PatchUserAdminDto, root.ApiDocumentation.UserResource);
  }
}(this, function(ApiClient, PatchUserAdminDto, UserResource) {
  'use strict';

  /**
   * AdminRestService service.
   * @module api/AdminRestServiceApi
   * @version 1.0
   */

  /**
   * Constructs a new AdminRestServiceApi. 
   * @alias module:api/AdminRestServiceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the updateUserAdminUsingPATCH operation.
     * @callback module:api/AdminRestServiceApi~updateUserAdminUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateUserAdmin
     * @param {String} userId userId
     * @param {module:model/PatchUserAdminDto} userPatch userPatch
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rawStatusCode 
     * @param {module:model/String} opts.statusCode 
     * @param {module:api/AdminRestServiceApi~updateUserAdminUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResource}
     */
    this.updateUserAdminUsingPATCH = function(userId, userPatch, opts, callback) {
      opts = opts || {};
      var postBody = userPatch;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserAdminUsingPATCH");
      }

      // verify the required parameter 'userPatch' is set
      if (userPatch === undefined || userPatch === null) {
        throw new Error("Missing the required parameter 'userPatch' when calling updateUserAdminUsingPATCH");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'rawStatusCode': opts['rawStatusCode'],
        'statusCode': opts['statusCode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/v1/admin/users/{userId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserToAdminUsingPUT operation.
     * @callback module:api/AdminRestServiceApi~updateUserToAdminUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateUserToAdmin
     * @param {String} email email
     * @param {module:api/AdminRestServiceApi~updateUserToAdminUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.updateUserToAdminUsingPUT = function(email, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling updateUserToAdminUsingPUT");
      }


      var pathParams = {
        'email': email
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v1/admin/users/{email}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
