Vue.component('create-product', {
    props: ['close'],
    template: `<div class="c-product">
    <div class="close-form" role="button" v-on:click="close($event)">x close</div>
    <div class="product-form">
        <div class="c-image">
            <div class="bold">Image</div>
            <div class="img-upload"><input type="file" name="image" class="upload-input"  accept="image/png, image/jpeg, image/jpg">
                <button class="custom-upload-btn"><i class="fa fa-cloud-upload upload-icon" aria-hidden="true"></i><small>select image</small></button></div>
        </div>
        <div>
            <div class="bold">product information</div>
            <div class="product-description">
                <div class="p-input-item">
                    <label for="">name</label>
                    <input type="text" name="name" placeholder="product name">
                </div>
                <div class="p-input-item">
                    <label for="">quantity</label>
                    <input type="number" name="quantity" placeholder="quantity" required>
                </div>
                <div class="p-input-item">
                    <label for="">description</label>
                    <textarea name="description" placeholder="description"></textarea>
                </div>
                <div class="p-input-item">
                    <button type="submit" class="submit-btn">save</button>
                </div>
            </div>
        </div>
    </div>
</div>`
});