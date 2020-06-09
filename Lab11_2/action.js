(function() {

    $(function() {
        $("#search-btn").click(fetchData);
        $("#search-btn").click(getPosts);
    });

    function fetchData() {
        let userId = $("#user-id").val();
        getUserById(userId);
        getPosts(userId);
    }

    function getUserById(userId) {
        $("#userinfo-box").empty();
        $("#myposts").empty();
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => displayUserInfo(data));
    }

    function displayUserInfo(userInfo) {
        $("#userinfo-box").append($("<p>", {
            "id": `username-${userInfo.id}`,
            "text": `Name: ${userInfo.username}`,
        })).append($("<p>", {
            "id": `email-${userInfo.id}`,
            "text": `Email: ${userInfo.email}`,
        })).append($("<p>", {
            "id": `email-${userInfo.id}`,
            "text": `Address: ${userInfo.address.street}, ${userInfo.address.suite}, 
            ${userInfo.address.zipcode}`,
        }));
    }

    function getPosts(userId) {

        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(data => displayAllPost(data));

    }

    function displayAllPost(posts) {

        $("#myposts").append($("<h2>", {
            "text": "My Posts",
            "id": "post-heading"
        }));

        posts.forEach(post => {
            $("#myposts").append($("<div>", {
                    "id": `post-${post.id} post-box`,
                }).append($("<h3>", {
                    "class": "post-title",
                    "text": post.title,
                })).append($("<p>", {
                    "class": "post-body",
                    "text": post.body,
                })).append($("<button>", {
                    "id": `button${post.id}`,
                    "class": "comment-btn",
                    "text": "View comments",
                }).click(getComments))
                .append($("<div>", {
                    "id": `commentbox-${post.id}`,
                    "class": "comment-box"
                })).append($("<hr>")));
        });
    }

    function getComments(e) {
        let postId = e.target.id.replace(/[^\d.]/g, '');

        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => displayComments(data, postId));
    }

    function displayComments(comments, postId) {
        console.log(comments);
        comments.forEach(comment => {
            $(`#commentbox-${postId}`).append($("<div>", {
                "id": `comment-${comment.id}`,
            }).append($("<h5>", {
                "class": "comment-title",
                "text": comment.name,
            })).append($("<p>", {
                "class": "comment-body",
                "text": comment.body,
            })));
        });
    }
})();