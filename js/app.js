(function () {

    /*
    Todo: Might make custom endpoints for images, verses and hadtihs
          Todo in local storage
          Execute scripts in background.js to load ahead of time
          Replace all CDNs with local files
     */

    /*
    Bugs: Time at 12:xx when in 12 hours format shows 00:xx
          Local Image loads before the actual image. Replace it by sight logo maybe?
     */

    /*
    Link for Ayats: https://www.ultraupdates.com/2015/07/beautiful-inspirational-islamic-quran-quotes-verses-in-english/
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
        'And He found you lost and guided [you]. (93:7)',
        "O mankind! Verily, the Promise of Allah is true. So let not this present life deceive you. (35:5)",
        "Allah has promised those who believe and do righteous deeds [that] for them there is forgiveness and great reward. (5:9)",
        "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses. (55:19-20)",
        "And your Lord says, \"Call upon Me; I will respond to you.\"... (40:60)",
        "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (39:53)",
        "Guide us to the straight path. (1:6)",
        "Is there not in Hell a residence for the arrogant? (39:60)",
        "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. (94:5-6)",
        "Do they not see the birds controlled in the atmosphere of the sky? none holds them up except Allah. Indeed in that are signs for a people who believe. (16:79)",
        "So be patient. Indeed, the promise of ALLAH is truth. (30:60)",
        "Our Lord, forgive me and my parents and (all) the believers on the Day when the reckoning will be established. (14:41)",
        "And for those who fear Allah, He will make their path easy. (65:4)",
        "Allah does not burden a soul beyond that it can bear. (2:286)",
        "Did he not realise that Allah is watching? (96:14)",
        "and Allah is the best of providers. (62:11)",
        "Indeed, Prayer prohibits immorality and wrongdoing. (29:45)",
        "And seek help in patience and prayers. (2:45)",
        "It is He who created the heavens and earth in six days and then established Himself above the Throne. (57:4)",
        "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing. (57:4)",
        "Indeed, my Lord is the Hearer of supplication. (14:39)",
        "and He is with you wherever you are. (57:4)",
        "This is the book about which there is no doubt, A guidance for those conscious of Allah. (2:2)",
        "And Say, \"My lord, Increase me in knowledge\". (20:114)",
        "And Allah is with the believers. (8:19)",
        "Assuredly, Allah knows what they conceal and what they declare. (16:23)",
        "Indeed, He does not like the arrogant. (16:23)",
        "[Allah] said, \"Fear not. Indeed, I am with you both; I hear and I see. (20:46)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. (21:107)",
        "And We created you in pairs. (78:8)",
        "They are [varying] degrees in the sight of Allah, and Allah is Seeing of whatever they do. (3:163)",
        "And be patient, [O Muhammad], for the decision of your Lord, for indeed, you are in Our eyes. (52:48)",
        "My mercy encompasses all things. (7:156)",
        "And you do not will except that Allah wills. Indeed, Allah is ever Knowing and Wise. (76:30)",
        "Unquestionably, to Allah belongs whatever is in the heavens and the earth. (10:55)",
        "Indeed, the patient will be given their reward without account. (39:10)",
        "So remember Me; I will remember you. (2:152)",
        "And my success is not but through Allah. Upon him I have relied, and to Him I return. (11:88)",
        "So which of the favors of your Lord would you deny? (55:13)",
        "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" (13:16)",
        " Say, \" Allah is the Creator of all things, and He is the One, the Prevailing.\" (13:16)",
        "And, [O Muhammad], say, \"My Lord, forgive and have mercy, and You are the best of the merciful.\" (23:118)",
        "say, \"Indeed we belong to Allah, and indeed to Him we will return.\" (2:156)",
        "So whoever does an atom's weight of good will see it. (99:7)",
        "And never say of anything, \"Indeed, I will do that tomorrow,\" Except [when adding], \"If Allah wills.\" (18:23-24)",
        "O you who have believed, remember Allah with much remembrance. (33:41)",
        "Indeed, my Lord is near and responsive. (11:61)",
        "My Lord, build for me near You a house in Paradise... (66:11)",
        "Surely, Good deeds erase bad deeds. (11:114)",
        "And whoever is guided is only guided for [the benefit of] himself. (27:92)",
        "And rely upon Allah ; and sufficient is Allah as Disposer of affairs. (33:3)",
        "Sufficient for us is Allah, and [He is] the best Disposer of affairs. (3:173)",
        "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing. (36:38)",
        "And We have certainly beautified the nearest heaven with stars. (67:5)",
        "Say, \"It is Allah who saves you from it and from every distress; then you [still] associate others with Him.\" (6:64)",
        "And do good to parents, and relatives, and orphans, and the needy.. (2:83)",
        "And Speak to people Kindly. (2:83)",
        "And it is He who created the night and the day and the sun and the moon. (21:33)",
        "And when I am ill, it is He who cures me. (26:80)",
        "The day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart. (26:88-89)",
        "And it will be said to them, \"Where are those you used to worship other than Allah ? Can they help you or help themselves?\" (26:92-93)",
        "And when you have decided, then rely upon Allah . Indeed, Allah loves those who rely [upon Him]. (3:159)",
        "And We have made some of you [people] as trial for others - will you have patience? And ever is your Lord, Seeing. (25:20)",
        "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient. (2:155)",
        "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate. (11:90)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. (16:128)",
        "And worship your Lord until there comes to you the certainty (death). (15:99)",
        "And do good; indeed, Allah loves the doers of good. (2:195)",
        "And hold firmly to the rope of Allah all together and do not become divided. (3:103)",
        "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better. (41:34)",
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted. (49:13)",
        "Every soul will taste death. (3:185)",
        "And what is the life of this world except the enjoyment of delusion. (3:185)",
        "And all of them are coming to Him on the Day of Resurrection alone. (19:95)",
        "And ease for me my task. (20:26)",
        "So when the Qur'an is recited, then listen to it and pay attention that you may receive mercy. (7:204)",
        "Say, \"Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.\" (62:8)",
        "[O Men] Are you a more difficult creation or is the heaven? Allah constructed it. (79:27)",
        "And when you testify, be just, even if [it concerns] a near relative. (6:152)",
        "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor], but if you deny, indeed, My punishment is severe.' (14:7)",
        "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? (3:160)",
        "And upon Allah let the believers rely. (3:160)",
        "Indeed, Allah [alone] has knowledge of the Hour and sends down the rain and knows what is in the wombs. (31:34)",
        "And no soul perceives what it will earn tomorrow, and no soul perceives in what land it will die. (31:34)",
        "Indeed, Allah is Knowing and Acquainted. (31:34)",
        "The life of this world is only the enjoyment of Deception. (3:185)",
        "And your Lord says, \"Call upon Me; I will respond to you.\" (40:60)",
        "and Allah would not punish them while they seek forgiveness. (8:33)",
        "So remember Me; I will remember you. (2,152)",
        "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts. (64:4)"
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
        "https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/217120/pexels-photo-217120.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1004119/pexels-photo-1004119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054164/pexels-photo-1054164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/910310/pexels-photo-910310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/55821/pyrenees-mountains-snow-zenith-55821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/708972/pexels-photo-708972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/757142/pexels-photo-757142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1320755/pexels-photo-1320755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/920041/pexels-photo-920041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/267025/pexels-photo-267025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/731753/pexels-photo-731753.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1094551/pexels-photo-1094551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/994076/pexels-photo-994076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/326238/pexels-photo-326238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/640838/pexels-photo-640838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/464327/pexels-photo-464327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/941801/pexels-photo-941801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/997664/pexels-photo-997664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/698333/pexels-photo-698333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/941744/pexels-photo-941744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/972391/pexels-photo-972391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1769879/pexels-photo-1769879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/248796/pexels-photo-248796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/137043/pexels-photo-137043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1743363/pexels-photo-1743363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1650439/pexels-photo-1650439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1188862/pexels-photo-1188862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/366283/tianjin-twilight-city-scenery-366283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258108/pexels-photo-258108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/95816/pexels-photo-95816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/80454/tree-desert-namibia-dead-vlei-80454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1352857/pexels-photo-1352857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/751748/pexels-photo-751748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/542608/pexels-photo-542608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/688565/pexels-photo-688565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/237273/pexels-photo-237273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1437115/pexels-photo-1437115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/569391/pexels-photo-569391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/357089/pexels-photo-357089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1624441/pexels-photo-1624441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/23274/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/87118/pexels-photo-87118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1064129/pexels-photo-1064129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2402/landscape-nature-forest-lake.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1088672/pexels-photo-1088672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1555922/pexels-photo-1555922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/21704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/64705/frozen-berries-red-fruits-64705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/214130/pexels-photo-214130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/91505/pexels-photo-91505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/258108/pexels-photo-258108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/95816/pexels-photo-95816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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

    try{
        let idx = getNumberOfDay() - 1;
        // Just making sure. Yk, It will work fine but just double checking for bugs lol
        if(idx < 0)
            idx = 0;
        else if(idx > 366 || idx > (backgrounds.length - 1))
            idx = backgrounds.length - 1;
        // Check if img exists at url
        // Set Background
        if(imageExists(backgrounds[idx]))
            bodyElem.style.backgroundImage = "url(" + backgrounds[idx] + ")";
        // If image does not exists, substitute it with local img. Boom baby!
        else
            bodyElem.style.backgroundImage = "url('../img/bg.jpeg')";
    }catch (e) {
        // If anything decides to screw up, use local img as the background
        bodyElem.style.backgroundImage = "url('../img/bg.jpeg')";
    }



    // Set Current Time
    // param: 1 for 12 hours format
    //        0 for 24 hours format
    timeElem.innerHTML = getTime(1);

    // Set Current Date
    dateElem.innerHTML = getDate();

    // Set Ayah
    ayahElem.innerHTML = verses[ verses.length - 1 ];

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

            var _img=document.createElement('img');
            _img.src="https://plus.google.com/_/favicon?domain_url=" + mostVisitedURLs[i].url;
            _img.id="foo"+i;
            _img.className = "liFavicon";
            li.appendChild(_img);

            // create anchor element
            var a = li.appendChild(document.createElement('a'));
            // add class to remove anchor default styling
            a.className = "links text-color";
            // do the shit here
            a.href = mostVisitedURLs[i].url;
            let title = mostVisitedURLs[i].title;
            if(title.length > 20){
                title = title.slice(0,15) + '...';
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
