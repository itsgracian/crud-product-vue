Vue.component('header-component', {
    props: ['open'],
    template: `<div class="app-header">
    <div class="app-container">
    <div class="header-grid">
        <div class="menu-list">
            <ul>
                <li><a href="#">Product</a></li>
            </ul>
            <ul class="right-menu">
                <li><a href="#" v-on:click="open($event)">new product</a></li>
            </ul>
        </div>
        <div class="logo"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
    </div>
    </div>
</div>`
});