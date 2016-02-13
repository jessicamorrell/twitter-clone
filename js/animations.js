$(document).ready(function() {
	//$('#char-count').hide();
	//$('#tweet-submit').hide();
	jQuery(document).ready(function() {
  		jQuery("time.timeago").timeago();
	});
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css({
			height: '5em'
		})
		$('#char-count').show();
		$('#tweet-submit').show();
	})
	$('.tweet-compose').on('keyup keydown', function() {
		var maxCharLength = 140;
		var currentTweetLength = $(this).val().length;
		var charCountRemaining = $('#char-count').text(maxCharLength - currentTweetLength);
		if (maxCharLength - currentTweetLength <= 10) {
			$('#char-count').css("color", "red");
			if (maxCharLength - currentTweetLength >= 10) {
				$('#char-count').css("color", "#999");
			}
		}
		var currentTweet;
		// attempting to disable typing once charCountRemaining is less than 0. Also disabling button
		if (maxCharLength - currentTweetLength > 0) {
			currentTweet = $('#tweet-compose').text();
		}
		if (maxCharLength - currentTweetLength < 0) {
			//$('tweet-submit').prop('disabled', true);
			$('#tweet-compose').text(currentTweet);
		}
 	})
	//cloning tweet and sending it to stream(firstTweet)
 	 $('#tweet-submit').on('click', function() {
 		var tweetClone = $('#content1').clone();
 		var tweetText = $('.tweet-compose').val();
 		var tweetName = $('.tweetName').text();
 		var getTimeAgo = jQuery.timeago(new Date());
 		tweetClone.find('.tweet-text').text(tweetText);
 		tweetClone.find('.fullname').text(tweetName);
 		tweetClone.find('.avatar').attr("src", "file:///Users/jessicamorrell/Dropbox/JessicaCoding/DevMountain/twitter-clone/img/alagoon.jpg");
 		tweetClone.find('.time').text(getTimeAgo);
 		tweetClone.prependTo($('.firstTweet'));
 		localStorage.tweet = tweetClone.find('.tweet-text').text(tweetText);
 	})
 	 // show/hide reply, retweet, etc when mouseover/mouseleave
 	 $('.tweet-actions').hide();
 	 $('.tweet').mouseover(function() {
 	 	$(this).find('.tweet-actions').show('slow');
 	 })

 	 $('.tweet').mouseleave(function() {
 	 	$('.tweet-actions').hide('slow');
 	 })

 	 //show/hide stats with mouseover/mouseleave
 	 $('.stats').hide();
 	 $('.tweet').on('click', function() {
 	 	$(this).find('.stats').show('slow');
 	 })
 	 $('.tweet').on('dblclick', function() {
 	 	$(this).find('.stats').hide('slow');
 	 })




})