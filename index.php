<?php
$varTest = 'prima';
// echo __DIR__ . '/database/database.php';

include __DIR__ . '/database/database.php';
// var_dump($varTest);
var_dump($dischi);

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./css/app.css">
    <!-- FontAwesome, Vue, Axios -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
    <!-- /FontAwesome, Vue, Axios -->

    <title>PHP AJAX DISCHI</title>
  </head>
  <body>
    <div id="root">

          <header>
              <div class="container">
                  <img src="./img/logo.png" alt="logo" />
              </div>
          </header>


          <!-- Filtro genere musicale -->
          <!-- <div class="genere">
            <h2>Filtro dinamico Genere</h2>
            <select class="selezione-genere"
                    v-model="filterGenre"
                    @change="filtraArrayGenere">
              <option disabled value="">Please select one</option>
              <option> </option>
              <option v-for="opt in listaGeneri">{{opt}}</option>
            </select>

          </div> -->
          <!-- /Filtro genere musicale -->

          <div class="cds-container container">

            <!-- DISCO ESEMPIO -->
            <div class="cd">
              <img src="disco.poster" alt="">
              <h3>{{disco.title}}</h3>
              <span class="author">{{disco.author}}</span>
              <span class="year">{{disco.year}}</span>
            </div>

            <!-- /DISCO ESEMPIO -->

            <!-- LISTA DISCHI -->
            <!-- <div v-for="disco in selectArray()" class="cd">
              <img :src="disco.poster" alt="">
              <h3>{{disco.title}}</h3>
              <span class="author">{{disco.author}}</span>
              <span class="year">{{disco.year}}</span>
            </div> -->
            <!-- /LISTA DISCHI -->

          </div>

        </div>
        <!-- /Root -->


        <script src="main.js" charset="utf-8"></script>



  </body>
</html>
