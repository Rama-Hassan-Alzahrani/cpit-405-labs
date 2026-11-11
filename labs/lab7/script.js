// Unsplash Access Key
let accessKey = "3czuKpTBrBw_H3krS4tEmUjWKPXh2gEmt7yCnew9Bx8";
let url = "https://api.unsplash.com/search/photos";

let btnXHR = document.getElementById("xhrSearch");
let btnFetch = document.getElementById("fetchSearch");
let btnFetchAsyncAwait = document.getElementById("fetchAsyncAwaitSearch");
let searchText = document.getElementById("search-text");
let searchResults = document.getElementById("searchResults");

// Create an <img> for each photo in the JSON response
function showImages(data) {
    for (let i = 0; i < data.results.length; i++) {
        let img = document.createElement("img");
        img.src = data.results[i].urls.small;
        img.alt = data.results[i].alt_description;
        searchResults.appendChild(img);
    }
}

// ===================== 1) XMLHttpRequest =====================
btnXHR.addEventListener("click", function () {
    // clear previous search results
    searchResults.innerHTML = "";
    searchUnsplash_UsingXHR(searchText.value);
});

function searchUnsplash_UsingXHR(keyword) {
    if (!keyword) {
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            showImages(data);
        }
    };
    xhr.open("GET", url + "?query=" + keyword, true);
    xhr.setRequestHeader("Authorization", "Client-ID " + accessKey);
    xhr.send();
}

// ===================== 2) fetch with promises =====================
btnFetch.addEventListener("click", function () {
    // clear previous search results
    searchResults.innerHTML = "";
    searchUnsplash_UsingFetch(searchText.value);
});

function searchUnsplash_UsingFetch(keyword) {
    if (!keyword) {
        return;
    }
    fetch(url + "?query=" + keyword, {
        method: "GET",
        headers: {
            "Authorization": "Client-ID " + accessKey
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showImages(data);
        })
        .catch(function (e) {
            console.error(e);
        });
}

// ===================== 3) fetch with async/await =====================
btnFetchAsyncAwait.addEventListener("click", function () {
    // clear previous search results
    searchResults.innerHTML = "";
    searchUnsplash_UsingFetchAsyncAwait(searchText.value)
        .catch(function (e) {
            console.error(e);
        });
});

async function searchUnsplash_UsingFetchAsyncAwait(keyword) {
    if (!keyword) {
        return;
    }
    let response = await fetch(url + "?query=" + keyword, {
        method: "GET",
        headers: {
            "Authorization": "Client-ID " + accessKey
        }
    });
    let data = await response.json();
    showImages(data);
}

// ===================== Keyboard event =====================
// Press Enter in the search box to search
searchText.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        btnFetchAsyncAwait.click();
    }
});
