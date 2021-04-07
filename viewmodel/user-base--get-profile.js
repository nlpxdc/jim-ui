var app = new Vue({
    el: '#app',
    data() {
        return {
            user: ''
        }
    },
    mounted() {
        console.log('view mounted');
        this.userBaseGetProfile();
    },
    methods: {
        userBaseGetProfile() {
            axios.post('/userBase/getProfile')
                .then(response => {
                    console.log(response);
                    this.user = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});