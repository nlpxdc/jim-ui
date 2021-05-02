var app = new Vue({
    el: '#app',
    data() {
        return {
            newFriends: [],
            uxMap: ''
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
        userBatchLoad(userIds) {
            axios.post('/userBase/batchLoad', {
                userIds: userIds
            })
                .then(response => {
                    console.log(response);
                    const uxs = response.data;
                    this.uxMap = new Map(uxs.map(v => [v.userId, v]));
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },
        uxyBatchGetNewFriend() {
            axios.post('/uxy/batchGetNewFriend')
                .then(response => {
                    console.log(response);
                    this.newFriends = response.data;
                    var uxIds = this.newFriends.map(n => n.uxId); 
                    this.userBatchLoad(uxIds);
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
