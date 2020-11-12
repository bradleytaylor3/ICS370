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

function getGoalOne() {
    $.get('/planner.php?goal=1', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-1-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalRigr() {
    $.get('/planner.php?goal=rigr', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#rigr-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalThree() {
    $.get('/planner.php?goal=3', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-3-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalFour() {
    $.get('/planner.php?goal=4', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-4-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalFive() {
    $.get('/planner.php?goal=5', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-5-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalSix() {
    $.get('/planner.php?goal=6', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            var courseName = value[1];
            var credit = value[3];
            if (courseName == 'PHIL-102') {
                $('#goal-6-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            } else if (credit == 4) {
                $('#goal-6-1-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td>');
            }
        });
    });
}

function getGoalSeven() {
    $.get('/planner.php?goal=7', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-7-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalEight() {
    $.get('/planner.php?goal=8', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-8-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalNine() {
    $.get('/planner.php?goal=9', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-9-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getGoalTen() {
    $.get('/planner.php?goal=10', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#goal-10-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getLiberalStudies() {
    $.get('/planner.php?goal=liberal-studies', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#liberal-studies-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function getElectives() {
    $.get('/planner.php?goal=electives', function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#electives-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

function populateCoreCourses(major) {
    $.get('/planner.php?goal=recommended&major=' + major, function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#recomended-courses-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });
}

$(function() {
    openTab(null, 'breakdown');
    getGoalOne();
    getGoalRigr();
    getGoalThree();
    getGoalFour();
    getGoalFive();
    getGoalSix();
    getGoalSeven();
    getGoalEight();
    getGoalNine();
    getGoalTen();
    getLiberalStudies();
    getElectives();

    var searchParams = new URLSearchParams(location.search);

    $.get('/planner.php?major=' + searchParams.get('major') + '&goal=major_name', function(data) {
       var majorName = JSON.parse(data);
        $.each(majorName, function(index, value) {
            $('.major-name').text(value[1]);
        });
    });

    $.get('/majorrequirements.php?major=' + searchParams.get('major'), function(data) {
        var courses = JSON.parse(data);
        $.each(courses, function(index, value) {
            $('#core-courses-table').append('<tr class="table-data"><td>' + value[1] +'</td><td>' + value[2] + '</td><td>' + value[3] + '</td></tr>');
        });
    });

    populateCoreCourses(searchParams.get('major'));
});