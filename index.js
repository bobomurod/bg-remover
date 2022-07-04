let  request = require('request');
let fs = require('fs');

request.post({
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
        image_url: ''
    }

})
