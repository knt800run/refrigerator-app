import React from "react";
import "./App.css";

export const App = () => {
	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="食品名を入力" />
				<input type="date"/>
				<input type="text" placeholder="個数を入力" />
				<button>追加</button>
			</div>
			<div className="fridge-area">
				<p className="title">冷蔵庫エリア</p>
				<ul>
					<li>
						<div className="list-row">
							<p>牛肉</p>
							<button>編集</button>
							<button>削除</button>
						</div>
					</li>
				</ul>
			</div>
			<div className="freezer-area">
				<p className="title">冷凍庫エリア</p>
				<ul>
					<li>
						<div className="list-row">
							<p>ハーゲンダッツ</p>
							<button>編集</button>
							<button>削除</button>
						</div>
					</li>
				</ul>
			</div>
			<div className="veggie-area">
				<p className="title">野菜室エリア</p>
				<ul>
					<li>
						<div className="list-row">
							<p>にんじん</p>
							<button>編集</button>
							<button>削除</button>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}