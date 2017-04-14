//(function () {
    'use strict'
/*
    //var tableData = JSON.parse(data);
    var container = document.getElementById('container');
    var tag = '';

    for (var i = 0; i < data.length; i++) {

        if (data[i].finished) {
            tag = tag + ' <div name="lecture" class="horizontal-box completed">';
        } else {
            tag = tag + ' <div name="lecture" class="horizontal-box ">';
        }

        tag = tag + ' <div class="date-time-box"><div class="date-box">Пн,10</div><div class="time-box">12:00</div><div class="room-box">Синий кит</div></div>'
            + '<div class="lecture-box"><div class="title-box"><h2>' + data[i].title
            + '</h2></div><div class="author-box"><span class="author-tip" name="author">' + data[i].author.name
            + '<span class="author-info"><h4>' + data[i].author.name + '</h4>' + data[i].author.info
            + '</span></div></div>';
        if (data[i].school.length > 0) {

            var schoolTag = '<div class="school-box" name="school">';

            for (var j = 0; j < data[i].school.length; j++) {

                var school = data[i].school[j];
                if (school.interface) {

                    schoolTag = schoolTag + '<div class="school-id interface">' + school.interface + '</div>'

                }
                if (school.design) {
                    schoolTag = schoolTag + '<div class="school-id design">' + school.design + '</div>'
                }
                if (school.mobile) {
                    schoolTag = schoolTag + '<div class="school-id mobile">' + school.mobile + '</div>'
                }

            }

            schoolTag = schoolTag + '</div>';
            tag = tag + schoolTag;

        }

        if (data[i].finished) {
            tag = tag + '<div class="lecture-button-box"> <a href="lecture.html" class="link-button">Смотреть</a></div>';
        }

        tag = tag + '</div>';
    }

    console.log(tag);

    container.innerHTML = tag;

*/
    function filter() {

        /* show divs hidden by previous search*/

        showNodes(document.getElementsByName('lecture'));

        var filter = document.getElementById('filter');
        var filterOpt = filter.options[filter.selectedIndex].value;
        var filterVal = document.getElementById('filter-val').value;

        var nodesToHide = [];

        if (filterOpt === 'author') {

            var authors = document.getElementsByName('author');
            for (var i = 0; i < authors.length; i++) {

                if (!authors[i].innerHTML.toLowerCase().includes(filterVal.toLowerCase())) {
                    nodesToHide.push(authors[i].parentNode.parentNode.parentNode);
                }
            }

            hideNode(nodesToHide);
        } else if (filterOpt === 'school') {


            var schools = document.getElementsByName('school');
            for (var i = 0; i < schools.length; i++) {

                var school = schools[i];
                var hasValue = false;

                for (var j = 0; j < school.children.length; j++) {
                    var childElement = school.children[j];

                    if (childElement.innerHTML.toLowerCase().includes(filterVal.toLowerCase())) {
                        hasValue = true;
                    }
                }
                if (!hasValue) {
                    nodesToHide.push(school.parentNode);
                }
            }

            hideNode(nodesToHide);
        }
    }

    function hideNode(nodesToHide) {
        // var container = document.getElementById('container');
        for (var i = 0; i < nodesToHide.length; i++) {
            //  container.removeChild(nodesToHide[i]);
            nodesToHide[i].style.visibility = 'hidden';
            nodesToHide[i].style.overflowY ='hidden';
            nodesToHide[i].style.minHeight = 0;
            nodesToHide[i].style.marginTop = 0;
            nodesToHide[i].style.marginBottom = 0;


        }

    }

    function showNodes(nodesToShow) {

        for (var i = 0; i < nodesToShow.length; i++) {
            nodesToShow[i].style.visibility = 'visible';
            nodesToShow[i].style.minHeight = 120;
            nodesToShow[i].style.marginTop = 20;
            nodesToShow[i].style.marginBottom = 10;
             }


    }


//})();






