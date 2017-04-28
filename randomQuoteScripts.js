$(document).ready(function () {
    /*function used to tweet the quote*/
    $(document).on('mouseenter', tweetFunction);
    function tweetFunction() {
        $(document).off('mouseenter', tweetFunction);
        var texts = document.getElementById("tweet-container").innerText;
        twttr.widgets.createShareButton(
        "\/web\/tweet-button",
        document.getElementById("tweet-container"),
        {
            size: "large",
            text: texts,
            hashtags: "quotes",
            via: "twitter",
            related: "twitterapi,twitter"
        }
      );
    }

    var currentQuote;
    $("#quoteGenerator").click(function () {
        
        /*random generator for quotes JSON, assume to update with other data types*/
        var quoteFromJSONData = {
            "culture": ["They always say time changes things but you actually have to change them yourself.", "Dont spend time beating on a wall hoping to transform it into a door. ", "Dont waste your time with explanations people only hear what they want to hear.", "It is the time you have wasted for your rose that makes your rose so important.”,“You can have it all. Just not all at once.", "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.", "Time you enjoy wasting is not wasted time.” ,“Time flies like an arrow; fruit flies like a banana."],
            "author": ["― Andy Warhol, The Philosophy of Andy Warhol", "― Coco Chanel", "― Paulo Coelho", "― Antoine de Saint-Exupéry, The Little Prince", "― Oprah Winfrey", "― Mother Teresa", "― Marthe Troly-Curtin, Phrynette Married", "― Anthony G. Oettinger"],
            "favourite": "my favourite quote is do your best",
            "relationship": {
                "friendship": "quote for friendship",
                "love": "quote for love"
            },
            "war": "war is disaster"
        }
        //Store in local storage
        myJSONData = JSON.stringify(quoteFromJSONData);
        localStorage.setItem("storedData", myJSONData);
        // to retrive it
        var myText = localStorage.getItem("storedData");
        var JSData = JSON.parse(myText);
        /*total number of quotes*/
        var len = JSData.culture.length;
        /*randomly slect from the first to last*/
        var num = Math.floor(Math.random() * len);
        var currentQuote = JSData.culture[num];
        var currentAuthor = JSData.author[num];
        var colorSmallValue, colorAllValue, colorAllValueBK, colorLargeValue, quoteColor, quoteBK;

        /*random generator for colors*/
        colorSmallValue = Math.floor(Math.random() * 50);
        colorAllValue = Math.floor(Math.random() * 255);
        colorAllValueBK = Math.floor(Math.random() * 100);
        colorLargeValue = Math.floor(Math.random() * 100) + 155;
        //rgba(29, 79, 115, 1)
        quoteColor = "RGB(" + colorLargeValue + ", " + colorAllValue + ", " + colorLargeValue + ")";
        quoteBK = "RGB(" + colorSmallValue + ", " + colorAllValueBK + ", " + colorSmallValue + ")";

        /*Random Quote Function*/
        $('.quoteMsg').html("\"" + currentQuote + "\"");

        $('.quoteAuthor').html(currentAuthor);
        /*Random color generators*/
        $('.quoteContainer').css({ "color": quoteColor, "background-color": quoteBK });
        tweetFunction();
    });

});