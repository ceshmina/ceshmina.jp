# ceshmina

個人のウェブサイト[ceshmina.jp](https://ceshmina.jp)です。


## 開発環境

```
$ yarn install
$ yarn serve
```

localhost:8080で開発用サーバーが立ち上がります。


## ローカルで動作確認

```
$ yarn build
$ docker-compose up
```

ビルドし、結果をNginxでlocalhost:8081にホストします。


## テスト環境にデプロイ

devブランチにマージすると自動でビルドし結果をtest_releaseブランチに展開します。

Netlifyを用いて[dev.ceshmina.jp](https://dev.ceshmina.jp)にデプロイされます。


## 本番環境にデプロイ

mainブランチにマージすると自動でビルドし結果をreleaseブランチに展開します。

GitHub Pagesを用いて[ceshmina.jp](https://ceshmina.jp)にデプロイされます。
