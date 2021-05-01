var app = new Vue({
    el: '#app',
    data() {
        return {
            uyId: ''
        }
    },
    mounted() {
        console.log('view mounted');
        let searchParams = new URLSearchParams(location.search);
        this.uyId = searchParams.get('uyId');
        if (!this.uyId) {
            alert('invalid params');
            return;
        }
    },
    methods: {
        handleApplyFriendTap() {
            console.log('apply friend tap');
            this.uxyApplyFriend();
        },
        uxyApplyFriend() {
            axios.post('/uxy/applyFriend', {
                uyId: this.uyId
            })
                .then(response => {
                    console.log(response);
                    alert('apply friend succeed');
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
