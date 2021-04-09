var app = new Vue({
    el: '#app',
    data() {
        return {
            userId: '',
            user: ''
        }
    },
    mounted() {
        console.log('view mounted');
        let searchParams = new URLSearchParams(location.search);
        this.userId = searchParams.get('userId');
        if (!this.userId) {
            alert('invalid params');
            return;
        }
        this.userBaseLoad();
    },
    methods: {
        userBaseLoad() {
            axios.post('/userBase/load', {
                userId: this.userId
            })
                .then(response => {
                    console.log(response);
                    this.user = response.data;
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
