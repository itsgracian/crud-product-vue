const app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        products: [{
            id:Math.random(),
            name: 'Fashion killer',
            price: '450',
            description: 'description',
            image: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }],
        name: '',
        description: '',
        quantity:'',
        image: '',
        imageError: '',
        loadingProgress: 0,
        file: null,
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
        onSelectImage: function(e){
            const { files }= e.target;
            this.file=files[0]
        },
        onUpload: function(){
            if(this.file){
                const URL = 'https://api.cloudinary.com/v1_1/heza/image/upload';
                const form = new FormData();
                form.append('file', this.file);
                form.append('upload_preset', 'vue_challenge_preset');
                axios.post(URL, form,{headers: {
                    ContentType: 'multipart/form-data'
                }, onUploadProgress: function(){
                  const interval = setInterval(()=>{
                      if(this.loadingProgress < 100){
                          this.loadingProgress += .1;
                      }else{
                          clearInterval(interval);
                      }
                  },10);
                }.bind(this)}).then(res=>{
                    const {secure_url} = res.data;
                    this.image=secure_url;
                  
                }).catch((error)=>{
                    this.imageError = 'uploading image failed';
                });   
            }else{
                this.imageError='please select image';
            }
        },
        newProduct: function(e){
            e.preventDefault();
            const {name, quantity, image, description } = this;
            this.products = [...this.products, {name, quantity, image, description, id: Math.random()}]
        }
    }
});