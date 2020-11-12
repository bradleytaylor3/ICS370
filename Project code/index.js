function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    }
}

function populateGoals() {
    $.get('/courses.php?major=1', function(courses) {
    });
}

function getGoalOne() {
    $.get('/secondaryrequirements.php?goal=1', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            var courseName = value[1];
            if (courseName == 'WRIT-121' || courseName == 'WRIT-131' || courseName == 'WRIT-132') {
                $('#goal-1-1-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            } else if (courseName == 'WRIT-231' || courseName == 'WRIT-232' || courseName == 'WRIT-261' || courseName == 'WRIT-271' || courseName == 'WRIT-331') {
                $('#goal-1-2-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            } else {
                $('#goal-1-3-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            }
        });
    });
}

function getGoalThree() {
    $.get('/secondaryrequirements.php?goal=3', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            if (!value[1].search(/\w{4}-\d{3}L/)) {
                $('#goal-3-lab-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            } else {
                $('#goal-3-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            }
        });
    });
}

function getGoalFour() {
    $.get('/secondaryrequirements.php?goal=4', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-4-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalFive() {
    $.get('/secondaryrequirements.php?goal=5', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-5-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalSix() {
    $.get('/secondaryrequirements.php?goal=6', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-6-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalSeven() {
    $.get('/secondaryrequirements.php?goal=7', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-7-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalEight() {
    $.get('/secondaryrequirements.php?goal=8', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-8-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalNine() {
    $.get('/secondaryrequirements.php?goal=9', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-9-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getGoalTen() {
    $.get('/secondaryrequirements.php?goal=10', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#goal-10-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getElectives() {
    $.get('/secondaryrequirements.php?goal=electives', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#electives-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getRigr() {
    $.get('/secondaryrequirements.php?goal=rigr', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#rigr-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getLiberalStudies() {
    $.get('/secondaryrequirements.php?goal=liberal-studies', function(reqs) {
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#liberal-studies-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

function getMajorRequirements(majorId) {
    $.get('/majorrequirements.php?major=' + majorId, function(reqs) {
        $('#core-courses-table > tr').remove();
        var courses = JSON.parse(reqs);
        $.each(courses, function(index, value) {
            $('#core-courses-table').append('<tr class="table-data"><td>' + value[1] + '</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
        });
    });
}

$(function () {
    openTab(null, 'core-courses');
    $('#planner-redirect').prop('disabled', true);

    $.get('/majors.php', function(data) {
        $('#course-dropdown').append(data);
    });

    populateGoals();
    getGoalOne();
    getGoalThree();
    getGoalFour();
    getGoalFive();
    getGoalSix();
    getGoalSeven();
    getGoalEight();
    getGoalNine();
    getGoalTen();
    getElectives();
    getRigr();
    getLiberalStudies();

    $('#course-dropdown').change(function(){
        $('#core-courses-table .table-data').remove();
        getMajorRequirements($('#course-dropdown').val());
        $('#planner-redirect').prop('disabled', false);
    });

    $('#planner-redirect').click(function() {
        location.replace('/planner.html?major=' + $('#course-dropdown').val());
    });
});