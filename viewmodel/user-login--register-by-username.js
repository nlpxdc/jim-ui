var app = new Vue({
    el: '#app',
    data() {
        return {
            username: '',
            loginPassword: ''
        }
    },
    mounted() {
        console.log('view mounted');
    },
    methods: {
        handleRegisterTap() {
            console.log('register tap');
            this.userRegisterByUsername();
        },
        userRegisterByUsername() {
            axios.post('/userLogin/registerByUsername', {
                username: this.username,
                loginPassword: this.loginPassword
            })
                .then(response => {
                    console.log(response);
                    var data = response.data;
                    localStorage['jimAccessToken'] = data.accessToken;
                    alert('register succeed' + data.userId);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});