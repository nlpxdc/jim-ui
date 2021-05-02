var app = new Vue({
    el: '#app',
    data() {
        return {
            friends: [],
            uyMap: ''
        }
    },
    mounted() {
        console.log('view mounted');
        this.uxyBatchGetFriend();
    },
    computed: {
        sortFriends() {
            if (this.uyMap) {
                return this.friends.sort((a, b) => {
                    var aname = this.uyMap.get(a.uyId).username;
                    var bname = this.uyMap.get(b.uyId).username;
                    return aname.localeCompare(bname);
                });
            } else {
                return this.friends;
            }
        }
    },
    methods: {
        userBaseBatchLoad(userIds) {
            axios.post('/userBase/batchLoad', {
                userIds: userIds
            })
                .then(response => {
                    console.log(response);
                    const uys = response.data;
                    this.uyMap = new Map(uys.map(v => [v.userId, v]));
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },
        uxyBatchGetFriend() {
            axios.post('/uxy/batchGetFriend')
                .then(response => {
                    console.log(response);
                    this.friends = response.data;
                    var uyIds = this.friends.map(f => f.uyId);
                    this.userBaseBatchLoad(uyIds);
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
