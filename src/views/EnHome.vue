<template>
  <div class="home_wrapper">
    <div class="home_wrapper_left">
      <div class="home_wrapper_left_col1">
        <div class="title row1">Pressed Press</div>
        <div class="toggle">
          <button
            type="button"
            class="toggle book"
            v-on:click="showABookCatalog(bookCatalogLoaded)"
          >Books</button>
          <button
            type="button"
            class="toggle about"
            v-on:click="showAboutCatalog(aboutLoaded)"
          >About</button>
        </div>
      </div>
      <div class="home_wrapper_left_col2" v-if="bookCatalogLoaded">
        <div class="row1">〇</div>
        <div class="catalog_wrapper book">
          <button type="button" class="toggle book" v-on:click="showBook1(book1Loaded)">
            <span>
              CAI Xiao,
              <i>Landscapes With Color</i>
            </span>
          </button>
          <button type="button" class="toggle book" v-on:click="showBook2(book2Loaded)">
            <span>
              CAI Xiao,
              <i>Invisible Storm</i>
            </span>
          </button>
        </div>
      </div>
      <div class="home_wrapper_left_col2 row3Content" v-else-if="aboutLoaded">
        <EnAbout />
      </div>
      <div class="home_wrapper_left_col3" v-if="book1Loaded">
        <EnBook1 />
      </div>
      <div class="home_wrapper_left_col3" v-if="book2Loaded">
        <EnBook2 />
      </div>
    </div>
    <div class="home_wrapper_right">
      <router-link class="toggle english" to="/">中文</router-link>
    </div>
  </div>
</template>
<script>
import EnAbout from "@/components/About/EnAbout.vue";
import EnBook1 from "@/components/Books/EnBook1.vue";
import EnBook2 from "@/components/Books/EnBook2.vue";
export default {
  name: "EnHome",
  components: { EnAbout, EnBook1, EnBook2 },

  data() {
    return {
      //出版物开关
      bookCatalogLoaded: false,
      //关于开关
      aboutLoaded: false,
      //出版文章1开关
      book1Loaded: false,
      //出版文章2开关
      book2Loaded: false
    };
  },
  methods: {
    showABookCatalog(bookCatalogLoaded) {
      //关掉其他目录
      this.aboutLoaded = false;
      //关掉其他文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //打开或关闭当前点击目录
      this.bookCatalogLoaded = !bookCatalogLoaded;
    },
    showAboutCatalog(aboutLoaded) {
      //关掉其他目录
      this.bookCatalogLoaded = false;
      //关掉其他文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //打开或关闭当前点击目录
      this.aboutLoaded = !aboutLoaded;
    },
    showBook1(book1Loaded) {
      //关掉其他文章
      this.book2Loaded = false;
      //打开选中文章
      this.book1Loaded = !book1Loaded;
    },
    showBook2(book2Loaded) {
      //关掉其他文章
      this.book1Loaded = false;
      //打开选中文章
      this.book2Loaded = !book2Loaded;
    }
  }
};
</script>
<style scoped lang="scss">
.home_wrapper {
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  &_left {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    z-index: 2;
    .row1 {
      margin-bottom: 0.4rem;
    }
    &_col1 {
      margin-right: 1.5rem;
    }
    &_col2 {
      margin-right: 1.5rem;
      max-width: 380px;
    }
    &_col3 {
      max-width: 720px;
      height: 100vh;
      overflow-y: scroll;
      overflow-x: hidden;
      padding-right: 0.5rem;
    }
  }
  &_right {
    z-index: 2;
  }
  .title {
    display: flex;
    text-align: left;
  }
  .toggle {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 17px;
    margin-bottom: 0.4rem;
  }
  .book {
    color: #e41722;
    flex-direction: row;
  }
  .about {
    color: #008d45;
  }
  .english {
    color: purple;
  }
}

.row3Content {
  margin-top: 3.8rem;
}
button {
  border: 0;
  background-color: transparent;
  outline: none;
  padding: unset;
  &:hover {
    text-decoration: line-through;
  }
  &:focus {
    text-decoration: line-through;
  }
}
</style>
