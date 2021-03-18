/*
 * Title: Not Found Hamdler
 * Description: 404- Not found Handler
 * Author: Md. Arafath Rahman Khan
 * Date: 19/03/2021
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};
module.exports = handler;
