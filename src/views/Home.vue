<template>
  <!-- 电脑端样式 -->
  <div class="home_wrapper" v-if="screenWidth>500">
    <div class="home_wrapper_left">
      <div class="home_wrapper_left_col1">
        <div class="title row1">扁社</div>
        <div class="toggle">
          <button
            type="button"
            class="toggle book"
            v-on:click="showBookCatalog(bookCatalogLoaded)"
          >出版物</button>
          <button
            type="button"
            class="toggle about"
            v-on:click="showAboutCatalog(aboutContentLoaded)"
          >关于</button>
        </div>
      </div>
      <div class="home_wrapper_left_col2" v-if="bookCatalogLoaded">
        <div class="row1">〇</div>
        <div class="catalog_wrapper toggle">
          <button type="button" class="toggle book" v-on:click="showBook1(book1Loaded)">蔡驍《有颜色的风景》</button>
          <button type="button" class="toggle book" v-on:click="showBook2(book2Loaded)">蔡驍《无色的风暴》</button>
        </div>
      </div>
      <div class="home_wrapper_left_col2 row3Content" v-else-if="aboutContentLoaded">
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
  <!-- 手机端样式 -->
  <div class="home_wrapper mobile_wrapper" v-else-if="screenWidth<500">
    <div class="mobile_wrapper_top">
      <div class="mobile_wrapper_top_left">
        <div class="title row1" :class="[ fadeout ? 'fadeout' : '' ]" v-if="titleLoaded">扁社</div>
        <div class="mobileToggle">
          <div
            type="button"
            class="book backBtn"
            v-if="bookCatalogBack"
            v-on:click="showMobileBookCatalog(titleLoaded, aboutLoaded, bookCatalogLoaded,bookCatalogBack)"
          >←</div>
          <button
            type="button"
            class="mobileToggle book"
            v-if="bookMenuLoaded"
            v-on:click="showMobileBookCatalog(titleLoaded, aboutLoaded, bookCatalogLoaded,bookCatalogBack)"
          >出版物</button>
          <div class="home_wrapper_left_col2" v-if="bookCatalogLoaded">
            <div class="row1">〇</div>
            <div class="catalog_wrapper book">
              <button
                type="button"
                class="mobileToggle book"
                v-on:click="showMobileBook1()"
              >蔡驍《有颜色的风景》</button>
              <button
                type="button"
                class="mobileToggle book"
                v-on:click="showMobileBook2()"
              >蔡驍《无色的风暴》</button>
            </div>
          </div>
          <div
            type="button"
            class="about backBtn"
            v-if="aboutBack"
            v-on:click="showMobileAboutCatalog(titleLoaded,bookMenuLoaded,aboutLoaded,aboutBack,aboutContentLoaded)"
          >←</div>
          <button
            type="button"
            class="mobileToggle about"
            v-on:click="showMobileAboutCatalog(titleLoaded,bookMenuLoaded,aboutLoaded,aboutBack,aboutContentLoaded)"
            v-if="aboutLoaded"
          >关于</button>
        </div>
      </div>
      <div class="home_wrapper_top_right">
        <router-link class="mobileToggle english" to="/en">English</router-link>
      </div>
    </div>
    <div class="mobile_wrapper_bottom">
      <div v-if="aboutContentLoaded">
        <About></About>
      </div>
      <div class="home_wrapper_left_col3 mobile_col3" v-if="book1Loaded">
        <Book1 />
      </div>
      <div class="home_wrapper_left_col3 mobile_col3" v-if="book2Loaded">
        <Book2 />
      </div>
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
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "overscroll-behavior: none");
  },

  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      bookMenuLoaded: true,

      //一级菜单
      //扁社开关
      titleLoaded: true,
      //出版物开关
      bookCatalogLoaded: false,
      //关于开关
      aboutLoaded: true,

      //二级菜单
      //出版物目录返回开关
      bookCatalogBack: false,
      //出版文章1开关
      book1Loaded: false,
      //出版文章2开关
      book2Loaded: false,
      //关于内容开关
      aboutContentLoaded: false,
      //关于返回开关
      aboutBack: false,
      //动画开关
      fadeout: false
    };
  },
  methods: {
    showBookCatalog(bookCatalogLoaded) {
      //关掉其他目录
      this.aboutContentLoaded = false;
      //关掉其他文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //打开或关闭当前点击目录
      this.bookCatalogLoaded = !bookCatalogLoaded;
    },
    showAboutCatalog(aboutContentLoaded) {
      //关掉其他目录
      this.bookCatalogLoaded = false;
      //关掉其他文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //打开或关闭当前点击目录的内容
      this.aboutContentLoaded = !aboutContentLoaded;
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
    },
    showMobileBookCatalog(
      titleLoaded,
      aboutLoaded,
      bookCatalogLoaded,
      bookCatalogBack
    ) {
      //关掉标题
      this.titleLoaded = !titleLoaded;

      //关掉关于
      this.aboutLoaded = !aboutLoaded;
      //打开或关闭当前点击目录
      this.bookCatalogLoaded = !bookCatalogLoaded;
      //打开或关闭当前点击目录返回
      this.bookCatalogBack = !bookCatalogBack;
      //关掉其他文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //关掉关于的内容
      this.aboutContentLoaded = false;
    },
    showMobileBook1() {
      //关掉其他文章
      this.book2Loaded = false;
      //关掉二级菜单
      this.bookCatalogLoaded = false;
      //关掉二级菜单返回
      this.bookCatalogBack = false;
      //打开标题
      this.titleLoaded = true;
      //打开关于
      this.aboutLoaded = true;
      //打开选中文章
      this.book1Loaded = true;
    },
    showMobileBook2() {
      //关掉其他文章
      this.book1Loaded = false;
      //关掉二级菜单
      this.bookCatalogLoaded = false;
      //关掉二级菜单返回
      this.bookCatalogBack = false;
      //打开标题
      this.titleLoaded = true;
      //打开关于
      this.aboutLoaded = true;
      //打开选中文章
      this.book2Loaded = true;
    },
    showMobileAboutCatalog(
      titleLoaded,
      bookMenuLoaded,
      aboutLoaded,
      aboutBack,
      aboutContentLoaded
    ) {
      //关掉标题
      this.titleLoaded = !titleLoaded;
      //关掉出版物
      this.bookMenuLoaded = !bookMenuLoaded;
      //关掉所有文章
      this.book1Loaded = false;
      this.book2Loaded = false;
      //打开或关闭当前目录
      this.aboutBack = !aboutBack;
      this.aboutContentLoaded = !aboutContentLoaded;
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.home_wrapper {
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
  position: absolute;
  width: -webkit-fill-available;
  height: calc(100vh - 4rem);
  &_left {
    display: flex;
    // flex-wrap: wrap;
    text-align: left;
    z-index: 2;
    // max-height: calc(100vh - 4rem);
    .row1 {
      // margin-bottom: 0.4rem;
    }
    &_col1 {
      margin-right: 1.5rem;
      height: min-content;
      min-width: fit-content;
    }
    &_col2 {
      margin-right: 1.5rem;
      height: 100%;
      min-width: fit-content;
    }
    &_col3 {
      max-width: 720px;
      height: 93vh;
      overflow-y: scroll;
      overflow-x: hidden;
      padding-right: 0.5rem;
    }
  }
  &_right {
    z-index: 2;
    min-width: fit-content;
  }
  .title {
    display: flex;
    text-align: left;
  }
  .catalog_wrapper {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .toggle {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 17px;
    margin: 0.1rem 0 0.1rem 0;
    align-items: flex-start;
  }
  .book {
    color: #e41722;
    flex-direction: row;
    max-width: 350px;
  }
  .about {
    color: #008d45;
  }
  .english {
    color: purple;
  }
}

.row3Content {
  margin-top: 3.4rem;
  max-width: 425px;
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

.fadeout {
  animation-duration: 1s;
  animation-name: fadeout;
}
@keyframes fadeout {
  from {
    opacity: 0%;
  }
  to {
    opacity: 50%;
  }
}

//手机端样式
.mobile_wrapper {
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
  justify-content: flex-start;
  &_top {
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }
  &_bottom {
    z-index: 2;
    text-align: left;
  }
}

.mobileToggle {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 17px;
  margin: 0.4rem 0 0.4rem 0;
  align-items: flex-start;
}
.backBtn {
  font-size: larger;
}
.mobile_col3 {
  height: 83vh;
}
</style>
