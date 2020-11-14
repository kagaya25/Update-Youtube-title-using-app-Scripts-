

function updateTitle() {
  
  var videoID = '7Ax2W919oMQ'; https://youtu.be/7Ax2W919oMQ
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var ViewsCount = video.statistics.viewCount;
  var LikeCount = video.statistics.likeCount;
  var DislikeCount = video.statistics.dislikeCount;
  var CommentCount = video.statistics.commentCount;
  var videoTitle = 'Youtube API using App Scripts ' + ' This video has ' + ViewsCount + ' views and ' + LikeCount + ' likes and ' + DislikeCount + ' dislikes and ' + CommentCount + ' comments!';
  
  video.snippet.title = videoTitle;
  YouTube.Videos.update(video, part);
    
}
