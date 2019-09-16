var newUser = new Vue({
el: #'superNewUser',
data: {
  user: [
    {
      "name"": "Mark Stevens",
      "countryOfOrigin"": "United Kingdom",
      "birthdate": "07/03/1995",
      "age": "24",
      "email": "mailto:madeupemail@gmail.com",
      priority: "high"
    },
  ]
},
methods: {
  fetchUser() {
    fetch('https://randomuser.me/api/')
    .then(function(response) {console.log(response.json() ))})
  }
},
created() {
  this.fetchUser()
}

}
});
