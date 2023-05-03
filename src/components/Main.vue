<script setup></script>

<template>
  <main class="main">
    <h1 class="main__title">
      <span class="main__title--red">Центральная россия —</span>1/3 экономики
      страны
    </h1>

    <div class="group">
      <section>
        <h2 class="group-item__title">ДЕНЬГИ</h2>
        <div class="group-item__money-divider" />
        <div class="group-item__body">
          <div class="group-item__body_item">
            <span>73%</span>
            <span>финансовых влияний</span>
          </div>
          <div class="group-item__body_item">
            <span>53%</span>
            <span>накопленных прямых иностранных инвестиций</span>
          </div>
          <div class="group-item__body_item">
            <span>29%</span>
            <span>инвестиций в основной капитал</span>
          </div>
        </div>
      </section>
      <section>
        <h2 class="group-item__title">ПРОИЗВОДСТВО</h2>
        <div class="group-item__manufacture-divider" />
        <div class="group-item__body">
          <div class="group-item__body_item">
            <span>35%</span>
            <span>валового регионального продукта</span>
          </div>
          <div class="group-item__body_item">
            <span>35%</span>
            <span>обрабатывающей промышленности</span>
          </div>
          <div class="group-item__body_item">
            <span>28%</span>
            <span>продукци сельского хозяйства</span>
          </div>
        </div>
      </section>
      <section>
        <h2 class="group-item__title">РЫНОК</h2>
        <div class="group-item__market-divider" />
        <div class="group-item__body">
          <div class="group-item__body_item">
            <span>54%</span>
            <span>внейшней торговли</span>
          </div>
          <div class="group-item__body_item">
            <span>35%</span>
            <span>розничной торговли</span>
          </div>
        </div>
      </section>
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>Рост за 2019 год</th>
          <th>Центральная Россия</th>
          <th>Российская Федерация</th>
        </tr>
        <tr>
          <td>
            <div class="table-td-wrap">
              <img
                class="table-img"
                src="../assets/svg/internationalTradeIcon.svg"
                alt=""
              />
              Внешняя торговля
            </div>
          </td>
          <td>+19.0 %</td>
          <td>+17.6 %</td>
        </tr>
        <tr>
          <td>
            <div class="table-td-wrap">
              <img src="../assets/svg/internationalTradeIcon.svg" alt="" />
              Инвестиции
            </div>
          </td>
          <td>+19.0 %</td>
          <td>+17.6 %</td>
        </tr>
        <tr>
          <td>
            <div class="table-td-wrap">
              <img src="../assets/svg/internationalTradeIcon.svg" alt="" />
              Промышленность
            </div>
          </td>
          <td>+19.0 %</td>
          <td>+17.6 %</td>
        </tr>
        <tr>
          <td>
            <div class="table-td-wrap">
              <img src="../assets/svg/internationalTradeIcon.svg" alt="" />
              Розничная торговля
            </div>
          </td>
          <td>+19.0 %</td>
          <td>+17.6 %</td>
        </tr>
        <tr>
          <td>
            <div class="table-td-wrap">
              <img src="../assets/svg/internationalTradeIcon.svg" alt="" />
              Сельское хозяйство
            </div>
          </td>
          <td>+19.0 %</td>
          <td>+17.6 %</td>
        </tr>
      </table>
    </div>

    <div class="map-image-wrap">
      <img class="map-image" src="../assets/images/map.png" alt="" />
    </div>
  </main>
</template>

<style lang="scss">
.main {
  position: relative;
  padding-bottom: 110px;
  padding-top: 56px;

  @include media(small) {
    padding-bottom: 57px;
  }
}

.main__title {
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  margin: 32px 53px 32px 32px;

  @include media(medium) {
    font-weight: 700;
    font-size: 35px;
    line-height: 35px;
  }

  @include media(small) {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin: 16px 16px 10px 16px;
  }

  &--red {
    color: $color-red;
    margin-right: 10px;
  }
}

.group {
  display: grid;
  grid-template-columns: repeat(3, minmax(1px, 1fr));
  column-gap: 32px;
  padding: 0 32px 47px 32px;

  @include media(medium) {
    padding: 0 16px 32px 16px;
  }

  @include media(small) {
    grid-template-columns: minmax(1px, 1fr);
    row-gap: 32px;
  }
}

.group-item__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 12px;

  @include media(small) {
    font-size: 20px;
    line-height: 20px;
  }
}

.group-item__money-divider {
  background: $color-red;
  width: 85px;
  height: 4px;
  margin-bottom: 12px;
}

.group-item__body {
  display: flex;
  flex-direction: column;
}

.group-item__body_item {
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 12px;

  @include media(small) {
    font-size: 16px;
    line-height: 20px;
  }

  :last-child {
    margin-left: 8px;
    font-weight: 400;
    line-height: 23px;
    color: $color-gray;
  }
}

.group-item__manufacture-divider {
  background: $color-red;
  width: 176px;
  height: 4px;
  margin-bottom: 12px;
}

.group-item__market-divider {
  background: $color-red;
  width: 78px;
  height: 4px;
  margin-bottom: 12px;
}

.table-wrap {
  width: 546px;
  height: 309px;
  background: $color-light-gray;
  padding: 17px 28px 18px 34px;

  @include media(small) {
    display: none;
  }

  table {
    width: 100%;
    height: 100%;
  }

  .table-td-wrap {
    display: flex;
    align-items: center;
  }

  img {
    height: 30px;
    width: 26px;
    margin-right: 15px;
  }

  th {
    width: 90px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: $color-red;

    &:first-child {
      text-align: start;
      width: 100%;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }

    &:last-child {
      color: $color-gray;
      padding-left: 29px;
    }
  }

  td {
    width: 90px;
    text-align: end;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: $color-red;

    &:first-child {
      text-align: start;
      color: $color-black;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      padding-left: 7px;
    }

    &:last-child {
      padding-left: 29px;
      color: $color-gray;
    }
  }
}

.map-image-wrap {
  width: 406px;
  height: 508px;
  position: absolute;
  right: 44px;
  bottom: 16px;

  @include media(large) {
    width: 355px;
    height: 444px;
  }

  @include media(medium) {
    position: static;
    margin: 0 auto;
    margin-top: 32px;
  }

  @include media(small) {
    margin-top: 0;
  }
}
</style>
