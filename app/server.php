<?php
//Chiamata database
require_once __DIR__ . '/../database/database.php';

// Codifica in json
// header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode($dischi);
