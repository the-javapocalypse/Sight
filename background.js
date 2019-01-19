(function () {

    // Refrences for HTML elements
    var bodyElem = document.getElementById('body');
    var timeElem = document.getElementById('time');
    var dateElem = document.getElementById('date');
    var ayahElem = document.getElementById('ayah');
    var hadeesElem = document.getElementById('hadees');
    var index = 0;

    // Quranic Verses
    var verses = [
        'And He found you lost and guided [you] (93:7)'
    ];

    // Hadiths
    var hadiths = [
        'Those who are merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth and the One in the heavens will have mercy upon you. (Sunan al-Tirmidhī 1924)'
    ];

    //Background Image Links
    var backgrounds = [
        "https://api.pexels.com/v1/photos/6718/",
    ];

    // Fetch and Set Background
    const url = backgrounds[index];
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


    // Set Current Time
    timeElem.innerHTML = getTime();

    // Set Current Date
    dateElem.innerHTML = getDate();

    // Set Ayah
    ayahElem.innerHTML = verses[index];

    // Set hadith
    hadeesElem.innerHTML = hadiths[index];

    // Method to calculate and format time
    // Returns a string containing time
    function getTime(){
        var d = new Date();
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

    // Method to calculate and format date
    // Returns a string containing date
    function getDate() {
        var today = '';
        var d = new Date();
        today += d.getDate() + ' ';
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        today += months[d.getMonth()];
        return today;
    }

    function MostVisitedWebsites(mostVisitedURLs) {
        // var popupDiv = document.getElementById('favorites');
        // var ol = popupDiv.appendChild(document.createElement('ol'));

        var ol = document.getElementById('favorites');

        for (var i = 0; i < mostVisitedURLs.length; i++) {
            var li = ol.appendChild(document.createElement('li'));
            li.className = "p5";
            var a = li.appendChild(document.createElement('a'));
            a.className = "links text-color";
            a.href = mostVisitedURLs[i].url;
            let title = mostVisitedURLs[i].title;
            if(title.length > 20){
                title = title.slice(0,20) + '...';
            }
            a.appendChild(document.createTextNode(title));

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
