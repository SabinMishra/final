<template>
    <div>
        <v-container>
            <h1 class="font-weight-light">Menu Page</h1>

            <v-layout row wrap class="ml-1" >
                <v-flex xs12 sm6 md3 lg3 class="ma-5 ml-10" v-for="item in items" :key="item.id" justify="center">
                    <v-card class="text-center mt-3 pb-5">
                        <v-responsive>
                           <v-img :src="`${item.src}`" max-width="400" max-height="500"></v-img>
                        </v-responsive>
                        


                        <div class="d-flex align-center mt-5 mb-n5">
                        <v-card-text>
                            <div class="subheading font-weight-bold text-left" >{{item.title}}</div>
                            <div class="text-left">Rs.{{item.price}}</div>
                            
                        </v-card-text>
                         <v-btn flat class="mr-4" @click="addToCart(item)">Add to cart</v-btn>
                        </div>
                    </v-card>
                    
                </v-flex>
                
            </v-layout>
        

        </v-container>
        <v-container>
        
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                items:[],
                list:[]
            }
        },
        methods:{
            addToCart(item){
                
                this.$store.state.foods.push(item);
                
                
        
        },
            // cartConfirm(item){
            //     axios.post('http://localhost:3000/Cart',{title:item.title, price: item.price}).then(response=>{console.log(response)}).catch(error=>{console.log(error)})
            // }
        },
        created(){
            axios.get('http://localhost:3000/Menu').then(response=>{
                const data = response.data;
                
                
                
                for(let key in data){
                    const item = data[key];
                    
                    
                    this.items.push(item);

                }
                

            }).catch(error=>{console.log('error')});
            console.log(this.list[0])
        }
    }
</script>

<style scoped>

</style>