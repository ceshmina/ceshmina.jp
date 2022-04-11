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

    <dl class="history">
      <template v-for="history in histories" :key="history">
        <dt>{{ history.year}}<br>{{ formatMonth(history.month) }}</dt>
        <dd>{{ history.content }}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [
        {
          year: 2012,
          month: 4,
          content: '東大寺学園高等学校に入学。数学部の友人の影響で理数系の進路に興味を持つ。特に幼少期から宇宙が好きだったこともあり、物理学科への進学を考えるようになる。'
        },
        {
          year: 2015,
          month: 4,
          content: '上京し、東京大学理科一類に入学。物理学を中心に勉強しつつ、数学にも興味があり「都内数学科学生集合」に参加。また「民族音楽愛好会」にも入会し、フォルクローレを始める。'
        },
        {
          year: 2017,
          month: 4,
          content: '理学部物理学科に進学。宇宙論、素粒子論に関わる分野の勉強を主に行う。また授業や研究室体験ではC言語・Pythonに触れ、プログラミングの素養も身に付ける。'
        },
        {
          year: 2018,
          month: 12,
          content: '東京大学、慶應義塾大学、筑波大学の友人たちとフォルクローレグループ「西田フレンズ」を結成。'
        },
        {
          year: 2019,
          month: 3,
          content: '競技プログラミングを始める。夏にかけてAtCoderの青、Codeforcesでは紫に到達した。また、西田フレンズとして初の演奏となった「アンデス民俗音楽の調べ演奏会」に出演。'
        },
        {
          year: 2019,
          month: 4,
          content: '大学院理学系研究科物理学専攻に進学、宇宙線研究所の研究室に所属。宇宙論の勉強をしつつ、少しずつ研究にも触れてみる。修士論文のテーマは「超対称アフレック-ダイン・インフレーション模型の構築」。'
        },
        {
          year: 2019,
          month: 8,
          content: '日鉄ソリューションズ株式会社のインターンシップに参加。3週間のプログラムで、Javaの静的コード解析ツールの高速化に従事。'
        },
        {
          year: 2019,
          month: 9,
          content: '株式会社フィックスターズのインターンシップに参加。こちらも3週間のプログラムで、ClPy (OpenCL版CuPy) へのテスト関連の機能追加を体験。'
        },
        {
          year: 2019,
          month: 12,
          content: '西田フレンズとして初の単独ライブを行う。以降、春にかけて多数のライブ出演などの演奏活動を行った。'
        },
        {
          year: 2021,
          month: 2,
          content: 'コロナ禍で制作した西田フレンズの1stアルバム「Aventura」を発売。うち3曲を作曲した他、レコーディング、ミキシング・マスタリング作業を中心となって行った。'
        },
        {
          year: 2021,
          month: 4,
          content: '株式会社アドウェイズに新卒入社、リワード広告のチームに所属。エンジニアとしてアプリケーションの開発を行いつつ、物理学で培った数学力・論理的思考力を活かしデータサイエンティストとしての業務にも携わっている。'
        }
      ]
    }
  },
  methods: {
    formatMonth(month) {
      return ('0' + month).slice(-2)
    }
  }
}
</script>

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

.history {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  max-width: 720px;
  margin: 50px auto;

  dt, dd {
    padding-bottom: 30px;
  }

  dt {
    font-size: 18px;
    font-weight: bold;
    text-align: right;

    padding-right: 15px;
    @media (min-width: 800px) {
      padding-right: 25px;
    }
    width: 45px;
    border-right: 3px solid #2c3e50;
  }

  dd {
    font-size: 14px;
    text-align: left;

    margin-left: 15px;
    width: calc(100% - 78px);
    @media (min-width: 800px) {
      margin-left: 25px;
      width: calc(100% - 98px);
    }
  }
}
</style>
