


function loadDirectory() {
        var request = new XMLHttpRequest;
        var self = this;

        // Handles the response received from sending (request.send()) our request
        

        // Initialize a GET request to retrieve the ROM from our roms folder
        request.open('GET', 'roms/games');
        request.responseType = 'text';

        //console.log(request)

        // Send the GET request
        request.send();

        return request.response;
    }


