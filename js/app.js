(function () {

    /*
    Todo: Might make custom endpoints for images, verses and hadtihs
          Todo in local storage
          Execute scripts in background.js to load ahead of time
          Replace all CDNs with local files
     */

    /*
    Bugs: Time at 12:xx when in 12 hours format shows 00:xx
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
        "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress",
        "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/797643/pexels-photo-797643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/775687/pexels-photo-775687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1320459/pexels-photo-1320459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1405144/pexels-photo-1405144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/461763/pexels-photo-461763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/148291/pexels-photo-148291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/904373/pexels-photo-904373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/785405/pexels-photo-785405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/459124/pexels-photo-459124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1040495/pexels-photo-1040495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/757170/pexels-photo-757170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/700954/pexels-photo-700954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/417196/pexels-photo-417196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/612408/pexels-photo-612408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/589810/pexels-photo-589810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/584636/pexels-photo-584636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753869/pexels-photo-753869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/60088/pexels-photo-60088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1107556/pexels-photo-1107556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/690303/pexels-photo-690303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126386/pexels-photo-1126386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743381/pexels-photo-1743381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/176384/pexels-photo-176384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1379630/pexels-photo-1379630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/386158/pexels-photo-386158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547062/pexels-photo-547062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421898/pexels-photo-1421898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/575717/pexels-photo-575717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326337/pexels-photo-326337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1792202/pexels-photo-1792202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/217120/pexels-photo-217120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1750124/pexels-photo-1750124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5106/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460659/pexels-photo-460659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1322149/pexels-photo-1322149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/5065/forest-big-aerial-area.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/105244/pexels-photo-105244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/946343/pexels-photo-946343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/754738/pexels-photo-754738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1710006/pexels-photo-1710006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/58808/pexels-photo-58808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/916438/pexels-photo-916438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/975231/pexels-photo-975231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1363165/pexels-photo-1363165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/847236/pexels-photo-847236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/167843/milky-way-rocks-night-landscape-167843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/69794/morocco-africa-desert-marroc-69794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/962695/pexels-photo-962695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1674739/pexels-photo-1674739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/551859/pexels-photo-551859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/376706/pexels-photo-376706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/691574/pexels-photo-691574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1603821/pexels-photo-1603821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326916/pexels-photo-326916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355853/pexels-photo-355853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/428430/pexels-photo-428430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562462/pexels-photo-1562462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/204262/pexels-photo-204262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301391/pexels-photo-301391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/572939/pexels-photo-572939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1608379/pexels-photo-1608379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/547112/pexels-photo-547112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/432812/pexels-photo-432812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1029245/pexels-photo-1029245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/552788/pexels-photo-552788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1133504/pexels-photo-1133504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1561993/pexels-photo-1561993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1068737/pexels-photo-1068737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1212601/pexels-photo-1212601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1126918/pexels-photo-1126918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/226721/pexels-photo-226721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1199967/pexels-photo-1199967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/56610/starfish-sand-beach-sea-56610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1480600/pexels-photo-1480600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1774781/pexels-photo-1774781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188849/pexels-photo-1188849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1432066/pexels-photo-1432066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/137043/pexels-photo-137043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743363/pexels-photo-1743363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1650439/pexels-photo-1650439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188862/pexels-photo-1188862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1149674/pexels-photo-1149674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1405379/pexels-photo-1405379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/776326/pexels-photo-776326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/271462/nature-autumn-fall-foliage-271462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ""

















    ];

    console.log(getNumberOfDay());

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

    console.log(imageExists(backgrounds[backgrounds.length - 1]));

    // Set Background
    bodyElem.style.backgroundImage = "url(" + backgrounds[backgrounds.length - 1] + ")";

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

    // Method to get the day number, that will be used for index of wallpaper, ayah and hadith.
    // Return the day number of the year
    function getNumberOfDay() {
        var d = new Date();
        var days = [0, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return d.getDate() + days[d.getMonth()];
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

    // Check if image exists i.e if the image url is valid or not
    // Param: Image url
    // Returns Boolean
    function imageExists(url){
        var image = new Image();
        image.src = url;
        if (!image.complete) {
            return false;
        }
        else if (image.height === 0) {
            return false;
        }
        return true;
    }

    //Test Javascript Start


    //Test JavaScript End

})();
