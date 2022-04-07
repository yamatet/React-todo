export default function App() {
  return (
    <>
      <div>
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のtodo</p>
        <ui>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ui>
      </div>
      <div>
        <p>完了のtodo</p>
        <ui>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ui>
      </div>
    </>
  );
}
