Vue.component('view-single-product', {
    props: ['product', 'close'],
    template: `  <div class="c-product">
    <div class="close-form" role="button" v-on:click="close()">x close</div>
    <div class="product-form" v-if="product">
        <div class="c-image">
            <div class="bold">Image</div>
            <div class="error bold" v-if="!product.image">image not available</div>
            <img v-if="product.image" v-bind:src="product.image" class="image-item"></img>
        </div>
        <div>
            <div class="bold">product information</div>
            <div class="product-description mt-5">
                <div class="p-input-item">
                    <div class="bold">{{ product.name }}</div>
                </div>
                <div class="p-input-item">
                <label>price</label>
                <div class="bold">{{ product.price }}</div>
                </div>
                <div class="p-input-item">
                <label>quantity</label>
                <div class="bold">{{ product.quantity }}</div>
                </div>
                <div class="p-input-item">
                <label>description</label>
                <div class="desc">{{ product.description }} </div>
                </div>
            </div>
        </div>
    </div>
    <div class="not-found" v-if="!product"><div class="not-found-icon">
    <i class="fa fa-desktop" aria-hidden="true"></i>
    </div><div>product not available</div></div>
</div>`
});