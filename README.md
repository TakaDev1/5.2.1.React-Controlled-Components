# 5.2.1.React-Controlled-Components

## 概要

React の **Controlled コンポーネント**を使って、入力された文字をリアルタイムで大文字に変換して表示するフォームを実装する。

`useState` で入力値を管理し、`onChange` で入力値を取得することで、React がフォームの状態を制御する。

---

## 課題

React の Controlled コンポーネントを使って、入力された文字がすべて大文字に変換されてリアルタイムに表示されるフォームを作成してください。

### 条件

1. 入力フォームを `useState` で制御すること
2. 入力された文字をすべて大文字（`toUpperCase()`）に変換して表示すること
3. `TailwindCSS` を使い、入力欄に `border` と `p-2` を適用すること

---

## 完成イメージ

入力欄に

```text
hello react
```

と入力すると、

```text
HELLO REACT
```

とリアルタイムに表示される。

---

## 学習内容

* Controlled コンポーネント
* `useState`
* `onChange`
* `event.target.value`
* `toUpperCase()`
* React によるフォーム状態の管理
* TailwindCSS の `border`
* TailwindCSS の `p-2`
* カスタムフックによるロジック分離

---

## ディレクトリ構成

```text
src/
├── hooks/
│   └── useUpperCase.ts
├── pages/
│   └── TextUpperCase.tsx
├── App.tsx
├── index.css
└── main.tsx
```

### ファイルの役割

#### `hooks/useUpperCase.ts`

入力値を `useState` で管理し、`onChange` の処理を担当する。

#### `pages/TextUpperCase.tsx`

入力フォームと大文字変換後の文字列を表示する。

#### `App.tsx`

`TextUpperCase` ページを表示する。

---

## 実装例

### `hooks/useUpperCase.ts`

```tsx
import { useState } from "react";

const useUpperCase = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    handleChange,
  };
};

export default useUpperCase;
```

### `pages/TextUpperCase.tsx`

```tsx
import useUpperCase from "../hooks/useUpperCase";

const TextUpperCase = () => {
  const { inputValue, handleChange } = useUpperCase();

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border p-2"
      />

      <p>{inputValue.toUpperCase()}</p>
    </div>
  );
};

export default TextUpperCase;
```

### `App.tsx

```tsx
import TextUpperCase from "./pages/TextUpperCase";

const App = () => {
  return <TextUpperCase />;
};

export default App;
```

---

## Controlled コンポーネントのポイント

この部分が Controlled コンポーネントの重要なポイント。

```tsx
<input
  type="text"
  value={inputValue}
  onChange={handleChange}
/>
```

`value` に `useState` の値を指定することで、入力欄の値を React が管理する。

```text
ユーザーが入力
    ↓
onChange
    ↓
handleChange
    ↓
setInputValue()
    ↓
inputValue 更新
    ↓
再レンダリング
    ↓
toUpperCase()
    ↓
大文字で表示
```

---

## `toUpperCase()` の役割

```tsx
inputValue.toUpperCase()
```

`toUpperCase()` を使用すると、文字列を大文字に変換できる。

例えば、

```text
hello
```

は、

```text
HELLO
```

になる。

また、

```text
React TypeScript
```

は、

```text
REACT TYPESCRIPT
```

になる。

---

## Controlled コンポーネントと State

今回の実装では、入力値を以下のように管理している。

```tsx
const [inputValue, setInputValue] = useState("");
```

そして、入力された値を取得する。

```tsx
const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  setInputValue(event.target.value);
};
```

その値を `input` の `value` に渡す。

```tsx
value={inputValue}
```

これによって、

```text
State
  ↓
input の value
  ↓
ユーザー入力
  ↓
onChange
  ↓
State 更新
  ↓
再レンダリング
```

という一方向のデータフローになる。

---

## TailwindCSS

入力欄には以下のクラスを適用する。

```tsx
className="border p-2"
```

### `border`

入力欄に枠線を付ける。

### `p-2`

入力欄の内側に余白を設定する。

---

## 起動方法

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスする。

---

## 確認項目

* [ ] `useState` で入力値を管理している
* [ ] `value` に State を指定している
* [ ] `onChange` で入力値を更新している
* [ ] `toUpperCase()` を使用している
* [ ] 入力内容がリアルタイムで大文字表示される
* [ ] `border` を使用している
* [ ] `p-2` を使用している
* [ ] カスタムフックにフォームロジックを分離している
