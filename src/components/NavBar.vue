<template>
  <div class="container">
    <div id="nav">
      <div class="nav_elem">
        <div class="nav_elem_logo"></div>
      </div>
      <div class="nav__links">
        <div class="nav__links__message">
          <router-link to="/">New message</router-link>
        </div>
        <div class="nav__links__history">
          <router-link to="/history">History</router-link>
        </div>
      </div>
    </div>
    <div class="app_line"></div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  font-family: "Source Sans Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 100vw;
  position: fixed;
  top: 0;
  background-color: #ffffff;

  @media (width: 375px) {
    width: 375px;
  }

  .app_line {
    border-bottom: solid 24px #4eadc5;
    margin-top: -16px;
    min-width: 100vw;

    @media (width: 375px) {
      width: 383px;
    }
    @media (width: 320px) {
      width: 320px;
    }
  }
  #nav {
    display: grid;
    grid-template-areas: "elem links";
    max-width: 1000px;
    margin: auto;
    padding: 15px;

    @media (width: 375px) {
      width: 375px;
      grid-template-columns: 144px 176px;
    }

    @media (width: 320px) {
      width: 320px;
    }

    .nav_elem {
      grid-area: elem;
      margin-top: 16px;

      .nav_elem_logo {
        content: url("../assets/rick_morty.png");
        width: 144px;
        height: 42px;
        margin-top: -16px;
        padding: 1px;

        @media (width: 375px) {
          width: 110px;
          height: 32px;
        }

        @media (width: 320px) {
          width: 90px;
          height: 32px;
        }
      }
    }
    .nav {
      &__links {
        grid-area: links;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        a {
          font-size: 16px;
          color: #324b72;
          text-decoration: none;
          padding: 5px;
          font-weight: 400;

          &.router-link-exact-active {
            color: #fafffd;
            background-color: #4eadc5;
          }
        }

        &__history {
          margin-left: 16px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
