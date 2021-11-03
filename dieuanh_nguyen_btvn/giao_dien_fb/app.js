let posts = [];
for (let i=0;i<100;i++){
    posts.push(
        {
            "message": i%2===0?"Hom nay troi hoi xau":"Hom nay troi dep qua !",
            "time": "2021-09-17T00:00:00Z",
            "user": "Dieu Anh "+i,
            "likes": [
                {
                    name: "Victoria Beckham"
                },
                {
                    name: "Miranda Kerr"
                },
                {
                    name: "Adele hat hay"
                }
            ],
            "comments": [
                {
                    name: "Lisa Blackpink",
                    message: "Di choi thoi Dieu Anh",
                    time: "2021-09-20T02:00:00Z",
                },
                {
                    name: "Rose Blackpink",
                    message: "Lisa noi dung y minh hihi",
                    time: "2021-10-21T02:00:00Z",
                },
                {
                    name: "Adele hat hay",
                    message: "Minh moi ra bai hat moi ne, cac ban nghe ung ho di :D.",
                    time: "2021-10-23T02:00:00Z",
                }
            ]
        }
    );
}
let lastLoadItems = -1;

$(document).ready(function(){
    $('form#new-status').dirtyForms();
    loadMoreItems(5);
    $("#darkmodeSwitch").on("change",function(){
        let darkmode = $(this).prop("checked");
        $("body").toggleClass("darkmode",darkmode);
        $("#darkmodeLabel").css("color",darkmode?"white":"black");
    });
    $("form").on("submit",function(e){
        e.preventDefault();
        let message = $("#postStatus").val();
        console.log(message);
        if (message === ""){
            alert("Can phai nhap noi dung status !");
            $("#postStatus").focus();
        }
        else {
            $("#postStatus").val("");
            let $template = createPostTemplate(
                {
                    "message": message,
                    "time": moment().format(),
                    "user": "Dieu Anh ",
                }
            );
            $("#news-feed").prepend(
                $template
            );
        }
    });
    $(window).on("scroll",function(){
        if($(window).scrollTop() + $(window).height() === $(document).height()) {
            if (lastLoadItems<posts.length - 1){
                let nbItemsToLoad = Math.min(posts.length-lastLoadItems+1,5);
                loadMoreItems(nbItemsToLoad);
            }
            else{
                
            }
        }
    });
});


function loadMoreItems(nbItems){
    for(let i=0;i<nbItems;i++){
        let post = posts[lastLoadItems+i+1];
        let $template = createPostTemplate(post);
        $("#news-feed").append($template);
    }
    lastLoadItems +=nbItems;
}

function createPostTemplate(post){
    let now = moment();
    let $template = $("#news-feed-template").clone(true).removeAttr("id");
    let $commentTemplate = $template.find("#comment-template").clone(true).removeAttr("id");
    let postTime = moment(post.time);
    let postTimeText = postTime.fromNow();
    console.log(postTime.diff(now,"days",true));
    if (now.diff(postTime,"days",true)>2){
        postTimeText = postTime.format("HH:mm DD/MM/YYYY")
    }
    $template.find(".post-user").text(post.user);
    $template.find(".post-message").text(post.message);
    $template.find(".post-time").text(postTimeText);
    if (!!post.likes){
        $template.find(".post-like-btn").attr("title",post.likes.map(function(likeItem){
            return likeItem.name;
        }).join(", "));
        $template.find(".post-like-btn").tooltip();
    }
    if (!!post.comments){
        post.comments.forEach(function(comment){
            let $comment = $commentTemplate.clone(true);
            $comment.find(".comment-user").text(comment.name);
            $comment.find(".comment-message").text(comment.message);
            $comment.find(".comment-time").text(moment(comment.time).fromNow());
            $template.find(".comments").append($comment);
        });
    }
    return $template;
}