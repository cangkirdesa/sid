/**
 * Blogger Quick Search Result JSON
 * Author: Kang Onk
 * URL: https://kang-onk.blogspot.com
 */
 
 var searchFormConfig = {
    url: "https://"+window.location.hostname+"", // URL Blog
    numPost: 9999, // Jumlah maksimal temuan
    summaryPost: true, // 'true' jika ingin menampilkan deskripsi posting
    summaryLength: 100, // Jumlah karakter ringkasan posting
    resultTitle: "Hasil", // Judul hasil pencarian
    noResult: "Tidak di temukan hasil dengan kata kunci yang anda cari", // Deskripsi 'tak ditemukan'
    resultThumbnail: true, // 'true' untuk menampilkan thumbnail posting
    thumbSize: 40, // Ukuran & resolusi thumbnail
    fallbackThumb: "data:image/png;base64,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" // Fallback thumbnail untuk posting tak bergambar
};

// Just a shortcut for document.getElementById();
function getId(id) {
	return document.getElementById(id);
}

var config = searchFormConfig,
	input = getId('feed-q-input'),
	resultContainer = getId('search-result-container'),
	resultLoader = getId('search-result-loader'),
	skeleton = '';

// The Most Basic :: JSON caller function to display the list of posts in the container
function showResult(json) {
	var entry = json.feed.entry ? json.feed.entry : "", url, summary, img;
	skeleton  = '<h4>' + config.resultTitle + ' &quot;' + input.value + '&quot;</h4>';
  skeleton += '<a class="closed-box" href="#close" title="Close" onclick="resultContainer.style.display=\'none\';return false;">&times;</a><ol>';
	if (entry === "") {
		skeleton += '<li>' + config.noResult + '</li>';
	}
	for (var i = 0; i < config.numPost; i++) {
		if (i == entry.length) break;
		var mark = new RegExp(input.value, "ig"), entries = entry[i], title = entries.title.$t.replace(mark, "<mark>"+input.value+"</mark>");
		for (var j = 0; j < entries.link.length; j++) {
			if (entries.link[j].rel == 'alternate') {
				url = entries.link[j].href;
				break;
			}
		}
		summary = ("summary" in entries && config.summaryPost === true) ? entries.summary.$t : "";
		if (config.resultThumbnail === true) {
			img = ("media$thumbnail" in entries) ? entries.media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s"+config.thumbSize+"-c") : config.fallbackThumb;
		}
		summary = summary.replace(/<(.*?)>/g, "");
		if (summary.length > config.summaryLength) {
			summary = summary.substring(0, config.summaryLength) + '...';
		}
		summary = summary.replace(mark, "<mark>"+input.value+"</mark>");
		skeleton += '<li><img style="width:'+config.thumbSize+'px;height:'+config.thumbSize+'px;" src="'+img+'" alt="" /><a href="'+url+'">'+title+'</a>'+summary+'</li>';
	}
	skeleton += '</ol>';
	resultContainer.innerHTML = skeleton;
	resultLoader.style.display = "none";
	resultContainer.style.display = "block";
}

// Insert an empty <script> tag with ID of 'search-feed-script'
(function() {
	var s = document.createElement('script');
		s.type = "text/javascript";
		s.id = "search-feed-script";
	document.getElementsByTagName('head')[0].appendChild(s);
})();

// Used to manipulate the 'q' parameter value in the 'search-feed-script' based on keywords that written in the search input
function updateScript() {
	resultContainer.style.display = "none";
	resultLoader.style.display = "block";
	var script = getId('search-feed-script'),
		newScript = document.createElement('script');
	newScript.id = "search-feed-script";
	newScript.type = "text/javascript";
	newScript.src = config.url+"/feeds/posts/summary?alt=json-in-script&q="+input.value+"&max-results="+config.numPost+"&callback=showResult";
	// Remove the empty script that we crated before...
	script.parentNode.removeChild(script);
	// Then, insert a new script with the callback of showResult() fuunction based on the 'q' parameter value of input.value
	// So, the result will be like this => https://blog_name.blogspot.com/feeds/posts/summary?alt=json-in-script&q=QUERIES&max-results=XXXX&callback=showResult
	document.getElementsByTagName('head')[0].appendChild(newScript);
	return false;
}

// Used to hide the search result container when the search input value is empty
function resetField() {
	if (input.value === "") {
		resultContainer.style.display = "none";
		resultLoader.style.display = "none";
	}
}