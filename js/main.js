var app = new Vue ({
  el: '#root',
  data:{
    var1: 'ciao',
    filterGenre: null,
    listaGeneri: [],
    dischi: []
  },
  mounted(){
    this.getDischi('app/server.php');  //Mettere percorso relativo!
  },
  methods:{
    // CHIAMATA STANDARD API FILM
    standardAPICall: function(URL){
      return axios.get(URL,{
              params: {
                // api_key: '41689b28957d4803002626fc60582afd',
                // query: 'myquery',
                // language: 'it-IT',
              },
            });

    },

    // RICERCA FILM
    getDischi: function(url){
      const self = this;
      this.standardAPICall(url)
      .then(function(objReceived){
            // alert('chiamata ajax con successo');

            self.dischi= objReceived.data;

            // Popola generi
            self.getGenres();
             // Sovrascrivi lista con risposta alla query
             // self.listaFilm = objReceived.data.results;
             // Aggiungi film a listaAll
             // self.listaAll = [...self.listaAll, ...self.listaFilm];

           });
    },
    filterByGenre: function(){
      console.log('Filtro per genere');
      this.getDischi('app/server.php?genre=' + this.filterGenre);
    },
    getGenres: function(){
        console.log('popolo select con generi');
        this.dischi.forEach( (item, index) =>{
          // AGGIUNGI SOLO NUOVI GENERI
          if(this.listaGeneri.indexOf(item.genre) <0){
             this.listaGeneri.push(item.genre);
          }
        });
      }
  }
  });
Vue.config.devtools = true;
