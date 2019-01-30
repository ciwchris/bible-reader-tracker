if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/bible-reader-tracker/sw.js', { scope: '/bible-reader-tracker/' })
        .then(function(reg) {
            if (reg.installing) {
                console.log('Service worker installing');
            } else if (reg.waiting) {
                console.log('Service worker installed');
            } else if (reg.active) {
                console.log('Service worker active');
            }
        })
        .catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
        });
}

function setCompletetionDate(totalChapters, completedChapters) {
    if (completedChapters > 0) {
        var days = dayOfTheYear();

        var thisYear = new Date().getFullYear();
        var numberOfDaysToComplete = Math.ceil((days / completedChapters) * totalChapters);
        var endingDate = new Date(thisYear, 0, numberOfDaysToComplete);
        document.querySelector('#finish-date').textContent = endingDate.toLocaleDateString();
    } else {
        document.querySelector('#finish').style.display = 'none';
    }
}

function dayOfTheYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

var books = {};

idbKeyval.get('books').then(function(cacheBooks) {
    books = cacheBooks ? cacheBooks : initBooks();

    for (var book in books) {
        var count = 0;
        var checkboxes = document.querySelectorAll('#' + book + ' input[type=checkbox]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = books[book][i];
            if (checkboxes[i].checked) {
                count++;
            }
        }
        setBookPercentage(book, count);
    }

    setBiblePercentage();
});

function calculateBookPercentage(book) {
    var count = 0;
    var a = document.querySelectorAll('#' + book + ' input[type=checkbox]');
    var b = books[book];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i].checked;
        if (a[i].checked) {
            count++;
        }
    }

    setBookPercentage(book, count);
    setBiblePercentage();

    idbKeyval.set('books', books);
}

function setBiblePercentage() {
    var totalChapters = 1189;
    var completedChapters = 0;
    for (var name in books) {
        completedChapters += books[name].filter(chapterStatus => chapterStatus).length;
    }

    var percentComplete = Math.floor((completedChapters / totalChapters) * 100) + '%';
    document.querySelector('#complete').textContent = percentComplete;
    document.querySelector('#progress-bar').style.width = percentComplete;

    setCompletetionDate(totalChapters, completedChapters);
}

function setBookPercentage(book, count) {
    var percentage = Math.floor((count / books[book].length) * 100);
    document.querySelector('#' + book + '-badge').setAttribute('data-badge', percentage + '%');
}

function initBooks() {
    return {
        genesis: new Array(50),
        exodus: new Array(40),
        leviticus: new Array(27),
        numbers: new Array(36),
        deuteronomy: new Array(34),
        joshua: new Array(24),
        judges: new Array(21),
        ruth: new Array(4),
        firstsamuel: new Array(31),
        secondsamuel: new Array(24),
        firstkings: new Array(22),
        secondkings: new Array(25),
        firstchronicles: new Array(29),
        secondchronicles: new Array(36),
        ezra: new Array(10),
        nehemiah: new Array(13),
        esther: new Array(10),
        job: new Array(42),
        psalms: new Array(150),
        proverbs: new Array(31),
        ecclesiastes: new Array(12),
        song: new Array(8),
        isaiah: new Array(66),
        jeremiah: new Array(52),
        lamentations: new Array(5),
        ezekiel: new Array(48),
        daniel: new Array(12),
        hosea: new Array(14),
        joel: new Array(3),
        amos: new Array(9),
        obadiah: new Array(1),
        jonah: new Array(4),
        micah: new Array(7),
        nahum: new Array(3),
        habakkuk: new Array(3),
        zephaniah: new Array(3),
        haggai: new Array(2),
        zechariah: new Array(14),
        malachi: new Array(4),
        matthew: new Array(28),
        mark: new Array(16),
        luke: new Array(24),
        john: new Array(21),
        acts: new Array(28),
        romans: new Array(16),
        firstcorinthians: new Array(16),
        secondcorinthians: new Array(13),
        galatians: new Array(6),
        ephesians: new Array(6),
        philippians: new Array(4),
        colossians: new Array(4),
        firstthessalonians: new Array(5),
        secondthessalonians: new Array(3),
        firsttimothy: new Array(6),
        secondtimothy: new Array(4),
        titus: new Array(3),
        philemon: new Array(1),
        hebrews: new Array(13),
        james: new Array(5),
        firstpeter: new Array(5),
        secondpeter: new Array(3),
        firstjohn: new Array(5),
        secondjohn: new Array(1),
        thirdjohn: new Array(1),
        jude: new Array(1),
        revelation: new Array(22)
    };
}
