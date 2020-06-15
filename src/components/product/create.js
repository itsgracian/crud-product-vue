Vue.component('create-product', {
    props: ['close', 'state', 'image', "upload", 'select', 'save'],
    template: `<div class="c-product">
    <div class="close-form" role="button" v-on:click="close($event)">x close</div>
    <div class="product-form">
        <div class="c-image">
            <div class="bold">Image</div>
            <div class="error bold" v-if="state.imageError!==''">{{ state.imageError }}</div>
            <small class="validation-error" v-if="state.errors && state.errors.image">{{state.errors.image}}</small>
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
                    <small class="validation-error" v-if="state.errors && state.errors.name">{{state.errors.name}}</small>
                    <input type="text" name="name" placeholder="product name" v-model="state.name">
                </div>
                <div class="p-input-item">
                <small class="validation-error" v-if="state.errors && state.errors.price">{{state.errors.price}}</small>
                    <input type="number" name="price" placeholder="price" v-model="state.price">
                </div>
                <div class="p-input-item">
                <small class="validation-error" v-if="state.errors && state.errors.quantity">{{state.errors.quantity}}</small>
                    <input type="number" name="quantity" placeholder="quantity" required v-model="state.quantity">
                </div>
                <div class="p-input-item">
                <small class="validation-error" v-if="state.errors && state.errors.description">{{state.errors.description}}</small>
                    <textarea name="description" placeholder="description" v-model="state.description"></textarea>
                </div>
                <div class="p-input-item">
                    <button type="submit" class="submit-btn" @click="save($event)">save</button>
                </div>
            </div>
        </div>
    </div>
</div>`
});