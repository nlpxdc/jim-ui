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
    },
    methods: {
        handleUpdateTap() {
            console.log('update tap');
            this.userBaseUpdateProfile();
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
                    alert('update failed');
                });
        }
    }
});
