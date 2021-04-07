var app = new Vue({
    el: '#app',
    data() {
        return {
            username: '',
            password: ''
        }
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
                .then(response => {
                    console.log(response);
                    var data = response.data;
                    localStorage['jimAccessToken'] = data.accessToken;
                    alert('login succeed');
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});