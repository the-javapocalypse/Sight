(function () {

    /*
    Todo: Might make custom endpoints for images, verses and hadtihs
          Todo in local storage
          Execute scripts in background.js to load ahead of time
          Replace all CDNs with local files
     */

    // References for HTML elements
    var bodyElem = document.getElementById('body');
    var timeElem = document.getElementById('time');
    var dateElem = document.getElementById('date');
    var favouritesElem = document.getElementById('favouritesDiv');
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
        "6718/",
    ];


    // Fetch and Set Background
    // const url = "https://api.pexels.com/v1/photos/" + backgrounds[index];
    // fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': '563492ad6f917000010000014f64c454dbfb46d2a1597f15f9783eb5',
    //     }
    // })
    //     .then(
    //         response => response.json() // .json(), etc.
    //         // same as function(response) {return response.text();}
    //     ).then(
    //     data => bodyElem.style.backgroundImage = "url(" + data['src']['original'] + ")"
    // );

    // Set Background
    bodyElem.style.backgroundImage = "url(\"https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")";

    // Set Current Time
    // param: 1 for 12 hours format
    //        0 for 24 hours format
    timeElem.innerHTML = getTime(1);

    // Set Current Date
    dateElem.innerHTML = getDate();

    // Set Ayah
    ayahElem.innerHTML = verses[index];

    // Set hadith
    hadeesElem.innerHTML = hadiths[index];

    // Method to calculate and format time
    // Returns a string containing time
    function getTime(twelvehour){
        // 12 hours format
        if (twelvehour){
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
            if (hr < 10) {
                hr = "0" + hr;
            }
            return hr + ':' + min + ' ' + ampm;
        }
        // 24 hours format
        else{
            var d = new Date();
            let hr = d.getHours();
            let min = d.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            if (hr < 10) {
                hr = "0" + hr;
            }
            return hr + ':' + min + ' ';
        }
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

    // Method to get most visited websites using chrome api
    // Returns: Nothing
    // Populate the list in dashboard.html with frequently visited websites
    function MostVisitedWebsites(mostVisitedURLs) {
        // get the list
        var ol = document.getElementById('favorites');

        for (var i = 0; i < mostVisitedURLs.length; i++) {
            // create new list item
            var li = ol.appendChild(document.createElement('li'));
            // add class for padding
            li.className = "p5";
            // create anchor element
            var a = li.appendChild(document.createElement('a'));
            // add class to remove anchor default styling
            a.className = "links text-color";
            // do the shit here
            a.href = mostVisitedURLs[i].url;
            let title = mostVisitedURLs[i].title;
            if(title.length > 20){
                title = title.slice(0,20) + '...';
            }
            a.appendChild(document.createTextNode(title));
        }
    }

    // Open the link in a new tab of the current window.
    // Not useful but well.. Might come in handy
    function onAnchorClick(event) {
        chrome.tabs.create({ url: event.srcElement.href });
        return false;
    }

    // Get most visited sites a.k.a favourites
    chrome.topSites.get(MostVisitedWebsites);

    // Toggle time between 12 hours and 24 hours format
    $('#isSelected24').bind('change', function () {
        if ($(this).is(':checked'))
            timeElem.innerHTML = getTime(0);
        else
            timeElem.innerHTML = getTime(1);

    });

    // Display/Hide Favourites
    $('#displayFavourites').bind('change', function () {
        if ($(this).is(':checked'))
            $("#favouritesDiv").addClass('hide');
        else
            $("#favouritesDiv").removeClass('hide');

    });




    //Test Javascript Start


    //Test JavaScript End

})();
