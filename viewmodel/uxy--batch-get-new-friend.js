var app = new Vue({
    el: '#app',
    data() {
        return {
            newFriends: []
        }
    },
    mounted() {
        console.log('view mounted');
        this.uxyBatchGetNewFriend();
    },
    methods: {
        handleAgreeTap(uxId) {
            console.log('agree tap');
            this.uxyAgreeFriend(uxId);
        },
        uxyBatchGetNewFriend() {
            axios.post('/uxy/batchGetNewFriend')
                .then(response => {
                    console.log(response);
                    this.newFriends = response.data;
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },
        uxyAgreeFriend(userId) {
            axios.post('/uxy/agreeFriend', {
                userId: userId
            })
                .then(response => {
                    console.log(response);
                    alert('succeed');
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
