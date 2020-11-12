<?php

include 'connection.php';
$conn = createConnection();

function getMajors($connection) {
    $sql = 'SELECT * FROM majors';
    $optionsData = '';
    foreach($connection->query($sql) as $row) {
        $majorName = strtolower(str_replace(' ', '-', $row['name']));
        $optionsData .= '<option id="' . $majorName . '" value="' . $row['id'] . '">' . $row['name'] . '</option>';
    }
    echo $optionsData;
    $conn = null;
}

getMajors($conn);