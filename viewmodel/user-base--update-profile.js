var app = new Vue({
    el: '#app',
    data() {
        return {
            nickname: '',
            area: ''
        }
    },
    mounted() {
        console.log('view mounted');
        this.userBaseLoadProfile();
    },
    methods: {
        handleUpdateTap() {
            console.log('update tap');
            this.userBaseUpdateProfile();
        },
        userBaseLoadProfile() {
            axios.post('/userBase/loadProfile')
                .then(response => {
                    console.log(response);
                    var user = response.data;
                    this.nickname = user.nickname;
                    this.area = user.area;
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        },
        userBaseUpdateProfile() {
            axios.post('/userBase/updateProfile', {
                nickname: this.nickname,
                area: this.area
            })
                .then(response => {
                    console.log(response);
                    alert('update succeed');
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        }
    }
});
