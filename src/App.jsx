import React,{useState} from "react";
import "./App.css";

export const App = () => {

	const [inputInfo, setInputInfo] = useState({
		foodName: "",
		exp: "",
		qty: "",
		keepArea: ""
	});

	const [fridgeFoods, setFridgeFoods] = useState([
		{foodName: "牛乳", exp: "2022-06-07", qty: "1パック", keepArea: "冷蔵庫"},
		{foodName: "豚肉", exp: "2022-02-27", qty: "200g", keepArea: "冷蔵庫"},
	]);
	const [freezerFoods, setFreezerFoods] = useState([
		{foodName: "ハーゲンダッツ", exp: "", qty: "3個", keepArea: "冷凍庫"},
	]);
	const [veggieFoods, setVeggieFoods] = useState([
		{foodName: "にんじん", exp: "2022-02-07", qty: "2本", keepArea: "野菜室"},
	]);

	const onChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setInputInfo({ ...inputInfo, [name]: value });
	};

	const onClickAdd = () => {
		if (inputInfo.foodName === "" || inputInfo.qty === "") return;
		if (inputInfo.keepArea === "冷蔵庫") {
			const newFoods = [...fridgeFoods, inputInfo];
			setFridgeFoods(newFoods);
		} else if (inputInfo.keepArea === "冷凍庫") {
			const newFoods = [...freezerFoods, inputInfo];
			setFreezerFoods(newFoods);
		} else if (inputInfo.keepArea === "野菜室") {
			const newFoods = [...veggieFoods, inputInfo];
			setVeggieFoods(newFoods);
		} else {
			return;
		}
	};

	return (
		<>
			<div className="input-area">
				<h3>冷蔵庫管理アプリ</h3>
				<input name="foodName" type="text" placeholder="食品名を入力" value={inputInfo.foodName} onChange={onChange} />
				<input name="exp" type="date" value={inputInfo.exp} onChange={onChange} />
				<input name="qty" type="text" placeholder="個数を入力" value={inputInfo.qty} onChange={onChange} />
				<select name="keepArea" value={inputInfo.keepArea} onChange={onChange}>
					<option value="" disabled>保存場所</option>
					<option value="冷蔵庫">冷蔵庫</option>
					<option value="冷凍庫">冷凍庫</option>
					<option value="野菜室">野菜室</option>
				</select>
				<button onClick={onClickAdd}>追加</button>
			</div>
			<div className="fridge-area">
				<p className="title">冷蔵庫エリア</p>
				<ul>
					{fridgeFoods.map((food,index) => {
						return (
							<li key={index}>
								<div className="list-row">
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
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
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
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
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
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