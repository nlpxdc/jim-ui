var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: ''
    },
    methods: {
        handleRegisterTap() {
            console.log('register tap');
            this.userRegisterByUsername();
        },
        userRegisterByUsername() {
            axios.post('/userLogin/registerByUsername', {
                username: this.username,
                password: this.password
            })
                .then(function (response) {
                    console.log(response);
                    var data = response.data;
                    localStorage['jimAccessToken'] = data.accessToken;
                    alert('register succeed'+data.userId);
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});