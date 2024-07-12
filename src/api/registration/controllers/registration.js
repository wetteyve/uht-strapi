"use strict";

/**
 * registration controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::registration.registration", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi
      .query("api::registration.registration")
      .count({ where: query });
  },
});
