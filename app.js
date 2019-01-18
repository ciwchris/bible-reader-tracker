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
    exodus: 0
};

function displayBooks() {}

// displayBooks();

function test(book, chapters) {
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
