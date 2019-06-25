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
          <p>
            言語: <span class="tag">JavaScript</span> <span class="tag">HTML</span> <span class="tag">CSS</span><br>
            使った技術: <span class="tag">Nuxt.js</span> <span class="tag">Zdog</span> <span class="tag">Netlify</span><br>
            コード: <a href="https://github.com/sushi-desu/sushidesu.com">GitHub</a>
          </p>
          <p>Zdogを使いたくて作りました。ポートフォリオを兼ねています。</p>

          <h3 class="is-size-5">Chrome拡張機能 - Cake (<a href="https://chrome.google.com/webstore/detail/cake/icipiapabialkgjnobhfolicbgkbpckc">Chromeウェブストア</a>)</h3>
          <p>
            言語: <span class="tag">TypeScript</span> <span class="tag">Pug</span> <span class="tag">Sass</span><br>
            使った技術: <span class="tag">ChromeApi</span> <span class="tag">gulp.js</span> <span class="tag">webpack</span> <span class="tag">Bulma</span><br>
            コード: <a href="https://github.com/sushi-desu/cake">GitHub</a>
          </p>
          <p>複数のECサイトに個別に商品登録するのが面倒だったので一括で更新できるように作りました。jsonでのインポート・エクスポート機能や各項目のバリデーションなど、いろいろできます。</p>

          <h3 class="is-size-5">Random Color Generator (<a href="">準備中</a>)</h3>
          <p>
            言語: <span class="tag">JavaScript</span> <span class="tag">HTML</span> <span class="tag">CSS</span><br>
            使った技術: <span class="tag">Parcel</span> <span class="tag">PostCSS</span><br>
            コード: <a href="https://github.com/sushi-desu/color_generator">GitHub</a>
          </p>
          <p>完全にランダムな色が生成されて欲しかったので作りました。このサイトの色はこれで生成したものを使っています。</p>

          <h3 class="is-size-5">日計表のスクレイピング</h3>
          <p>
            言語: <span class="tag">Python3</span><br>
            使った技術: <span class="tag">Google Sheets API</span> <span class="tag">Selenium</span> <span class="tag">Headless Chrome</span><br>
            コード: <span>準備中</span>
          </p>
          <p>複数のECサイトから手動で日々の売り上げを集計するのが面倒だったので作りました。スクリプトを起動するだけで、各サイトから売り上げをスクレイピングしてGoogle Sheetsに自動で記入してくれます。未記入の日の分もまとめて記入、新しいシートも自動で作ってくれるなど、ストレスなく使えるように工夫しています。</p>

          <h3 class="is-size-5">簡易バーコード印刷アプリ</h3>
          <p>
            言語: <span class="tag">C#</span><br>
            使った技術: <span class="tag">NPOI</span> <span class="tag">WPF</span> <span class="tag">LINQ</span><br>
            コード: <span>準備中</span>
          </p>
          <p>バーコードプリンターに付属しているアプリケーションが使いにくかったので作りました。エクセルファイルを読み込み機能や4分割での印刷機能があります。初期の頃に作ったものですが、公開予定です。</p>

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

