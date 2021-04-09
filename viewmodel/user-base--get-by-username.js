var app = new Vue({
    el: '#app',
    data() {
        return {
            username: ''
        }
    },
    mounted() {
        console.log('view mounted');
    },
    methods: {
        handleSearchTap() {
            console.log('search tap');
            if (!this.username) {
                alert('invalid params');
                return;
            }
            this.userBaseGetByUsername();
        },
        userBaseGetByUsername() {
            axios.post('/userBase/getByUsername', {
                username: this.username
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },
        call() {
            axios.post('', {

            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});
