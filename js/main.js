// REFACTORING-
// creare APICALL STANDARD CON filtro ed inserirla in filterByGenre


var app = new Vue ({
  el: '#root',
  data:{
    filterGenre: null,
    listaGeneri: [],
    dischi: []
  },
  mounted(){
    this.getDischi('app/server.php');
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
            self.dischi= objReceived.data;

            // Popola generi
            self.getGenres();

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
