<template>
<footer class="footer">
  <div class="container">
    <div class="level">

      <div class="level-left">
        <div class="level-item">
          <div class="columns">
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6">АКТИВИРОВАТЬ КОД</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6">АКТИВИРОВАТЬ ИГРУ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6">КОНТАКТЫ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6">ВАКАНСИИ</a>
            </div>
            <div class="column is-narrow has-text-centered-touch">
              <a class="is-size-6">ПРЕДЛОЖИТЬ ИГРУ</a>
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
                    <select class="my-low-link" name="select-language" id="select-language">
                      <option value="ru" selected>Русский</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <font-awesome-icon :icon="['fas', 'language']" />
                  </span>
                </div>
              </div>
              <div class="field is-narrow">
                <div class="control has-icons-left">
                  <div class="select is-light is-small">
                    <select class="my-low-link" name="select-currency" id="select-currency">
                      <option value="rub" selected>RUB</option>
                      <option value="usd">USD</option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <font-awesome-icon :icon="['fas', 'ruble-sign']" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>    
  </div>

  <div class="container">
    <div class="columns">
      <div class="column">
        <p><a class="is-size-6">ИГРЫ</a></p>
        <p><a class="is-size-7 my-low-link">СО СКИДКОЙ</a></p>
        <p><a class="is-size-7 my-low-link">ЛИДЕРЫ ПРОДАЖ</a></p>
        <p><a class="is-size-7 my-low-link">Свежие релизы</a></p>
        <p><a class="is-size-7 my-low-link">Высоко оцененные</a></p>
      </div>
      <div class="column">
        <p><a class="is-size-6">ПОДДЕРЖКА</a></p>
        <p><a class="is-size-7 my-low-link">FAQ сайта</a></p>
        <p><a class="is-size-7 my-low-link">Поддержка</a></p>
        <p><a class="is-size-7 my-low-link">Правила</a></p>
        <p><a class="is-size-7 my-low-link">Контакты</a></p>
      </div>
      <div class="column">
        <p><a class="is-size-6">МОЙ ПРОФИЛЬ</a></p>
        <p><a class="is-size-7 my-low-link">Моя библиотека</a></p>
        <p><a class="is-size-7 my-low-link">Заказы и настройки</a></p>
      </div>
      <div class="column">
        <p><a class="is-size-6">СООБЩЕСТВО</a></p>
        <p><a class="is-size-7 my-low-link">Форумы</a></p>
        <p><a class="is-size-7 my-low-link">Желания сообщества</a></p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="columns is-multiline is-centered">
      <div class="column is-narrow has-text-centered-touch">
        <a class="my-low-link">
          <span class="icon is-medium icon-vk">
            <font-awesome-icon :icon="['fab', 'vk']" size="2x" />
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="my-low-link">
          <span class="icon is-medium icon-facebook">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="my-low-link">
          <span class="icon is-medium icon-discord">
            <font-awesome-icon :icon="['fab', 'discord']" size="2x" />
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="my-low-link">
          <span class="icon is-medium icon-twitter">
            <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" />
          </span>
        </a>
      </div>
      <div class="column is-narrow has-text-centered-touch">
        <a class="my-low-link">
          <span class="icon is-medium icon-youtube">
            <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
          </span>
        </a>
      </div>
    </div>
    <hr>    
  </div>

  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="columns is-multiline">
            <div class="column is-narrow">
              <p><a class="is-size-7 my-low-link">Правовая информация</a></p>
            </div>
            <div class="column is-narrow">
              <p><a class="is-size-7 my-low-link">Реорганизация компании</a></p>
            </div>
            <div class="column is-narrow">
              <p><a class="is-size-7 my-low-link">Политика cookie</a></p>
            </div>
            <div class="column is-narrow">
              <p><a class="is-size-7 my-low-link">Благодарности</a></p>
            </div>
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
div a.is-size-6 {
  color: #546E7A;
}
div a.is-size-6:hover {
  color: #263238;
}

.my-low-link {
  color: #90A4AE;
}

.my-low-link:hover {
  color: #455A64;
}

.icon-youtube:hover {
  color: #F44336;
}

.icon-twitter:hover {
  color: #00aced;
}

.icon-discord:hover {
  color: #7289DA;
}

.icon-facebook:hover {
  color: 	#3b5998;
}

.icon-vk:hover {
  color: #4E729A;
}

.not-done {
  text-decoration: line-through;
}
</style>
