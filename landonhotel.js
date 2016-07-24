$("document").ready(function () {
    // select the H2 headings in the content section - these contain the text for the links
    var headings = $(".content h2");
    // create a new empty UL tag to hold the list of links
    var list = $("<ul id='bookmarks'>");
    // we need a counter to make sure each anchor tag has a unique name
    var counter = 0;

    // for each one of the H2s, create a named anchor to link to and a link for the list
    headings.each(function(indx, elem) {
        // set the HTML of this H2 to contain the new anchor tag that is the link destination
        $(this).html("<a name='bookmark" + counter + "'></a>" + $(this).html());
        // now make a new LI tag for the list that links to the anchor tag and has the text of the H2
        list.append($("<li><a href='#bookmark" + counter + "'> " + $(this).text() + "</a></li>"));
        counter++;
    });
    // when we're done, insert the list after the H1 heading that lists the specials
    $(".content h1").after(list);
});
