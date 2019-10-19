var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//parent/super class
var loc = /** @class */ (function () {
    function loc(name, address, zipCode, image, city, date) {
        this.name = name;
        this.address = address;
        this.zipCode = zipCode;
        this.image = image;
        this.city = city;
        this.date = date;
    }
    loc.prototype.disPlace = function () {
        return document.getElementById("locations").innerHTML += "\n                <div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2\">\n                    <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\"> " + this.address + ", " + this.zipCode + this.city + "</p>\n                    </div>\n                <div class=\"card-footer\">\n                    <small>Added: " + this.date + "</small>\n                </div>\n                </div>\n         ";
    };
    return loc;
}());
var placeArray = [];
placeArray.push(new loc("St. Charles Church", "Karlsplatz 1", 1010, "img/stcharles.jpg", " Vienna", "30.10.2019 12:30"));
placeArray.push(new loc("Zoo Vienna", "Maxingstraße 13b", 1030, "img/zoovienna.jpg", " Vienna", "18.11.2019 09:30"));
placeArray.push(new loc("St. Stephens Church", "Stephansplatz 3", 1010, "img/stephansdom.jpg", " Vienna", "14.10.2019 10:15"));
placeArray.push(new loc("Rathaus", "Friedrich-Schmidt-Platz 1", 1010, "img/rathaus.jpg", " Vienna", "18.12.2019 10:00"));
var eat = /** @class */ (function (_super) {
    __extends(eat, _super);
    function eat(name, address, zipCode, image, city, date, phoneN, type, webAddress) {
        var _this = _super.call(this, name, address, zipCode, image, city, date) || this;
        _this.phoneN = phoneN;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    eat.prototype.disPlace = function () {
        return document.getElementById("restaurants").innerHTML += "\n        <div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2\">\n            <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + this.name + "</h5>\n                <p><a href=\"" + this.webAddress + "\">" + this.webAddress + "</a></p>\n                <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                <p><a href=\"" + this.phoneN + "\">" + this.phoneN + "</a></p>\n                <p class=\"font-italic\">" + this.type + "</p>\n            </div>\n            <div class=\"card-footer\">\n                <small>Added: " + this.date + "</small>\n            </div>\n        </div>\n        ";
    };
    return eat;
}(loc));
placeArray.push(new eat("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "img/lemonleaf.png", " Vienna", "24.10.2019 08:30", "+43 1 58 123 08", "Asian", "http://www.lemonleaf.at/"));
placeArray.push(new eat("SIXTA", "Schönbrunner Straße 21", 1050, "img/sixta.png", " Vienna", "03.12.2019 16:00", "+43 1 58 528 56", "Austrian", "http://www.sixta-restaurant.at/"));
placeArray.push(new eat("ULRICH", "Sankt-Ulrichs-Platz 1", 1070, "img/ulrich.jpg", " Vienna", "10.12.2019 06:30", "+43 01 9612782", "Breakfast", "http://www.ulrichwien.at/"));
placeArray.push(new eat("Schnitzelwirt 52", "Neubaugasse 52", 1070, "img/schnitzel.jpg", " Vienna", "06.11.2019 14:00", "+43 01 5233771", "Austrian", "https://www.schnitzelwirt.co.at/"));
var music = /** @class */ (function (_super) {
    __extends(music, _super);
    function music(name, address, zipCode, image, city, date, eventD, eventT, ticketPrice, webAddress) {
        var _this = _super.call(this, name, address, zipCode, image, city, date) || this;
        _this.eventD = eventD;
        _this.eventT = eventT;
        _this.ticketPrice = ticketPrice;
        _this.webAddress = webAddress;
        return _this;
    }
    music.prototype.disPlace = function () {
        return document.getElementById("events").innerHTML +=
            "<div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2\">\n                <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p><a href=\"" + this.webAddress + "\">" + this.webAddress + "</a></p>\n                    <p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n                    <p class=\"font-italic\">" + this.eventD + " " + this.eventT + "</p>\n                    <p class=\"ticket\"><i class=\"fas fa-euro-sign font-weight-bold\"></i> " + this.ticketPrice + "</p>\n                </div>\n                <div class=\"card-footer\">\n                    <small>Added: " + this.date + "</small>\n                </div>\n            </div>\n          ";
    };
    return music;
}(loc));
placeArray.push(new music("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "img/kris.jpg", "Vienna", "10.10.2019 10:00", "Fr., 15.11.2019", "20:00", 58.50, "http://kriskristofferson.com/"));
placeArray.push(new music("Lenny Kravitz", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "img/lenny.jpg", "Vienna", "28.10.2019 17:30", "Sat, 09.12.2019", "19:30", 47.80, "http://www.lennykravitz.com/"));
placeArray.push(new music("Caribou", "Planet.tt Bank Austria Halle Gasometer", 1110, "img/caribou.jpg", "Vienna", "25.11.2019 09:15", "Fr., 24.04.2020", "20:00", 36.50, "https://www.caribou.fm/"));
placeArray.push(new music("Milky Chance", "Planet.tt Bank Austria Halle Gasometer", 1110, "img/milkychance.jpg", "Vienna", "05.11.2019 07:00", "Fr, 28.02.2020", "18:00", 40.20, "https://www.milkychance.net/"));
for (var obj in placeArray) {
    placeArray[obj].disPlace();
}
// navbar scroll function //
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 540) {
        $('.fixed-top').css('background', 'transparent');
        $('.nav-link').css('color', 'white');
    }
    else {
        $('.fixed-top').css('background', 'white');
        $('.nav-link').css('color', 'black');
    }
});
function sortDesc() {
    placeArray.sort(function (a, b) {
        var first = new Date(a.date);
        var second = new Date(b.date);
        return first.getTime() - second.getTime();
    });
}
function sortAsc() {
    placeArray.sort(function (a, b) {
        var first = new Date(a.date);
        var second = new Date(b.date);
        return second.getTime() - first.getTime();
    });
}
