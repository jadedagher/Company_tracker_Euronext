/**
 * Companytarget.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true, // important à mettre "securité"


  attributes: {

    cname: {
      type: "string",
      required: true
    },
  
    authorIdfirstname: {
      type: "string",
      required: true
    },

    authorIdlastname: {
      type: "string",
      required: true
    },

    authorDepartment: {
      type: "string",
      required: true
    },

    how: {
      type: "string",
      required: true
    },

    url: {
      type: "string",
      required: true
    },

    hashtag: {
      type: "string",
      required: false
    },

    favorite: {
      type: "boolean",
      defaultsTo: false
    },



  },

};