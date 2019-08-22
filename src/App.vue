<template>
  <div id="app">
    <!-- burasi navbar line -->
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/">
          <img
            src="./img/logo.png"
            alt="crypto sozluk: alternatif kaynak"
            width="auto"
            height="auto"
          />: crypto sozluk
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <router-view class="main container"/>
  </div>
</template>

<style lang="scss">
.main{
  margin-top: 2em;
}
</style>
