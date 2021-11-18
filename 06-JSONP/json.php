<?php

//Object to send to the client
$obj = new stdClass();
$obj->firstName="Judit";
$obj->lastName="Hernandez Luna";
$obj->phone=8672222222;
$obj->address="Nuevo Laredo, Tamaulipas";
$obj->email="l18100189@nlaredo.tecnm.mx";


//The php file send a Javascript instruction to the client what have the callback function
echo "loadJSONDoc(".json_encode($obj).")";

?>