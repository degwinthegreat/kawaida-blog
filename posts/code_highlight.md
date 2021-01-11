---
title: "code highlight"
date: "2020-01-11"
---

コードハイライトのテスト

```css
h1: {
  color: red;
}
```

できた！

next チュートリアルで使った `remark-html` の[README](https://github.com/remarkjs/remark-html) に載ってた `remark-highlight.js` を使って実現しました。

これも [README](https://github.com/remarkjs/remark-highlight.js) みながらやったらすぐできた。

README に載ってる内容だけだと css が当たらなかったので、パッケージの中の適当な css を読み込んでこんな感じ

```javascript
...
import "highlight.js/styles/dark.css"
...
```
