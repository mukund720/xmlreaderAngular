$(document).ready(function(){

    var x=10; // your X iteration limit
    
    // load the xml data. it is parsed by jquery
    $.get("https://timesofindia.indiatimes.com/rssfeeds/1898055.cms", function(data) {
    var $xml = $(data);
    
    $xml.find("item").each(function(i, val) { // find the items in the rss and loop
    
    // create an item object with all the necessary information out of the xml
    var $this = $(this),
    item = {
      title: $this.find("title").text(),
      link: $this.find("link").text(),
      description: $this.find("description").text(),
      pubDate: $this.find("pubDate").text(),
      author: $this.find("author").text(),
      guid: $this.find("guid").text()
    };
    // replace the CDATA in the item title
    item.title = item.title.replace("<![CDATA[", "").replace("]]>", "");
    
    // #feed selects the ul element with the id feed
    // and append() appends a newly created li element
    // to the ul
    console.log(item);
    $('#feeds').append($('<li><a href="' +item.guid +'">' +item.title +'</a></li>'));
    
    return i<(x-1); // (stop after x iterations)
    });
    });
    });
    
        