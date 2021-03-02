//
// var app = new Vue ({
//   el: '#root',
//   data:{
//     var1: 'Ciao',
//   },
//   // methods:{
//   // }
//   });
// Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data:{
    var1: 'ciao',
    dischi: []
  },
  mounted(){
    // alert('chiamo database php');
    this.getDischi('server/server.php');  //Mettere percorso relativo!
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
             // Sovrascrivi lista con risposta alla query
             // self.listaFilm = objReceived.data.results;
             // Aggiungi film a listaAll
             // self.listaAll = [...self.listaAll, ...self.listaFilm];

           });
    }
  }
  });
Vue.config.devtools = true;
