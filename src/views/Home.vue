<template>
  <div class="home_wrapper">
    <div class="home_wrapper_left">
      <div class="home_wrapper_left_col1">
        <div class="title row1">扁社</div>
        <div class="toggle">
          <button
            type="button"
            class="toggle book"
            v-on:click="showABookCatalog(bookCatalogLoaded)"
          >出版物</button>
          <button type="button" class="toggle about" v-on:click="showAboutCatalog(aboutLoaded)">关于</button>
        </div>
      </div>
      <div class="home_wrapper_left_col2" v-if="bookCatalogLoaded">
        <div class="row1">〇</div>
        <div class="catalog_wrapper book">
          <button type="button" class="toggle book" v-on:click="showBook1(book1Loaded)">蔡驍《有颜色的风景》</button>
          <button type="button" class="toggle book" v-on:click="showBook2(book2Loaded)">蔡驍《无色的风暴》</button>
        </div>
      </div>
      <div class="home_wrapper_left_col2 row3Content" v-else-if="aboutLoaded">
        <About></About>
      </div>
      <div class="home_wrapper_left_col3" v-if="book1Loaded">
        <Book1 />
      </div>
      <div class="home_wrapper_left_col3" v-if="book2Loaded">
        <Book2 />
      </div>
    </div>
    <div class="home_wrapper_right">
      <router-link class="toggle english" to="/en">English</router-link>
    </div>
  </div>
</template>

<script>
import About from "@/components/About/About.vue";
import Book1 from "@/components/Books/Book1.vue";
import Book2 from "@/components/Books/Book2.vue";

export default {
  name: "Home",
  components: { About, Book1, Book2 },

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
    max-height: calc(100vh - 4rem);
    .row1 {
      margin-bottom: 0.4rem;
    }
    &_col1 {
      margin-right: 1.5rem;
      height: min-content;
    }
    &_col2 {
      margin-right: 1.5rem;
      max-width: 380px;
      height: min-content;
    }
    &_col3 {
      max-width: 720px;
      height: 90vh;
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
