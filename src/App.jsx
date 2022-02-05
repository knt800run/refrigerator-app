import React,{useState} from "react";
import "./App.css";

export const App = () => {
	const [fridgeFoods, setFridgeFoods] = useState([
		{name: "牛乳", date: "2022-06-07", qty: "1パック"},
		{name: "豚肉", date: "2022-03-27", qty: "200g"}
	]);
	const [freezerFoods, setFreezerFoods] = useState([
		{name: "ハーゲンダッツ", date: "", qty: "3個"}
	]);
	const [veggieFoods, setVeggieFoods] = useState([
		{name: "にんじん", date: "2022-02-27", qty: "2本"}
	]);
	return (
		<>
			<div className="input-area">
				<h3>冷蔵庫管理アプリ</h3>
				<input type="text" placeholder="食品名を入力" />
				<input type="date"/>
				<input type="text" placeholder="個数を入力" />
				<select name="保存場所">
					<option value="" disabled>保存場所</option>
					<option value="冷蔵庫">冷蔵庫</option>
					<option value="冷凍庫">冷凍庫</option>
					<option value="野菜室">野菜室</option>
				</select>
				<button>追加</button>
			</div>
			<div className="fridge-area">
				<p className="title">冷蔵庫エリア</p>
				<ul>
					{fridgeFoods.map((food,index) => {
						return (
							<li key={index}>
								<div className="list-row">
									<p>{food.name}</p>
									<p>{food.date}</p>
									<p>{food.qty}</p>
									<button>編集</button>
									<button>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="freezer-area">
				<p className="title">冷凍庫エリア</p>
				<ul>
					{freezerFoods.map((food,index) => {
						return (
							<li key={index}>
								<div className="list-row">
									<p>{food.name}</p>
									<p>{food.date}</p>
									<p>{food.qty}</p>
									<button>編集</button>
									<button>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="veggie-area">
				<p className="title">野菜室エリア</p>
				<ul>
					{veggieFoods.map((food,index) => {
						return (
							<li key={index}>
								<div className="list-row">
									<p>{food.name}</p>
									<p>{food.date}</p>
									<p>{food.qty}</p>
									<button>編集</button>
									<button>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}