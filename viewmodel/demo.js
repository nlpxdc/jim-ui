var app = new Vue({
    el: '#app',
    data() {
        return {

        }
    },
    mounted() {
        console.log('view mounted');
    },
    methods: {
        call() {
            axios.post('', {

            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
