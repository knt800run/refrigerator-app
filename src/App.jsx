import React,{useState} from "react";
import "./App.css";

export const App = () => {

	const [inputInfo, setInputInfo] = useState({
		foodName: "",
		exp: "",
		qty: "",
		keepArea: ""
	});

	const [fridgeFoods, setFridgeFoods] = useState([]);
	const [freezerFoods, setFreezerFoods] = useState([]);
	const [veggieFoods, setVeggieFoods] = useState([]);

	const [editShowFlag, setEditShowFlag] = useState(true);

	const onChangeInfo = (e) => {
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
			setInputInfo({
				foodName: "",
				exp: "",
				qty: "",
				keepArea: ""
			});
		} else if (inputInfo.keepArea === "冷凍庫") {
			const newFoods = [...freezerFoods, inputInfo];
			setFreezerFoods(newFoods);
			setInputInfo({
				foodName: "",
				exp: "",
				qty: "",
				keepArea: ""
			});
		} else if (inputInfo.keepArea === "野菜室") {
			const newFoods = [...veggieFoods, inputInfo];
			setVeggieFoods(newFoods);
			setInputInfo({
				foodName: "",
				exp: "",
				qty: "",
				keepArea: ""
			});
		} else {
			return;
		}
	};

	const onClickDelete = (food,index) => {
		if (food.keepArea === "冷蔵庫") {
			const newFoods = [...fridgeFoods];
			newFoods.splice(index, 1);
			setFridgeFoods(newFoods);
		} else if (food.keepArea === "冷凍庫") {
			const newFoods = [...freezerFoods];
			newFoods.splice(index, 1);
			setFreezerFoods(newFoods);
		} else if (food.keepArea === "野菜室") {
			const newFoods = [...veggieFoods];
			newFoods.splice(index, 1);
			setVeggieFoods(newFoods);
		} else {
			return;
		}
	};

	const onClickEdit = (e) => {
		console.log(e.currentTarget);
	};

	return (
		<>
			<div className="input-area">
				<h3>冷蔵庫管理アプリ</h3>
				<input name="foodName" type="text" placeholder="食品名を入力" value={inputInfo.foodName} onChange={onChangeInfo} />
				<input name="exp" type="date" value={inputInfo.exp} onChange={onChangeInfo} />
				<input name="qty" type="text" placeholder="個数を入力" value={inputInfo.qty} onChange={onChangeInfo} />
				<select name="keepArea" value={inputInfo.keepArea} onChange={onChangeInfo}>
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
							<li key={food.foodName}>
								<div className="list-row">
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
									<p>{food.qty}</p>
									<button onClick={(e) => onClickEdit(e)}>{ editShowFlag ? "編集" : "編集完了" }</button>
									<button onClick={() => onClickDelete(food,index)}>削除</button>
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
							<li key={food.foodName}>
								<div className="list-row">
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
									<p>{food.qty}</p>
									<button onClick={() => onClickEdit(food,index)}>編集</button>
									<button onClick={() => onClickDelete(food,index)}>削除</button>
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
							<li key={food.foodName}>
								<div className="list-row">
									<p>{food.foodName}</p>
									<p>{food.exp}</p>
									<p>{food.qty}</p>
									<button onClick={() => onClickEdit(food,index)}>編集</button>
									<button onClick={() => onClickDelete(food,index)}>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}