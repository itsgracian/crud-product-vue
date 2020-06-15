const app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        products: [{
            id:1,
            name: 'Fashion killer',
            price: '450',
            description: 'description',
            image: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }],
        name: '',
        description: '',
        quantity:'',
        image: ''
    },
    methods: {
        onOpen: function(e){
            e.preventDefault();
            this.isOpen = true;
        },
        onClose: function(e){
            e.preventDefault();
            this.isOpen = false;
        },
    }
});