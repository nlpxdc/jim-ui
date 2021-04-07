var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: ''
    },
    methods: {
        handleLoginTap() {
            console.log('login tap');
            this.userLoginByUsername();
        },
        userLoginByUsername() {
            axios.post('/userLogin/loginByUsername', {
                username: this.username,
                password: this.password
            })
                .then(function (response) {
                    console.log(response);
                    var data = response.data;
                    localStorage['jimAccessToken'] = data.accessToken;
                    alert('login succeed');
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});