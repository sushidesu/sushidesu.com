<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content">
          <h2 class="title">About</h2>
          <p>sushidesu (すしです)</p>
          <p>
            雑貨屋さんでネットショップページの管理のアルバイトをしながら、趣味でプログラミングをしています。<br>
            新しいものが好きです。<br>
            世界中で3億MAUに使われ続けるサービスを作れるくらいのエンジニアになるべく、現在就職活動中です。
          </p>

          <h2 class="title">つくったもの</h2>

          <h3 class="is-size-5">このページ (<a href="https://sushidesu.com">sushidesu.com</a>)</h3>
          <p>言語: <span class="tag">JavaScript</span> <span class="tag">Html</span> <span class="tag">CSS</span><br>使った技術: <span class="tag">Nuxt</span> <span class="tag">Zdog</span> <span class="tag">Netlify</span></p>
          <p>Zdogを使いたくて作りました。ポートフォリオを兼ねています。</p>

          <h3 class="is-size-5">Chrome拡張機能 - Cake (<a href="">Chromeウェブストア</a>)</h3>
          <p>言語: <span class="tag">TypeScript</span> <span class="tag">Pug</span> <span class="tag">Sass</span><br>使った技術: <span class="tag">ChromeApi</span> <span class="tag">Gulp</span> <span class="tag">Webpack</span> <span class="tag">Bulma</span></p>
          <p>複数のECサイトに個別に商品登録するのが面倒だったので一括で更新できるように作りました。jsonでのインポート・エクスポート機能や各項目のバリデーションなど、いろいろできます。</p>

          <h3 class="is-size-5">簡易バーコード印刷アプリ (<a href="">GitHub</a>)</h3>
          <p>言語: <span class="tag">C#</span><br>使った技術: <span class="tag">NPOI</span> <span class="tag">WPF</span> <span class="tag">Linq</span></p>
          <p>バーコードプリンターに付属しているアプリケーションが使いにくかったので作りました。エクセルファイルを読み込み、4分割で印刷されます。初期の頃に作ったものでコードが汚いですが、一応公開しています。</p>

          <h3 class="is-size-5">Random Color Generator (<a href="">サイト</a>)</h3>
          <p>言語: <span class="tag">JavaScript</span> <span class="tag">Html</span> <span class="tag">CSS</span><br>使った技術: <span class="tag">parcel</span> <span class="tag">PostCSS</span></p>
          <p>完全にランダムな色が生成されて欲しかったので作りました。このサイトの色はこれで生成したものを使っています。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tag {
  background-color: var(--white);
  border: 1px solid var(--sub);
}
</style>

