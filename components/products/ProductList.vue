<template>
  <div class="columns is-multiline">
    <div
      class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd"
      v-for="game in gameList"
      :key="game.id"
    >
      <product-preview
        :id="game.id"
        :title="game.title"
        :previewText="game.previewText"
        :thumbnail="game.thumbnail"
      />
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/products/ProductPreview';

export default {
  name: 'product-list',
  components: {
    ProductPreview,
  },
  data() {
    return {
      gameList: [
        {
          id: '1',
          title: 'Dead Cells',
          previewText: `Roguelike, Rogue-подобная, Rogue-подобно-подобная, рогалик!
                        Независимо от того, как вы ее называете, мир всегда разный!
                        Таким образом, мы хотим представить вашему вниманию
                        незаконнорожденного ребенка рогалика и метроидвании, RogueVANIA.`,
          thumbnail: 'http://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg',
        },
        {
          id: '2',
          title: 'Rimworld',
          previewText: `Научно-фантастический симулятор колонии под управлением ИИ-рассказчика.

                        RimWorld управляет тремя людьми, выжившими после крушения космического лайнера,
                        в строительстве колонии в приграничном мире на краю изученного пространства.
                        Источники вдохновения этой игры -это дух космического вестерна Firefly,
                        глубокая проработка Dwarf Fortress и эпические Dune и Warhammer 40 000.`,
          thumbnail: 'http://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg',
        },
        {
          id: '3',
          title: 'Warhammer 40,000: Inquisitor - Martyr',
          previewText: `Отправляйтесь в отравленный ересью сектор Калигари и очистите его от скверны.
                        В ваших руках вся мощь Империума.
                        Беспощадный ролевой экшен Warhammer 40,000: Inquisitor – Martyr
                        посвящен крестовому походу Инквизиторов разнообразных классов,
                        объединенных общей целью – донести волю Императора до самых темных уголков Вселенной!`,
          thumbnail: 'http://cdn.akamai.steamstatic.com/steam/apps/527430/header.jpg',
        },
      ],
    };
  },
};
</script>

