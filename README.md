<h1 align="center">NINCO</h1>

## :link: アプリケーションの概要
<ul>
  <li>ファッション系のECサイトです。</li>
  <li>HTML,CSS,JavaScript,jQueryを用いたフロントのみの実装です。</li>
  <li>JSファイルにアイテム情報を記述して、情報別にアイテムを一覧表示できる様にしています。</li>
</ul>

## :link: アプリケーションの機能
<ul>
  <li>新規会員登録・ログインをすると商品の購入、出品が可能。</li>
  <li>新規会員登録、ログインがお済みでない方も商品の一覧、詳細を閲覧可能。</li>
  <li>決済方法はご自身のクレジットカードのみ。</li>
</ul>

## :link: 開発環境

<p align="center">
  <a href="https://www.ruby-lang.org/ja/"><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="45px;" /></a>
  <a href="https://railsguides.jp/getting_started.html"><img src="https://kuromame-blog.com/wp-content/uploads/rails-768x432.png" height="45px;" /></a>
  <a href="http://haml.info/"><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="45px;" /></a>
  <a href="https://sass-lang.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/144px-Sass_Logo_Color.svg.png" height="40px;" /></a>
  <a href="https://jquery.com/"><img src="https://syncer.jp/storage/web/brand-logos/static/dst/jquery-logo-001.png" height="45px;" /></a>
  <a href="https://github.co.jp/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="45px;" /></a>
  <a href="https://aws.amazon.com/jp/"><img src="https://d0.awsstatic.com/logos/powered-by-aws.png" height="45px;" /></a>
</p>

## :globe_with_meridians: サイト紹介
<ul>
  <li>IPアドレス : http://54.238.23.37/</li>
</ul>

## :computer: インストール方法
1.このリポジトリを複製
$ git clone https://github.com/karajan-37458/FURIMA.git

2.インストールしたリポジトリに移動
$ cd FURIMA

3.gemをアプリケーションに適用
$ bundle install

4.DBの作成&反映
$ rails db:create
$ rails db:migrate

5.カテゴリ一覧の反映
$ rails db:seed

6.アプリケーションの起動
$ rails s
👉 http://localhost:3000
