var app = new Vue({
    el: '#app',
    data() {
        return {

        }
    },
    methods: {
        call() {
            axios.post('')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
