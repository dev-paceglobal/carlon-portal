<template>
    <v-row class="user-page">
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    <div class="d-flex justify-space-between flex-wrap">
                        <v-btn class="ma-2" to="addservice" dark color="danger">
                            <v-icon>mdi-plus</v-icon>
                            Add New Service
                        </v-btn>

                    </div>
                </v-card-title>
                <v-card-title class="ml-5">
                    Services List
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>

                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>

                </v-card-title>

                <v-data-table
                    v-model="selected"
                    :search="search"
                    :headers="headers"
                    :items="getServices"
                    item-key="title"
                    :loading="loading"
                    show-select
                    class="elevation-1 table-one"
                    multi-sort
                    
                >
                    <template v-slot:item.name="{item}">
                        <div class="d-flex align-center">
                            <v-avatar class="mr-2" size="26" dark>
                                <img :src="item.image" alt="" />
                            </v-avatar>
                            <p class="ma-0 font-weight-medium">
                                {{ item.title }}
                            </p>
                        </div>
                    </template>
                    <template v-slot:item.action="{item}">
                        <div class="d-flex">
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn
                                        color="secondary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        icon
                                    >
                                        <v-icon>mdi-eye</v-icon>
                                    </v-btn>
                                </template>
                                <span>View</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                             <v-btn
                                        color="success"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        icon
                                        to="edit-user"
                                    >
                                        <v-icon>mdi-pencil-box-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>Edit</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn
                                        color="danger"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        icon
                                    >
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>Delete</span>
                            </v-tooltip>
                        </div>
                    </template>
                    <!-- 
                    <template v-slot:item.badge="{item}">
                        <template v-if="item.badge === 'Active'">
                            <v-chip
                                class=""
                                color="success"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-check</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                        <template v-else>
                            <v-chip
                                class=""
                                color="success"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-check</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                    </template> -->
                </v-data-table>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>

export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Services '
    },
    data() {
        return {
            search: '',  loading:false,
            services: [
                {
                    id : 1,
                    title: 'lorem p',
                    image: 'sad.jpg',
                },
                {
                    id : 2,
                    title: 'losadrem p',
                    image: 'sad.jpg',
                },
                {
                    id : 3,
                    title: 'servie p',
                    image: 'sad.jpg',
                },
            ],
            selected: [],
            headers: [

                {text: 'Services', value: 'title'},
                {text: 'Short Description', value: 'short_description'},
                {text: 'Actions', value: 'action'},
            ],
           
            
        }
    },
    computed: {

        getServices() {
            
            return  this.$store.getters.Services;
            // ...mapGetters(['Services'])

        },
    },
   
    mounted() {
        this.$store.dispatch('Services');

    }
}
</script>
<style lang="scss" scoped>
::v-deep .table-one {
    thead.v-data-table-header {
        tr {
            &:hover {
                background-color: #f2f3f8;
            }
            th {
                span {
                    font-size: 16px;
                    color: #304156;
                }
            }
        }
        tr {
            td {
                padding-bottom: 20px;
                padding-top: 20px;
            }
        }
    }
    tbody {
        tr {
            &:hover {
                background-color: #f2f3f8 !important;
            }
        }
    }
}

</style>
<style>
.row.user-page .v-data-table__checkbox.v-simple-checkbox {
    display: none !important;
}
</style>
