var project = [
    {
        "name" : "8 Tiles Java Game",
        "description" : "Sliding puzzle game done using JavaFX",
        "technologies" : "",
        "link" : "https://github.com/harsh0596/8-Tiles",
        "image" : "https://i.stack.imgur.com/fypmW.png"
    },
    
    {
        "name" : "Javascript Calculator",
        "description" : "Using pure HTML, CSS, Javascript and JQuery",
        "technologies" : "",
        "link" : "https://github.com/harsh0596/javascript-calculator",
        "image" : "https://image.prntscr.com/image/N2N4RGsdTPy01I80r6--wg.png"
    },
    
    {
        "name" : "IT 202",
        "description" : "A set of mini projects done for a UIC class: IT 202",
        "technologies" : "",
        "link" : "https://github.com/harsh0596/IT202",
        "image" : "https://image.prntscr.com/image/dCocPolIQpOkG0vkZMhW9g.png"
    },
]

$.each(project, function(i,v) {
    $("#myportfolio").append(
        '<div class="card" style="width: 20rem;">' +
            '<img class="card-img-top" src="' + v.image + '" alt="Card image cap">' +
            '<div class="card-block">' +
                '<h4 class="card-title">' + v.name + '</h4>' +
                '<p class="card-text">' + v.description + '</p>' + 
                '<a href="' + v.link + '" class="btn btn-primary">Github Link</a>' +
            '</div>' +
        '</div><br>'
    );
})