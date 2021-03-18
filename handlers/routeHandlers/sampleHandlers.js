/*
 * Title: Sample Hamdler
 * Description: Sample Handler
 * Author: Md. Arafath Rahman Khan
 * Date: 19/03/2021
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url!',
    });
};

module.exports = handler;
