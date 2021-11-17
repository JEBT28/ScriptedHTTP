<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $xmlDoc = new DOMDocument('1.0');
        $xmlDoc->formatOutput = true;
        $xmlDoc->load("data-18100152.xml");
        $xmlDoc->saveXML();
        $strXml = $xmlDoc->saveXML(); 
        header("Content-type: text/xml");
 echo $strXml;
}
