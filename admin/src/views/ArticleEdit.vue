<template>
  <div class="about">
      <h1>{{id?'编辑':'新建'}}文章</h1>
      <el-form label-width="120px" @submit.native.prevent="save">
               <el-form-item label="所属分类">
          <el-select v-model="model.categories" multiple>
            <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="详情">
         <vue-editor v-model="model.body" useCustomImageHanler @imageAdded = "handleImageAdded" ></vue-editor>
          <!-- <el-input v-model="model.body"></el-input> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
  </div>
</template> 

<script>
import {VueEditor} from "vue2-editor";


export default {
  props:{
    id:{}
  },
  components:{
    VueEditor
  },
  data(){
    return{
      model:{},
      categories:[],
      }
  },
  methods:{
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        const formData = new FormData();
        formData.append("file",file);//'file',这个是后台写的接受参数属性名，一定要保持一样
        const res = await this.$http.post('upload',formData)
        Editor.insertEmbed(cursorLocation,"image",res.data.url);
        resetUploader();

        // axios({
        //   url: "图片上传的接口路径",
        //   method: "POST",
        //   data: formData,
        //   // processData: false, //必须false才会自动加上正确的Content-Type
        //   // contentType: false,//必须false才会避开jQuery对 formdata 的默认处理
        // })
        // .then(result => {
        // //这个方法大家可以百度查一下，"image"意思当图片显示
        //   Editor.insertEmbed(cursorLocation,"image", "你的图片id(得是全路径，直接能访问到的)");
        //   resetUploader();
        // })
        // .catch((err) => {
        //   console.log(err);
        // })
      },
    async save(){
      console.log('save')
      let res
      if(this.id)
      {
        res = await this.$http.put(`rest/articles/${this.id}`,this.model)
      }else{
        res = await this.$http.post('rest/articles',this.model)
      }
      console.log(res);
      this.$router.push('/articles/list')
      this.$message({
        type:'success',
        message:'保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
     async fetchCatgories(){
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },

  },
  created(){
    this.fetchCatgories()
    this.id && this.fetch()
  }

}
</script>

<style>

</style>