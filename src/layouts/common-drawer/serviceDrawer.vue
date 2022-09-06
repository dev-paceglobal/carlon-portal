<template>
  <vue-perfect-scrollbar
    :settings="{ suppressScrollX: true, wheelPropagation: false }"
    class="h-100 rtl-ps-none ps scroll"
    style="height: 100%"
  >
    <div class="pa-5 relative">
      <v-app-bar class="pt-1" fixed flat>
        <div class="d-flex justify-space-between align-center w-full">
          <h6 class="ma-0">
            <slot name="servieTitleBar"></slot>
          </h6>
          <slot name="serviceDrawerCloseButton"></slot>
        </div>
      </v-app-bar>
    </div>

      <v-form ref="form"  >
    <div class="pa-5  mt-10"> 

      <v-text-field
        v-model="service.title"
        name="title"
        label="Service Title"
        :rules="basicRules"
        hide-details="auto"
        class="mx-1 mb-8"
      ></v-text-field>
     
      <v-text-field
        v-model="service.sub_title"
        name="sub_title"
        
        label="Sub Title"
        :rules="basicRules"
        hide-details="auto"
        class="mx-1 mb-8"
      ></v-text-field>
      <v-textarea
        v-model="service.short_description"
        name="short_description"
        label="Short Description"
        hint="Short description about your new service"
        :rules="basicRules"
        class="mx-1 mb-8"
      ></v-textarea>
      <v-textarea
        v-model="service.description"
        name="description"
        label="Description"
        hint="Brief description about your new service"
        :rules="basicRules"
        class="mx-1 mb-8"
      ></v-textarea>
      <v-file-input
        label="Image"
        v-model="image"
        ref="image" 
        type="file"
        name="image"
        @change="imageUpload"
        truncate-length="15"
        :rules="basicRules"
        class="mx-1 mb-8"
      ></v-file-input>
    </div>
    <div class="px-10 d-flex justify-space-between">
      <v-btn
      color="error"
      elevation="2"
    >cancel</v-btn>
    <v-btn
      @click="saveService"
      elevation="2"
      color="primary"
    >Add Service</v-btn>
    </div>
  </v-form>
  </vue-perfect-scrollbar>
</template>
<script>
  import {mapActions} from 'vuex';
export default {
  name : "searchDrawer",
  data() {
    return {
      image: null,
      basicRules: [(v) => !!v || " Above field is required"],
    };
  },
  models:{
    prop: "service",
  },
props: {
  service: {
    type: Object,
    require: true,
  }
},
methods: {
  ...mapActions(["addService"]),
  imageUpload(event){
    // this.image =  this.$refs.image.files[0];
    console.log(this.image, ' ~ files upload')
  },
  saveService(){
    const headers = { 'Content-Type': 'multipart/form-data' };
    let form = new FormData();
    let service = this.service;
      // service.image = this.image
      form.append('image',this.image,this.image.name)
      form.append('title',service.title);
      form.append('sub_title',service.sub_title);
      form.append('short_description',service.short_description);
      form.append('description',service.description);
      // console.log(form, " ~ form ");
      this.addService(form,headers);

      this.$refs.form.reset();
    },
}
};
</script>
