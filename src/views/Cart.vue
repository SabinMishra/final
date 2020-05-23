<template>
    <div>
    <v-container>
            
            
            <h1 class="font-weight-light">Cart</h1>
            <span class="font-weight-light">Total :   {{calculate}} </span>
            <br>
            <v-btn flat @click="dialog = true">Check Out</v-btn>
            <v-dialog v-model="dialog" max-width="650">
                <v-card>
                    <v-card-title>Please provide your Information</v-card-title>
                    <v-alert type="info" v-show="alert">Cart is empty</v-alert>
                    <v-alert type="success" v-show="response">Order submitted, we'll call to confirm order</v-alert>
                    <v-alert type="error" v-show="popup">Enter Details</v-alert>
                <v-card-text>
                        <v-form>
                            <v-text-field label="Name" :rules="rules" hide-details="auto" v-model="name"></v-text-field>
                            <v-text-field label="Phone Number" :rules="phone" hide-details="auto" v-model="phone"></v-text-field>
                            
                        </v-form>
                        <v-btn flat class="mt-6" @click="submit">Submit</v-btn>
                    </v-card-text>
                    
                </v-card>
            </v-dialog>
            

            
        <v-btn @click="addToTots">Click Me</v-btn>
        


         <v-layout row wrap class="ml-1">
                <v-flex xs12 sm6 md3 lg3 class="ma-1" v-for="food in foods" :key="food.key">
                    <v-card class="text-center  mt-3 pb-5">
                        <v-responsive>
                            <v-img :src="`${food.src}`"></v-img>
                        </v-responsive>
                        


                        <div class="d-flex align-center mt-5 mb-n5">
                        <v-card-text>
                            <div class="subheading font-weight-bold text-left" >{{food.title}}</div>
                            <div class="text-left">{{food.price}}</div>
                            
                        </v-card-text>
                         <v-btn flat class="mr-4">Remove from cart</v-btn>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
    </v-container>
    
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                dialog:false,
                rules:[
                    value => !!value || 'Reuired.',
                    value => (value && value.length >=3) || 'Min 3 charactersr',
                ],
                phone:[
                    value => !!value || 'Required',
                    value => (value && value.length >=10) || 'Must be 10 characters',
                    value => (value && value.length == 10) || 'Exceeded 10 characters',
                ],
                tots:[],
                alert:false,
                totalBill: null,
                name:null,
                phone:null,
                response:false,
                popup:false
            }
        },
        computed:{
           foods(){ return this.$store.state.foods},
           
    },
    methods:{
        addToTots(){
            this.tots= this.$store.state.foods;
            total = [];
            for(let i ; i <= this.tots.length; i++){
                total = this.tots[i].price
                console.log(total)
            }
            
        },
        submit(){
           console.log("Hellooo");
           if(this.foods == undefined || this.foods.length == 0){
               this.alert = true;
           }
           else{
               if(this.name === null || this.phone === null){
                   this.popup=true;
               }
               
               axios.post('http://localhost:3000/Cart',{foodDescription:this.foods,totalBill:this.totalBill,name:this.name,phone:this.phone}).then(response=>this.response=true).catch(error=>console.log('error'));}
               this.popup = false;
               }
        ,
        
    }
           
        
    }
</script>

<style lang="scss" scoped>

</style>