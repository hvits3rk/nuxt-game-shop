<template>
<footer class="footer">
  <div class="container">
    <div class="level">

      <div class="level-left">
        <div class="level-item">
          <div class="columns">
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6 has-text-dark">АКТИВИРОВАТЬ КОД</a>            
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6 has-text-dark">АКТИВИРОВАТЬ ИГРУ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6 has-text-dark">КОНТАКТЫ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6 has-text-dark">ВАКАНСИИ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6 has-text-dark">ПРЕДЛОЖИТЬ ИГРУ</a>
            </div>
          </div>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control has-icons-left">
                  <div class="select is-light is-small">
                    <select class="has-text-grey" name="select-language" id="select-language">
                      <option value="ru" selected>Русский</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                  </span>
                </div>
              </div>
              <div class="field is-narrow">
                <div class="control has-icons-left">
                  <div class="select is-light is-small">
                    <select class="has-text-grey" name="select-currency" id="select-currency">
                      <option value="rub" selected>RUB</option>
                      <option value="usd">USD</option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-dollar-sign"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="container">
    <div class="columns">
      <div class="column">
        <p><a class="has-text-dark">ИГРЫ</a></p>
        <p><a class="is-size-7 has-text-grey">СО СКИДКОЙ</a></p>
        <p><a class="is-size-7 has-text-grey">ЛИДЕРЫ ПРОДАЖ</a></p>
        <p><a class="is-size-7 has-text-grey">Свежие релизы</a></p>
        <p><a class="is-size-7 has-text-grey">Высоко оцененные</a></p>
      </div>
      <div class="column">
        <p><a class="has-text-dark">ПОДДЕРЖКА</a></p>
        <p><a class="is-size-7 has-text-grey">FAQ сайта</a></p>
        <p><a class="is-size-7 has-text-grey">Поддержка</a></p>
        <p><a class="is-size-7 has-text-grey">Правила</a></p>
        <p><a class="is-size-7 has-text-grey">Контакты</a></p>
      </div>
      <div class="column">
        <p><a class="has-text-dark">МОЙ ПРОФИЛЬ</a></p>
        <p><a class="is-size-7 has-text-grey">Моя библиотека</a></p>
        <p><a class="is-size-7 has-text-grey">Заказы и настройки</a></p>
      </div>
      <div class="column">
        <p><a class="has-text-dark">СООБЩЕСТВО</a></p>
        <p><a class="is-size-7 has-text-grey">Форумы</a></p>
        <p><a class="is-size-7 has-text-grey">Желания сообщества</a></p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="columns is-multiline is-centered">
      <div class="column is-narrow has-text-centered-touch">
        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"></i>
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"></i>
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"></i>
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"></i>
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="button is-medium">
          <span class="icon is-medium">
            <i class="fas fa-heading fa-2x"></i>
          </span>
        </a>
      </div>
    </div>
  </div>

  <hr>

  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="buttons">
            <span class="button is-small is-text">Правовая информация</span>
            <span class="button is-small is-text">Реорганизация компании</span>
            <span class="button is-small is-text">Политика cookie</span>
            <span class="button is-small is-text">Благодарности</span>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="is-size-7">KOK SP. z o.o. 2018</p>
        </div>
      </div>
    </div>
  </div>

</footer>
</template>

<script>
export default {
  name: 'the-footer',
};
</script>

<style scoped>

</style>

