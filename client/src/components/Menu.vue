<template>
    <v-container grid-list-xs align-center justify-center pa-5>
        <v-layout row wrap>
            <v-flex>
                <v-tabs fixed-tabs color = "transparent" slider-color = "yellow darken-3" v-model="cur_tab">
                    <v-tab>Monday</v-tab>
                    <v-tab>Tuesday</v-tab>
                    <v-tab>Wednesday</v-tab>
                    <v-tab>Thursday</v-tab>
                    <v-tab>Firday</v-tab>
                </v-tabs>
                <v-card class = "mt-5">
                    <v-card-title primary-title> <h2 class = "blue--text">Order</h2></v-card-title>
                    <v-form title = 'Menu'>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Appetizer' v-model="cur_appetizer" :items ="menu" style = "width: 50%; margin-left: 22%" color = "blue" item-text = "appetizer"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Protein' v-model="cur_protein" :items ="menu" style = "width: 50%; margin-left: 22%" color = "blue" item-text="protein"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Carb' v-model="cur_carb" :items ="menu" style = "width: 50%; margin-left: 22%" color = "blue" item-text="carb"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2" label = 'Vegetable' v-model="cur_vegetable" :items ="menu" style = "width: 50%; margin-left: 22%" color = "blue" item-text="vegetable"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select class = "mt-2 mb-5" label = 'Side' v-model="cur_side" :items ="menu" style = "width: 50%; margin-left: 22%" color = "blue" item-text="sides"></v-select>
                        </v-flex>
                        <v-flex>
                            <v-btn class = "yellow darken-3 mb-5" style = "margin-left: 43%">
                                Place Order
                            </v-btn>
                        </v-flex>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
/*eslint-disable indent, spaced-comment*/
import { MENU_QUERY } from '../constants/graphql'

export default {
    data () {
        return {
            menu: [],
            cur_tab: 0,
            cur_appetizer: 'None',
            cur_protein: 'None',
            cur_carb: 'None',
            cur_vegetable: 'None',
            cur_side: 'None',
            appetizer: ['None'],
            protein: ['None', 'Ox Tail', 'Fry Chicken'],
            carb: ['None', 'Rice and Peas', 'White Rice'],
            vegetable: ['None'],
            sides: ['None', 'Mixed Vegetables', 'Pasta'],
            dayMap: { 0: 'Monday', 1: 'Tuesday', 2: 'Wednesday', 3: 'Thursday', 4: 'Friday' }
        }
    },
    methods: {
        isEmpty: function () {
            if (this.cur_protein.length < 1) {
                this.cur_protein = ['None']
            }

            console.log('changed ' + this.cur_protein)
        }
    },
    apollo: {
        menu: {
            query: MENU_QUERY,
            variables () {
                return {
                    day: this.dayMap[this.cur_tab]
                }
            },
            update: (data) => {
                return data.getMenu
            }
        }
    }
}
</script>
