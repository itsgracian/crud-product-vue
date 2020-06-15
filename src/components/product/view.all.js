Vue.component('view-products', {
    props: ['products', 'view'],
    template: `  <div class="display-items">
    <div class="app-container">
        <div class="v-all-products">
            <div class="p-item" v-if="products && products.length > 0" v-for="item in products" @click="view(item.id)">
                <div class="p-img">
                    <img :src="item.image" alt="">
                </div>
                <div class="p-price">{{'$ ' + item.price}}</div>
            </div>

        </div>
        <div class="not-found" v-if="products && products.length <=0 "><div class="not-found-icon">
        <i class="fa fa-desktop" aria-hidden="true"></i>
        </div><div>product not available</div></div>
    </div>
</div>`
});