# hinagata-raspberrypi

## はじめに

`.env` ファイルを `package.json` と同じ階層に用意する。

```
NODE_PI_IP_ADDRESS="xxx.xxx.xxx.xxx"
NODE_PI_USER_NAME="pi"
```

## はじめかた

1. Node.jsのバージョンを確認
    - `node -v` コマンドで `v14.18.1` と表示されたら完了。
2. 依存パッケージをインストール
    - `npm install` コマンドを使う。
3. 動作確認
    - `npm run dev` と `npm run server` コマンドを使用後、ページを開けたら完了。
4. RaspberryPiにコードを送信
    - `npm run send` を使う。

## 環境

### Node.js

- Mac: [nodenv](https://github.com/nodenv/nodenv)
- RaspberryPi: [n](https://github.com/tj/n)

### VSCode

`.vscode/extensions.json` に記載されている拡張を追加することをすすめます。
