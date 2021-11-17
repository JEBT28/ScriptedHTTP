<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$obj = new stdClass();
$obj->firstName="Juan Esteban";
$obj->lastName="Baltierrez Tobon";
$obj->phone=8672222222;
$obj->address="Nuevo Laredo, Tamaulipas";
$obj->email="l18100152@nlaredo.tecnm.mx";


header('Content-Type: application/json');
echo json_encode($obj);

}
?>