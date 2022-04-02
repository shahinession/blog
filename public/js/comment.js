const commentSection = document.querySelector('.comment__boxes');

document.getElementById('btnSubmitComment').addEventListener('click', function () {
    var newComment = document.getElementById('txComment').value.replace(/\n/g, "<br>");
    var newPostRef = commentsRef.push();
    newPostRef.set({
        name: document.getElementById('tbName').value.trim(),
        comment: newComment.trim(),
        frompage: location.pathname,
        when: firebase.database.ServerValue.TIMESTAMP
    });
});

function showpastcomments() {
    var showat = document.getElementById('pastComments');
    var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
    commentsRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            var itemData = itemSnapshot.val();
            var comment = itemData.comment;
            var name = itemData.name;
            var when = new Date(itemData.when).toLocaleDateString("en-us");
            showat.innerHTML += "<li>" + comment + "<span> -- " + name + " (" + when + ")</span></li>";
        })
    })
}
showpastcomments();