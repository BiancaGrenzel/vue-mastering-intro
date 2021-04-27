var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        inStock: true,
        selectedVariant: 0,
        inventory: 10,
        onSale: true,
        details: ["80% cotton", "20% polyesterm", "Gender-neutral"],
        variants: [{
            variantId: 2234,
            variantColor: "#84CF6A",
            variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
        {
            variantId: 2235,
            variantColor: "#6a9ecf",
            variantImage: './assets/vmSocks-blue-onWhite.jpg'
        }
        ],
        sizes: [{
            sizeId: 1,
            size: "G"
        },
        {
            sizeId: 2,
            size: "M"
        },
        {
            sizeId: 3,
            size: "P"
        }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        },
        deleteFromCart: function () {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
    },  
    computed: {
        title() {
            return this.brand + '  ' + this.product 
        }
    }
    
})