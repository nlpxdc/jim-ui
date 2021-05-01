var app = new Vue({
    el: '#app',
    data() {
        return {
            username: '',
            nickname: '',
            area: ''
        }
    },
    mounted() {
        console.log('view mounted');
        this.userBaseLoadProfile();
    },
    methods: {
        userBaseLoadProfile() {
            axios.post('/userBase/loadProfile')
                .then(response => {
                    console.log(response);
                    var user = response.data;
                    this.username = user.username;
                    this.nickname = user.username;
                    this.area = user.area;
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});