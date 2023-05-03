<script setup></script>

<template>
  <header class="header">
    <img class="logo" src="../assets/images/logo.png" alt="" />

    <button class="menu-btn">
      <img src="../assets/svg/menu.svg" alt="" />
    </button>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  max-width: 1194px;
  z-index: 5;
  width: 100%;
  height: 56px;
  padding-left: 32px;
  padding-right: 33px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 4px 8px rgba(9, 30, 66, 0.25);

  @include media(small) {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.logo {
  width: 112px;
  height: 14px;
}

.menu-btn {
  display: flex;
  align-items: center;
}
</style>
