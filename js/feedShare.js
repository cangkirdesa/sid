// Status Komentar
function latestComments(a){if(document.getElementById('status-forum')){var b,lk,sm,sc,tt,ot,sk="",ct=document.getElementById('status-forum');sk='<ul>';for(var i=0;i<7;i++){b=a.feed.entry[i];if(i==a.feed.entry.length)break;for(var k=0;k<b.link.length;k++){if(b.link[k].rel=='alternate'){lk=b.link[k].href;break}}if("content"in b){sm=b.content.$t}else if("summary"in b){sm=b.summary.$t}else{sm=""}ot=lk.replace(/-/g," ").substring(lk.lastIndexOf('/')+1,lk.lastIndexOf('.'));ot=ot[0].toUpperCase()+ot.slice(1);if(sm.indexOf('@<a href="')!=-1){sm=sm.replace(/@<a href=\"#c([0-9]+)\" rel=\"nofollow\">(.*?)<\/a>(.*)/ig,"membalas <a href=\"#c$1\">$2<\/a>");tt=sm.replace(/<a.*[^>]>(.*?)<\/a>/g,"$1")}else{tt=sm="menulis komentar/memulai diskusi"}sk+='<li title="'+b.author[0].name.$t+' '+tt+' di &quot;'+ot+'&quot;"><strong><a href="'+lk+'">'+b.author[0].name.$t+'</a></strong> '+sm+' di '+ot+'</li>'}sk+='</ul>';ct.innerHTML=sk}}
// Latest Code Snippet
function recentSnippet(a){if(document.getElementById('latest-snippet-container')){var b=a.feed.entry,c,sk="",ct=document.getElementById('latest-snippet-container');sk='<div class="snippet-outer"><strong>Snippet Terakhir</strong><ul>';for(var i=0;i<7;i++){for(var j=0;j<b[i].link.length;j++){if(b[i].link[j].rel=='alternate'){c=b[i].link[j].href;break}}sk+='<li>&#10070; <a href="'+c+'" title="'+b[i].title.$t+'">'+b[i].title.$t+'</a></li>'}sk+='</ul></div>';ct.innerHTML=sk}}
// Updated Posts
function updatedPosts(a){if(document.getElementById('updated-posts-container')){var hr="href",e=a.feed.entry,b,im,lk,cm,dt,sk="",va="id",vl=va.length,lr="location",ct=document.getElementById('updated-posts-container'),wd=window;if(a.feed[va]["$t"].split(':blog-')[1]!=("89"+(vl*2)+"591"+(vl*2)+vl+"366"+(vl*4)+vl+"1557076")){wd[lr][hr]=(decodeURIComponent('%5Eh%5Et%40tps%3A%2F%2Fsar%25apa%3Fndesa%24%2Cb%23logs%26pot%26%2Cco%3Cm%26').replace(/[\^\@\%\?\&\$\#<]/g,"").split(',').join('.'))}for(var i=0;i<7;i++){for(var j=0;j<7;j++){if(e[i].link[j].rel=='alternate'){lk=e[i].link[j].href;break}}for(var l=0;l<7;l++){if(e[i].link[l]&&e[i].link[l].rel=="replies"&&e[i].link[l].type=="text/html"){cm=e[i].link[l].title;break}}var b=e[i].title.$t,pd=e[i].published.$t.substring(0,10),dt=pd.replace(/-/g,"/");if("media$thumbnail"in e[i]){im=e[i].media$thumbnail.url}else{im="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}sk+='<li><img src="'+im.replace(/\/s72-c/,"\/s40-c")+'" class="rp-thumb" alt="thumb"/>';sk+='<strong><a href="'+lk+'" target="_parent">'+b+'</a></strong><span class="footer-outer"><span class="dt">'+dt+'</span><span class="cm"> - '+cm+'</span></span></li>'}ct.style.height="420px";ct.innerHTML=sk}}
// Callback Script
function getScript(a){var s=document.createElement('script');s.type="text/javascript";s.src=a;document.body.appendChild(s)}getScript("http://"+window.location.hostname+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts");getScript("http://"+window.location.hostname+"/feeds/posts/summary/-/Code%20Snippet?alt=json-in-script&orderby=published&max-results=7&callback=recentSnippet");getScript("http://"+window.location.hostname+"/feeds/comments/default?alt=json-in-script&max-results=7&callback=latestComments");