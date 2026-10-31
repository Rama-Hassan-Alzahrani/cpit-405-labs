// ===================== DOM references =====================
let likeBtn = document.getElementById("like-btn");
let dislikeBtn = document.getElementById("dislike-btn");
let likeCount = document.getElementById("like-count");
let dislikeCount = document.getElementById("dislike-count");
let commentInput = document.getElementById("comment-input");
let submitBtn = document.getElementById("submit-btn");
let clearBtn = document.getElementById("clear-btn");
let commentsList = document.getElementById("comments-list");
let message = document.getElementById("message");

// ===================== Initial state =====================
// Starting counts (the votes of other users)
let initialLikes = 100;
let initialDislikes = 20;

let likes = initialLikes;
let dislikes = initialDislikes;

// Array to store comments
let comments = [];

// ===================== Cookie helpers =====================
// Set a cookie that lasts 7 days (max-age is in seconds)
function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; max-age=" + 7 * 24 * 60 * 60 + "; path=/";
}

// Read a cookie by name. Returns null if it doesn't exist.
function getCookie(name) {
    let myCookies = document.cookie.split(";");
    for (let i = 0; i < myCookies.length; i++) {
        let pair = myCookies[i].trim().split("=");
        if (pair[0] === name) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

// Delete a cookie by setting its expiry date to a past date
function deleteCookie(name) {
    document.cookie = name + "=; expires=" + new Date(2000, 0, 1).toUTCString() + "; path=/";
}

// ===================== Update the UI =====================
function updateUI() {
    likeCount.innerText = likes;
    dislikeCount.innerText = dislikes;

    // If the user already voted, disable both buttons
    let vote = getCookie("vote");
    likeBtn.disabled = vote !== null;
    dislikeBtn.disabled = vote !== null;

    // Mark the button the user chose
    likeBtn.classList.remove("chosen");
    dislikeBtn.classList.remove("chosen");
    if (vote === "like") {
        likeBtn.classList.add("chosen");
    } else if (vote === "dislike") {
        dislikeBtn.classList.add("chosen");
    }

    // If the user already commented, disable the comment box
    let hasCommented = getCookie("comment") !== null;
    commentInput.disabled = hasCommented;
    submitBtn.disabled = hasCommented;
    if (hasCommented) {
        commentInput.placeholder = "You have already commented.";
    } else {
        commentInput.placeholder = "Write a comment...";
    }

    // Show the comments
    commentsList.innerHTML = "";
    for (let i = 0; i < comments.length; i++) {
        let li = document.createElement("li");
        li.innerText = comments[i];
        commentsList.appendChild(li);
    }
}

// ===================== Load state from cookies =====================
function loadFromCookies() {
    let vote = getCookie("vote");
    if (vote === "like") {
        likes = initialLikes + 1;
    } else if (vote === "dislike") {
        dislikes = initialDislikes + 1;
    }

    let savedComment = getCookie("comment");
    if (savedComment !== null) {
        comments.push(savedComment);
    }

    updateUI();
}

// ===================== Event handlers =====================

// Like button
likeBtn.addEventListener("click", function () {
    if (getCookie("vote") !== null) {
        return; // already voted
    }
    likes++;
    setCookie("vote", "like");
    updateUI();
});

// Dislike button
dislikeBtn.addEventListener("click", function () {
    if (getCookie("vote") !== null) {
        return; // already voted
    }
    dislikes++;
    setCookie("vote", "dislike");
    updateUI();
});

// Submit comment
submitBtn.addEventListener("click", function () {
    let text = commentInput.value.trim();

    if (text === "") {
        message.innerText = "Please write a comment first.";
        return;
    }
    if (getCookie("comment") !== null) {
        message.innerText = "You can only comment once.";
        return;
    }

    comments.push(text);
    setCookie("comment", text);
    commentInput.value = ""; // clear the input field
    message.innerText = "Comment added!";
    updateUI();
});

// Clear (reset) button
clearBtn.addEventListener("click", function () {
    let ok = confirm("Are you sure you want to reset your vote and comment?");
    if (!ok) {
        return;
    }

    deleteCookie("vote");
    deleteCookie("comment");

    likes = initialLikes;
    dislikes = initialDislikes;
    comments = [];
    commentInput.value = "";

    message.innerText = "Your vote and comment have been reset. You can vote again.";
    updateUI();
});

// ===================== Page load =====================
loadFromCookies();
