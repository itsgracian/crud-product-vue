Vue.component('create-product', {
    props: ['close', 'state', 'image', "upload", 'select'],
    template: `<div class="c-product">
    <div class="close-form" role="button" v-on:click="close($event)">x close</div>
    <div class="product-form">
        <div class="c-image">
            <div class="bold">Image</div>
            <div class="error bold" v-if="state.imageError!==''">{{ state.imageError }}</div>
            <div class="img-upload" v-if="image===''"><input type="file" name="image" class="upload-input" 
            accept="image/png, image/jpeg, image/jpg" v-on:change="select($event)" ref="fileInput">
            <button class="custom-upload-btn" @click="$refs.fileInput.click()">
            <i class="fa fa-picture-o upload-icon" aria-hidden="true"></i><small>select image</small></button>
            <button class="" @click="upload()" class="save-img"><i class="fa fa-cloud-upload upload-icon"></i><small>upload</small></button>
               <div class="progress-bar"><div class="loading" :style="{'width': state.loadingProgress +'%' }"></div></div> 
                </div>
                <img v-if="image!==''" v-bind:src="image" class="image-item"></img>
        </div>
        <div>
            <div class="bold">product information</div>
            <div class="product-description">
                <div class="p-input-item">
                    <label for="">name</label>
                    <input type="text" name="name" placeholder="product name" v-model="state.name">
                </div>
                <div class="p-input-item">
                    <label for="">quantity</label>
                    <input type="number" name="quantity" placeholder="quantity" required v-model="state.quantity">
                </div>
                <div class="p-input-item">
                    <label for="">description</label>
                    <textarea name="description" placeholder="description" v-model="state.description"></textarea>
                </div>
                <div class="p-input-item">
                    <button type="submit" class="submit-btn">save</button>
                </div>
            </div>
        </div>
    </div>
</div>`
});