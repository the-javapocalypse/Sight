(function () {

    var bodyElem = document.getElementById('body');
    var timeElem = document.getElementById('time');
   
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
        data => bodyElem.style.backgroundImage = "url(" + data['src']['original'] + ")"
    );

    // Current Date
    var today = '';
    var d = new Date();
    today += d.getDate() + '-';
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today += months[d.getMonth()] + '-';
    today += d.getFullYear();

    // Current Time
    timeElem.innerHTML = getTime();

    // Method to calculate and format time
    // Returns a string containing time
    function getTime(){
        let hr = d.getHours();
        let min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        let ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }
        return hr + ':' + min + ' ' + ampm;
    }

    function MostVisitedWebsites(mostVisitedURLs) {
        var popupDiv = document.getElementById('favorites');
        var ol = popupDiv.appendChild(document.createElement('ol'));

        for (var i = 0; i < mostVisitedURLs.length; i++) {
            var li = ol.appendChild(document.createElement('li'));
            var a = li.appendChild(document.createElement('a'));
            a.href = mostVisitedURLs[i].url;
            a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
            a.addEventListener('click', onAnchorClick);
        }
    }
    // Open the link in a new tab of the current window.
    function onAnchorClick(event) {
        chrome.tabs.create({ url: event.srcElement.href });
        return false;
    }


    chrome.topSites.get(MostVisitedWebsites);


    //Test Javascript Start

    //Test JavaScript End

})();
