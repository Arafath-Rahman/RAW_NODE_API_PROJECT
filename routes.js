/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Arafath Rahman Khan
 * Date: 19/03/2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
