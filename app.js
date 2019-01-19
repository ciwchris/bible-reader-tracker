if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('bible-reader-tracker/sw.js', { scope: '/bible-reader-tracker/' })
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

var totalChapters = 1189;

var books = {
    genesis: 0,
    exodus: 0,
    leviticus: 0,
    numbers: 0,
    deuteronomy: 0,
    joshua: 0,
    judges: 0,
    ruth: 0,
    firstsamuel: 0,
    secondsamuel: 0,
    firstkings: 0,
    secondkings: 0,
    firstchronicles: 0,
    secondchronicles: 0,
    ezra: 0,
    nehemiah: 0,
    esther: 0,
    job: 0,
    psalms: 0,
    proverbs: 0,
    ecclesiastes: 0,
    song: 0,
    isaiah: 0,
    jeremiah: 0,
    lamentations: 0,
    ezekiel: 0,
    daniel: 0,
    hosea: 0,
    joel: 0,
    amos: 0,
    obadiah: 0,
    jonah: 0,
    micah: 0,
    nahum: 0,
    habakkuk: 0,
    zephaniah: 0,
    haggai: 0,
    zechariah: 0,
    malachi: 0,
    matthew: 0,
    mark: 0,
    luke: 0,
    john: 0,
    acts: 0,
    romans: 0,
    firstcorinthians: 0,
    secondcorinthians: 0,
    galatians: 0,
    ephesians: 0,
    philippians: 0,
    colossians: 0,
    firstthessalonians: 0,
    secondthessalonians: 0,
    firsttimothy: 0,
    secondtimothy: 0,
    titus: 0,
    philemon: 0,
    hebrews: 0,
    james: 0,
    firstpeter: 0,
    secondpeter: 0,
    firstjohn: 0,
    secondjohn: 0,
    thirdjohn: 0,
    jude: 0,
    revelation: 0
};

function calculateBookPercentage(book, chapters) {
    var count = 0;
    document.querySelectorAll('#' + book + ' input[type=checkbox]').forEach(function(checkbox) {
        if (checkbox.checked) {
            count++;
        }
    });
    books[book] = count;
    var completedChapters = 0;
    for (var name in books) {
        completedChapters += books[name];
    }
    document.querySelector('#complete').textContent =
        Math.floor((completedChapters / totalChapters) * 100) + '%';
    var percentage = Math.floor((count / chapters) * 100);
    document.querySelector('#' + book + '-badge').setAttribute('data-badge', percentage + '%');
}
