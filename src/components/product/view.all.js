Vue.component('view-products', {
    props: ['products'],
    template: `  <div class="display-items">
    <div class="app-container">
        <div class="v-all-products">
            <div class="p-item" v-if="products && products.length > 0" v-for="item in products">
                <div class="p-img">
                    <img :src="item.image" alt="">
                </div>
                <div class="p-price">{{'$ ' + item.price}}</div>
            </div>

        </div>
    </div>
</div>`
});