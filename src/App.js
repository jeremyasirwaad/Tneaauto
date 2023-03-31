import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";

function App() {
	var file = [];

	const eng = [
		"6a94a36d-1fc7-4d52-86fa-7895e178a9d8",
		"5550f123-a9b4-469c-baca-600315f36f90",
		"4b0763a4-2bde-42c9-9a1a-83d0dac2d83c",
		"5a70405d-19be-407d-8e7e-9fa80f50b3c4",
		"aaa6c229-5b6f-4930-b11f-d0ff88cd070d",
		"989209e4-b0a9-4b55-9588-06b383f50b5d",
		"d5029b9c-c9f8-4e87-8f09-3b96b129417e",
		"541be169-8956-4d01-891c-8668a938f4b2",
		"e2f90c4c-c139-48dd-98d1-45e3429df281",
		"584613c5-68fb-470c-8b69-5a8fc4801573",
		"8fb2e9ca-dcb5-4b7e-8a9e-c46eaa1737dc",
		"83941345-6ff6-42df-a136-54cedcb594ab",
		"39f10d8e-e41a-41a2-8ea0-803a45e815e5",
		"b4d6dea4-457a-42ef-8333-27bd73ac5915",
		"e61ef789-ed18-4e6a-a1ab-3e3eb39b3725",
		"75494b09-c941-4924-830e-78735141cb6f",
		"689fe22e-238f-44a4-bf61-1efb0ff980bf",
		"5f882c5f-7be3-4a0e-9efb-e1c0789ece00",
		"04d492bd-d6a4-4451-b264-f2531dafed0f",
		"29130a3b-2fab-45ad-84d5-aff662028e67",
		"395e4416-9f66-42ea-870c-5dec128cd469",
		"90e47708-9faf-45dc-b166-d562e36e0409",
		"ceb78b52-a291-46a4-af25-4fbf8b7ecc17",
		"04a5baa5-0098-4890-a8ca-4b9e7b5bc0f9",
		"10bc3df2-98ff-46b0-afbd-ca12c99cdde9",
		"a00522e2-4806-4c1c-b9f2-398247415926",
		"410579ca-39ce-41e6-a529-9508f42c45ef",
		"fd105048-6624-4b83-b4bb-e83e53b09a0a",
		"4c0b19fa-9faa-44c3-9a76-6b3afdc61fed",
		"18d4f958-db27-4e29-bf4a-44fe89c72434",
		"52e4345f-b234-41c6-9079-a3f2fdca38e9",
		"7bdbec64-3613-49bf-be9b-87657d5cc713",
		"aa248738-557e-4200-869a-672e2f7e7034",
		"2aee9dff-d637-432a-af2f-525894b7cc7b",
		"02b63e3c-cfec-478f-8eee-5df9ce84ff86",
		"fe1c86ed-c5bc-49a1-9919-d21d8a4fd590",
		"4de44335-dd88-40bf-9466-602a32ff225a",
		"08da7e8d-4c2c-4dc8-aabe-1481f580390f",
		"4fdfb568-c660-4bb6-9888-e72f1d1b55e7",
		"d9cebb1d-8829-45d1-887c-d30bee5c197c",
		"70b2ade8-57db-46fd-bc6b-04bd7182d729",
		"ff7c306d-4804-47f7-91ae-505444824ed1",
		"258b16fc-ad25-4c07-81ab-438b645a3093",
		"454854ca-10d4-46f2-95f6-6a1985849dcc",
		"4869f580-d320-4615-b4e9-152b0275d277",
		"423fcc4c-b249-4bf5-99a6-011fd6f4f4d9",
		"854ad55a-77f2-4a69-b6a7-789862549284",
		"78061e90-0c8f-4ec0-a52e-65348a4dbfc0",
		"8a64f5ae-dff8-4bc6-ab58-04c6c997bade",
		"c17ce133-81f6-41b4-b34d-b93ffd526728",
		"f7af0415-32c7-4aef-b3ec-8fe83533d17d",
		"bca7c73b-b6f8-4705-b993-6707d203973e",
		"9e82c817-fac7-430a-9dbb-36b2fecf36d6",
		"444a0b1e-1168-40a9-adb1-d36c2a911344",
		"ce05a2e3-c905-42ec-843d-0974cf0a4f7a",
		"c8bf1d0a-1d19-44e8-ad31-6d526ee3333a",
		"3b2f1231-e167-47dd-aaf6-95fe73e1a0e6",
		"8dd45bda-ffd2-46c1-8eed-26fe04a36186",
		"df810db2-cad6-4f9b-a68b-db9a0dcda2d2",
		"e765874b-39c3-4f03-8c46-d14e692e71d1",
		"0fb92dce-00d8-44b7-9c98-7727605e94ef",
		"89e7adab-8f5e-4016-aecb-8ed9286e4272",
		"87e4260a-96f3-460d-9062-e53615bac7bf",
		"83ea7201-dd7e-4473-82f8-7d60e3469b87",
		"2da9b4a2-b4ab-4f8e-8d7d-de36f025ce5f",
		"b86de9a0-1e1e-4c4c-9f00-40c6bb64a85e",
		"e33fc132-a63e-47e7-a82d-94664ab88344",
		"b473f4ab-b21b-4d8c-a70e-0f805c08f161",
		"ea5c5577-3200-4b71-994b-1cc6083ff922",
		"635ed839-c15d-4811-8e8d-71af70ae6afb",
		"81a4a206-2192-401d-b83b-ac87b2140795",
		"8ac71f05-a722-43f9-bb6f-a58b1d86c353",
		"5c9e5ead-c03b-4125-a263-bb2035169b78",
		"c76d5da2-865a-4fda-9ccd-db5eccd0a157",
		"4f038ef4-8051-4d3e-9f91-dbbbf6ce4114",
		"0685e572-a2bf-4bc4-82dd-a5558403d0d0",
		"9ac8eabc-ce5a-4745-be9c-5040e831ff1c",
		"c04c9641-10ae-40c6-b054-453163be5df7",
		"b94418bf-1b01-495a-afea-e341756ce273",
		"3d4d478c-c70a-490b-ba76-1161f4babf83",
		"31fb40b6-695d-4cd0-90b1-391f3926ab95",
		"d30241de-9763-456b-871f-ef841a640518",
		"02ea7b0a-3a4a-4857-a0f1-c38c34c7d6a9",
		"2187ff71-2868-4323-b5f2-27080324aeee",
		"6f2add88-a423-4f1d-ab11-4de5f962b87d",
		"2d358c81-3f55-4a18-8eec-0fd5fb5a589b",
		"c5ddcc2d-bff0-4009-995b-eefffcb820e0",
		"d2cca2dc-cf3e-48e2-9dbb-ba6ca172017d",
		"9edaa3b6-571d-4d07-b8f9-53e026e34544",
		"e861f6f7-8de4-4dfb-9593-2da7fd49ce14",
		"119be233-5ad9-4f3a-80ef-1e417104cfa1",
		"cd228acb-de0e-48b7-9c1d-cef63eb9554f",
		"1e5f7043-d5ab-4d7d-b025-4e73a446d83f",
		"f4b9cfb9-b5e4-4fc6-91fd-137facf43aef",
		"d37d0657-f25c-4c6b-98e9-da981fa150fa",
		"919874d4-36b3-45aa-b9bd-0a4a9117e941",
		"1420d4b9-91bc-4dcf-a3a9-f5add2d05e16",
		"9f504565-af6c-4a48-97fc-8c67260599d2",
		"18ab4582-2e8f-49e7-95e7-661ffb51b73a",
		"46631e30-0c4c-4908-9059-055a00a8c518",
		"90823340-e249-46d7-a7b9-24c9a073f8e0",
		"a7d649c4-e82c-4bd9-8c9f-c818fe69493d",
		"02dd29e5-997e-413a-b452-304aff093e2e"
	];

	const fish = [
		"1e6deb5e-37cf-4dc6-a6cb-4394eabd2083",
		"88d1613f-0b65-449d-a9e0-9b3d8f58cdb0",
		"4706fbff-88c6-4f64-9499-76d1b9a4cc58",
		"e137be25-8110-429b-8765-e5b702565d76",
		"e711193c-268b-4861-96a5-70ff9a585144",
		"cfa5b06a-7e6d-4b09-b0f8-e03ca460ae24",
		"6b11417d-a36e-4aa7-8f44-7752a1b71848",
		"5b49fb36-d24c-4ae5-a05a-a685bab31dc3"
	];

	const voc = [
		"1e6deb5e-37cf-4dc6-a6cb-4394eabd2083",
		"88d1613f-0b65-449d-a9e0-9b3d8f58cdb0",
		"4706fbff-88c6-4f64-9499-76d1b9a4cc58",
		"e137be25-8110-429b-8765-e5b702565d76",
		"e711193c-268b-4861-96a5-70ff9a585144",
		"cfa5b06a-7e6d-4b09-b0f8-e03ca460ae24",
		"6b11417d-a36e-4aa7-8f44-7752a1b71848",
		"5b49fb36-d24c-4ae5-a05a-a685bab31dc3",
		"4bc4cdff-590d-4eb9-ae75-84cd3f20f93c",
		"88bc2947-5d5f-4ec0-b132-d7a0c6210b09",
		"22c63649-773a-4787-b91f-dfe8010d8b06"
	];

	const verti = [
		"0d328979-bfb9-4b92-b8bf-cfb6f7d7a5d6",
		"299afd04-4602-44c6-83ea-601933e0ef21",
		"561eeded-00ed-4fb5-b2df-9414659ade73",
		"3d4b3914-3fc1-4f91-8c5f-f69f0c6d0f9b",
		"f6e5678a-b865-49a0-b581-51eae1d20d4d",
		"b8adcd22-7351-4ce0-80db-8def835004a8",
		"7a8d0f8e-5f8c-4d3e-9412-e372d4fe9e20",
		"44d26114-b936-401e-bb48-65b2259272d3",
		"5338636b-821f-40e4-8372-c93672381882",
		"0c0d01c0-f770-4188-8778-735a510d01f4"
	];

	const agri = [
		"09f1cd88-b529-4b70-9dbc-8b332cef1326",
		"de26ae3c-dffb-4e68-93e5-e67d05b90db2",
		"57676fbc-3a3d-4b5c-a601-1e9bf3a05034",
		"3950d408-4c90-4d1c-abab-55315b6ac60a",
		"01be971e-5f7d-4516-95ee-33af2e212c8d",
		"25bff9c7-2fdb-4cda-abd5-f9bbbdd9d8cf",
		"04e069c6-711d-4bbf-a137-af474e48949d",
		"e0aa9634-2fc7-43c3-b46f-2eac2d74ac61",
		"850da809-ebf8-479b-9815-6a02d3aabcf7",
		"249ca9c5-e2dd-42db-a72d-e5c4deebd9e7",
		"6529e5e4-8849-4e2c-b77f-8cb3fc82085b",
		"605f3e26-ffc1-4f9c-8f40-1482321c4e2e",
		"10eb18c9-0f62-4ce3-a88f-8b2d94860ea4",
		"e749f573-83c6-4296-abfc-a1b3be61b07a",
		"0d81ae07-7a53-4e2c-8c5d-d0943329fa6f",
		"cc38ff32-5bc7-45a3-b225-fe90b5f209f8",
		"9ac3110f-dd7f-40fb-bfdd-ebc9d794fd6c",
		"fdb796a2-9a8a-477a-93c5-aa635caab480",
		"986343f9-9f5f-4f4f-a729-560fd753b036",
		"68ab0ced-ac51-4230-a588-bd4504ed3f75",
		"f7bf83ea-0549-4916-b403-3d1e5976a37c",
		"857ff25f-f128-4db9-b906-d60622c82211",
		"da483291-4647-4c70-ab98-e57f615d8692",
		"0e21c94f-3669-4a6e-a0a8-0154476f1738",
		"3d34253f-4de5-4647-a108-57ce8f48b70e",
		"037519e3-1b9b-4280-9442-619fc7b7c089",
		"d5111b65-e3cb-4dd5-8cf2-f408dc78cb7c",
		"8d5bfb3f-8709-4ea1-8c2a-fc63748fa8e4",
		"b58aa8b6-c432-4080-a3f3-e2c478f5f2ef",
		"21b97f5e-8cdb-42c4-b75e-3dbd2f31b951",
		"0a4efd1e-7ead-42db-b2d3-18ffdbd4e822",
		"5c6059bd-64f1-4948-ab4b-e61f38c22bd0",
		"9d0947fb-befa-4429-a91d-612c2686099d",
		"6dbf5909-fa89-4777-b60e-f94dcfb349c3",
		"a9f703f3-df06-4efb-835a-a700b2e5c463",
		"a3d9bb9a-d2b3-45b1-9552-5fb92931a2ed",
		"12c023b6-6d28-43c0-86f1-0ca00bcf7ba1",
		"ca792ad5-9b27-46ea-a046-edc3843237d1",
		"5c1d619f-cd56-4fff-b9f9-5172e49e6645",
		"377f099c-6c1b-40d0-8238-52606ade47c3",
		"4bb7f047-be53-4f78-a5ad-66337c73daa5",
		"bab5a0ac-e021-4b77-b0be-799330a03785",
		"e95b59a3-be88-4b0f-9454-5f700dadb468",
		"66873601-790b-4399-9694-10956550669a",
		"221e7ef8-df5c-4285-9882-3fa66fdc500e",
		"e161b8d1-e282-4370-94cf-939f7e0d310b",
		"e44cf433-16ea-4257-90f9-2a30c742abee",
		"ef938798-7db8-4b5d-a7a5-21868cfc755b",
		"48b814a6-1caf-4330-9ac6-54fb6ae8d5b8",
		"5bbb909b-905a-40db-ac58-fdb45a1624dc",
		"aee2694e-5e59-4d67-a1b1-8f55c26b5c8e",
		"4f7c7ee8-f75c-4987-a3e3-806199582dc7",
		"0c455f53-aab0-4877-bc4e-e402f6f040f4"
	];

	function randomNoRepeats(array) {
		var copy = array.slice(0);
		return function () {
			if (copy.length < 1) {
				copy = array.slice(0);
			}
			var index = Math.floor(Math.random() * copy.length);
			var item = copy[index];
			copy.splice(index, 1);
			return item;
		};
	}

	const shufflearray = (array) => {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex]
			];
		}

		return array;
	};

	const runfunction = () => {
		for (let index = 1; index < 1289; index++) {
			const element = file[index];
			login(element[2], "asdf@qwert1");
			console.log(index);
		}
	};

	const login = async (username, password) => {
		const object = {
			loginName: username,
			password: password
		};

		const response = await fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(object)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				getrandomarray(data.sessionId);
			});
	};

	const getrandomarray = (sessionid) => {
		let master = [];
		let englimit = 10;
		let fishlimit = 3;
		let voclimit = 5;
		let vertilimit = 5;
		let agrlimit = 10;

		var choosereng = randomNoRepeats(eng);
		var chooserfish = randomNoRepeats(fish);
		var chooservoc = randomNoRepeats(voc);
		var chooserverti = randomNoRepeats(verti);
		var chooseragri = randomNoRepeats(agri);

		for (let index = 0; index < englimit; index++) {
			let value = choosereng();
			master.push(value);
		}
		for (let index = 0; index < fishlimit; index++) {
			// let value = randomNoRepeats(fish);
			let value = chooserfish();
			master.push(value);
		}
		for (let index = 0; index < voclimit; index++) {
			// let value = randomNoRepeats(voc);
			let value = chooserfish();
			master.push(value);
		}
		for (let index = 0; index < vertilimit; index++) {
			// let value = randomNoRepeats(verti);
			let value = chooserverti();
			master.push(value);
		}
		for (let index = 0; index < agrlimit; index++) {
			// let value = randomNoRepeats(agri);
			let value = chooseragri();
			master.push(value);
		}
		console.log(master);
		let shuffed = shufflearray(master);
		makecall(shuffed, sessionid).then((data) => {
			console.log(data);
		});
	};

	const getrandomarray2 = (sessionid) => {
		let master = [];
		let englimit = 10;
		let fishlimit = 3;
		let voclimit = 5;
		let vertilimit = 5;
		let agrlimit = 10;

		for (
			let index = 0;
			index < englimit + fishlimit + voclimit + vertilimit + agrlimit;
			index++
		) {
			var engcount = 0;
			var fishcount = 0;
			var voccount = 0;
			var verticount = 0;
			var agricount = 0;
			if (engcount < englimit) {
				let value = eng[Math.floor(Math.random() * eng.length)];
				master.push(value);
			}
			if (fishcount < fishlimit) {
				let value2 = fish[Math.floor(Math.random() * fish.length)];
				master.push(value2);
			}

			if (voccount < voclimit) {
				let value3 = voc[Math.floor(Math.random() * voc.length)];
				master.push(value3);
			}

			if (verticount < vertilimit) {
				let value4 = verti[Math.floor(Math.random() * verti.length)];
				master.push(value4);
			}

			if (agricount < agrlimit) {
				let value5 = agri[Math.floor(Math.random() * agri.length)];
				master.push(value5);
			}
		}
		console.log(master);
		let shuffed = shufflearray(master);
		makecall(shuffed, sessionid).then((data) => {
			console.log(data);
		});
	};

	const makecall = async (master, sessionId) => {
		const object = {
			selections: master
		};

		const response = await fetch("/api/api/users/selection", {
			method: "PUT",
			headers: {
				sessionid: sessionId,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(object)
		});
		return response.json(); // parses JSON response into native JavaScript objects
	};

	return (
		<div className="App">
			<input
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={(e) => {
					const files = e.target.files;
					console.log(files);
					if (files) {
						console.log(files[0]);
						Papa.parse(files[0], {
							complete: function (results) {
								console.log("Finished:", results.data);
								file = results.data;
							}
						});
					}
				}}
			/>
			<button
				onClick={() => {
					var chooser = randomNoRepeats(eng);
					console.log(chooser());
					console.log(chooser());
					console.log(chooser());

					// runfunction();
					// login(file[1][2], file[1][3]);
				}}
			>
				Shuffle and Push
			</button>
			<button
				onClick={() => {
					runfunction();
					// login(file[1][2], file[1][3]);
				}}
			>
				Shuffle and Push
			</button>
		</div>
	);
}

export default App;
