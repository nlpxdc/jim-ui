var app = new Vue({
    el: '#app',
    data() {
        return {
            user: ''
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
                    this.user = response.data;
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});