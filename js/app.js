(function () {


    const url = "https://api.pexels.com/v1/photos/6718/";
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': '563492ad6f917000010000014f64c454dbfb46d2a1597f15f9783eb5',
        }
    })
        .then(
            response => response.json() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
        data => document.getElementById('body').style.backgroundImage = "url(" + data['src']['original'] + ")"
    );

    var today = '';
    var d = new Date();
    today += d.getDate() + '-';
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today += months[d.getMonth()] + '-';
    today += d.getFullYear();
    console.log(today);


})();
