<template>
  <div class="section">
    <div id="profile-title" />
    <div class="profile-wrapper">
      <div class="icon">
        <img src="@/assets/icon.png" />
      </div>

      <div class="subsection">
        <h2 class="subsection-title">shu (@ceshmina)</h2>
        <div class="subsection-content">
          <p>大阪府出身。幼少期よりピアノを習う。高校の友人の影響で物理学を志し、東京大学へ入学。物理学を専攻する傍ら、南米の民族風音楽「フォルクローレ」を演奏するサークルに所属。</p>
          <p>2021年に修士課程を修了後、株式会社アドウェイズに新卒で入社。アプリケーションエンジニアとして開発に従事する他、データ分析関連の業務では数学力を活かしチームを牽引する。</p>
          <p>現在は千葉県在住。休日にはフォルクローレグループ「西田フレンズ」のメンバーとして演奏活動も行っている。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  img {
    width: 300px;
  }
}

.profile-wrapper {
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .subsection {
      margin-left: 30px;
      text-align: left;
    }
  }
}

.subsection-title {
  font-size: 20px;
}

.subsection-content {
  font-size: 15px;
}
</style>
