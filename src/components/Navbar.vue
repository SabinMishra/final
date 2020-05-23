<template>
    <div>
        
        <nav>
            
            <v-toolbar flat app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Website</span>
                <span class="font-weight-heavy">Name</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>
                
                <v-btn flat>
                    <v-icon small left>local_dining</v-icon>
                    <span>Order</span>
                </v-btn> 

                

            </v-toolbar>

            <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item  @click="drawer = false">
                    <v-list-item-icon><v-icon>keyboard_backspace</v-icon></v-list-item-icon>
                </v-list-item>
                <v-list-item v-for="nav in navigation" :key="nav.text" link :to="nav.route">

                    <v-list-item-icon>
                        <v-icon>{{nav.icon}}</v-icon>
                        
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{nav.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>

            </v-navigation-drawer>
        </nav>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                drawer:false,
                navigation:[
                    {icon:'home', text:'Home', route:'/'},
                    {icon:'menu_book', text:'Menu', route:'/menu'},
                    {icon:'feedback', text:'Feedback', route:'/feedback'},
                    {icon:'shopping_cart', text:'Cart', route:'/cart'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>