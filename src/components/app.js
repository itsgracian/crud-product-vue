const app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        products: [],
        name: '',
        description: '',
        quantity:'',
        image: '',
        price: '',
        imageError: '',
        loadingProgress: 0,
        file: null,
        errors: null,
        product: null,
        onView: false
    },
    methods: {
        onOpen: function(e){
            e.preventDefault();
            this.isOpen = true;
        },
        onClose: function(e){
            e.preventDefault();
            this.isOpen = false;
            this.name= '';
            this.quantity='';
            this.image='';
            this.description='';
            this.price='';
            this.file=null;
            this.onView= false;
            this.product=null;
            this.loadingProgress=0;
            this.imageError="";
            this.errors=null;
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

        saveProduct: function(e){
            e.preventDefault();
            const {name, quantity, image, description, price } = this;
            const {errors, valid } = validation({name, quantity, image, price });
            if(!valid){
                this.errors = errors;
            }else{
                this.products = [...this.products, {name, quantity, image, description, id: Math.random(), price}];
                this.isOpen = false;
                this.name= '';
                this.quantity='';
                this.image='';
                this.description='';
                this.price='';
                this.file=null;
                this.onView= false;
                this.product=null;
                this.loadingProgress=0;
                this.imageError="";
                this.errors=null;
            }
        },
    
        viewSpecificProduct: function(productId){
            const find = this.products.find(item=> String(item.id) === String(productId));
            if(find){
                this.product = find;
                this.onView = true;
            }
        },

        closeProduct: function(){
           this.onView = false;
           this.product = null;
        }
    }
});