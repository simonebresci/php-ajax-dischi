<?php
//Chiamata database
require_once __DIR__ . '/../database/database.php';


// Funzioni
function filterByGenre($albums, $genre){
  foreach($albums as $album){
    if ($album['genre'] === $genre){
      $albumFiltered[] = $album;
    }
  }
  return $albumFiltered;
}

function codificaJson($db){
  // Filtra db cercando genere
  header('Content-Type: application/json');
  // Stampa db in Json
  echo json_encode($db);
}


// Controlla che $_GET esista e non sia vuoto
if(array_key_exists('genre', $_GET) && !empty($_GET['genre'])){

    $dischiFiltered = filterByGenre($dischi, ucfirst($_GET['genre'] ));

    codificaJson($dischiFiltered);
}else{
    codificaJson($dischi);
}
