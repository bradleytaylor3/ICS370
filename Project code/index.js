function openTab(tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    $('#' + tabName + '-tab').addClass('active');
}

function accountingBS() {
    $('#core-courses-table').append(
        '<tr><td>ACCT 210 Financial Accounting</td></tr>\n' +
        '<tr><td>ECON 201 Macroeconomics</td></tr>\n' +
        '<tr><td>ECON 202 Microeconomics</td></tr>\n' +
        '<tr><td>MATH 115 College Algebra</td></tr>\n' +
        '<tr><td>MIS 100 Fundamentals of Information Technology in Organizations</td></tr>\n' +
        '<tr><td>STAT 201 Statistics I</td></tr>\n' +
        '<tr><td>DSCI 434 Introduction to Operations Management</td></tr>\n' +
        '<tr><td>FIN 390 Principles of Finance</td></tr>\n' +
        '<tr><td>MGMT 310 Management Principles and Practices</td></tr>\n' +
        '<tr><td>MIS 310 Principles of Management Information Systems</td></tr>\n' +
        '<tr><td>MKTG 300 Marketing Principles</td></tr>\n' +
        '<tr><td>ACCT 311 Intermediate Accounting I</td></tr>\n' +
        '<tr><td>ACCT 312 Intermediate Accounting II</td></tr>\n' +
        '<tr><td>ACCT 320 Strategic Management Accounting</td></tr>\n' +
        '<tr><td>ACCT 340 Accounting Information Systems</td></tr>\n' +
        '<tr><td>ACCT 510 Advanced Accounting</td></tr>\n' +
        '<tr><td>ACCT 512 Auditing</td></tr>\n' +
        '<tr><td>ACCT 520 Advanced Strategic Management Accounting</td></tr>\n' +
        '<tr><td>ACCT 530 Business Taxation</td></tr>\n' +
        '<tr><td>MGMT 499 Case Studies in Strategic Management</td></tr>\n' +
        '<tr><td>ACCT 515 Financial Statement Analysis</td></tr>\n' +
        '<tr><td>ACCT 515 Financial Statement Analysis</td></tr>\n' +
        '<tr><td>BLAW 310 Business Law:  UCC and Contracts</td></tr>\n'
    );
}

function computerScienceBS() {
    $('#core-courses-table').append(
        '<tr><td>MATH 120 Precalculus</td></tr>\n' +
        '<tr><td>MATH 215 Discrete Mathematics</td></tr>\n' +
        '<tr><td>ICS 140 Computational Thinking with Programming</td></tr>\n' +
        '<tr><td>ICS 141 Programming with Objects</td></tr>\n' +
        '<tr><td>ICS 232 Computer Organization and Architecture</td></tr>\n' +
        '<tr><td>ICS 240 Introduction to Data Structures</td></tr>\n' +
        '<tr><td>MATH 208 Applied Calculus</td></tr>\n' +
        '<tr><td>MATH 210 Calculus I</td></tr>\n' +
        '<tr><td>ICS 311 Database Management Systems</td></tr>\n' +
        '<tr><td>ICS 340 Algorithms and Data Structures  </td></tr>\n' +
        '<tr><td>ICS 365 Organization of Programming Languages</td></tr>\n' +
        '<tr><td>ICS 372 Object-Oriented Design and Implementation</td></tr>\n' +
        '<tr><td>ICS 440 Parallel and Distributed Algorithms</td></tr>\n' +
        '<tr><td>ICS 460 Networks and Security </td></tr>\n' +
        '<tr><td>ICS 462 Operating Systems</td></tr>\n' +
        '<tr><td>ICS 499 Software Engineering and Capstone Project</td></tr>'
    );
}

function economicsBS() {
    $('#core-courses-table').append(
        '<tr><td>MIS 100 Fundamentals of Information Technology in Organizations</td></tr>\n' +
        '<tr><td>ECON 300 Analytical and Quantitative Methods for Economists</td></tr>\n' +
        '<tr><td>MATH 210 Calculus I</td></tr>\n' +
        '<tr><td>MATH 208 Applied Calculus</td></tr>\n' +
        '<tr><td>STAT 201 Statistics I</td></tr>\n' +
        '<tr><td>ECON 201 Macroeconomics</td></tr>\n' +
        '<tr><td>ECON 202 Microeconomics</td></tr>\n' +
        '<tr><td>ECON 351 Intermediate Macroeconomics</td></tr>\n' +
        '<tr><td>ECON 352 Intermediate Microeconomics</td></tr>\n' +
        '<tr><td>ECON 420 Money, Banking and Financial Institutions</td></tr>\n' +
        '<tr><td>ECON 497 Economic Research and Forecasting</td></tr>\n' +
        '<tr><td>ECON 311 Economics of the Environment</td></tr>\n' +
        '<tr><td>ECON 313 Labor Economics</td></tr>\n' +
        '<tr><td>ECON 314 International and Comparative Economics</td></tr>\n' +
        '<tr><td>ECON 315 Economics of Diversity</td></tr>\n' +
        '<tr><td>ECON 316 Health Economics</td></tr>\n' +
        '<tr><td>ECON 317 Global Economic and Financial Crises: Theory and Policy</td></tr>\n' +
        '<tr><td>ECON 490 Topics in Economics</td></tr>\n' +
        '<tr><td>ECON 496 Managerial Economics</td></tr>\n' +
        '<tr><td>ACCT 210 Financial Accounting</td></tr>\n' +
        '<tr><td>ECON 314 International and Comparative Economics</td></tr>\n' +
        '<tr><td>ECON 420 Money, Banking and Financial Institutions</td></tr>\n' +
        '<tr><td>ECON 496 Managerial Economics</td></tr>\n' +
        '<tr><td>ECON 497 Economic Research and Forecasting</td></tr>\n' +
        '<tr><td>FIN 390 Principles of Finance</td></tr>\n' +
        '<tr><td>ECON 311 Economics of the Environment</td></tr>\n' +
        '<tr><td>ECON 313 Labor Economics</td></tr>\n' +
        '<tr><td>ECON 315 Economics of Diversity</td></tr>\n' +
        '<tr><td>ECON 316 Health Economics</td></tr>\n' +
        '<tr><td>ECON 317 Global Economic and Financial Crises: Theory and Policy</td></tr>\n' +
        '<tr><td>ECON 351 Intermediate Macroeconomics</td></tr>\n' +
        '<tr><td>ECON 352 Intermediate Microeconomics</td></tr>\n' +
        '<tr><td>ECON 490 Topics in Economics</td></tr>\n' +
        '<tr><td>DSCI 431 Managerial Problem-solving and Decision-making Methods</td></tr>\n' +
        '<tr><td>DSCI 434 Introduction to Operations Management</td></tr>\n' +
        '<tr><td>FIN 550 International Finance</td></tr>\n' +
        '<tr><td>ENTR 490 Entrepreneurship and Venture Creation</td></tr>\n' +
        '<tr><td>MKTG 420 Marketing Research</td></tr>\n');
}

$(document).ready(function() {
    openTab( 'core-courses');

    $('#course-search').keyup(function(e) {
        console.log(e.key);
    });

    $('#course-dropdown').change(function(e) {
        $('#core-courses-table > tr').remove();
        var val = $('#course-dropdown').val();
        if (val === 'accounting-bs') {
            accountingBS();
        } else if (val === 'computer-science-bs') {
            computerScienceBS();
        } else if (val === 'economics-bs') {
            economicsBS();
        }
    });
});