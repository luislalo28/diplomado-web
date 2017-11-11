<?php
    #print_r($_POST);
    $name = $_POST['formName'];
    $tel = $_POST['formTel'];

    $message = 'Mi nombre es ' . $name . ', y mi telefono es ' . $tel . '.';

    echo $message;
?>