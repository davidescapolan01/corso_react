import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function handleClick() {
	alert("ciao");
}

function handleChange(e) {
	console.log(e.target.value);
}

function handleSubmit(e) {
	console.log("Submit");
	e.preventDefault();
}

function App() {
	const [count, setCount] = useState(0);
	const cities = [
		{
			seen: true,
			name: "Tokyo",
			pic: "https://images.unsplash.com/photo-1571625109522-4327b4a10154?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolorum.",
		},
		{
			seen: true,
			name: "NewYork",
			pic: "https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, fugit.",
		},
		{
			seen: true,
			name: "Rome",
			pic: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, rem.",
		},
		{
			seen: false,
			name: "Paris",
			pic: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, tempora?",
		},
		{
			seen: false,
			name: "Kyoto",
			pic: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, expedita?",
		},
		{
			seen: true,
			name: "Santo Domingo",
			pic: "https://images.unsplash.com/photo-1591720170982-c36bac4f7710?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea!",
		},
		{
			seen: false,
			name: "Miami",
			pic: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quam.",
		},
		{
			seen: false,
			name: "Barcellona",
			pic: "https://images.unsplash.com/photo-1612772119436-cabe84c37ddb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, delectus!",
		},
		{
			seen: false,
			name: "Barcellona",
			pic: "https://images.unsplash.com/photo-1612772119436-cabe84c37ddb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, delectus!",
		},
		{
			seen: true,
			name: "Birmingham",
			pic: "https://images.unsplash.com/photo-1610818647551-866cce9f06d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ex!",
		},
		{
			seen: true,
			name: "Berlin",
			pic: "https://images.unsplash.com/photo-1540224485413-4c7939106f3a?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, amet.",
		},
		{
			seen: false,
			name: "Agra",
			pic: "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			decription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, dolore?",
		},
	];

	return (
		<>
			<div className=' grid grid-cols-4 gap-10'>
				{/*<Card
					isVisited={true}
					title="Tokyo"
					imgURL="https://images.unsplash.com/photo-1571625109522-4327b4a10154?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias!</Card>
				<Card
					isVisited={false}
					title="NewYork"
					imgURL="https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui.</Card>
				<Card
					isVisited={true}
					title="Rome"
					imgURL="https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, ex.</Card>
				<Card
					isVisited={false}
					title="Paris"
					imgURL="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi.</Card>*/}
				{cities/*.filter(x => !x.seen)*/.map((x) => (
					<Card
						key={cities.indexOf(x)}
						isVisited={x.seen}
						title={x.name}
						imgURL={x.pic}
					>{x.decription}</Card>
				))}
			</div>
			{/*<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>*/}
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<button onClick={/*() => alert("ciao")*/handleClick}>
					alert
				</button>
				<input onChange={handleChange}/>
				<form onSubmit={handleSubmit}>
					<button type='Submit'>Submit</button>
				</form>
				{/*<p>
          			Edit <code>src/App.jsx</code> and save to test HMR
        		</p>*/}
			</div>
			{/*<p className="read-the-docs">
        		Click on the Vite and React logos to learn more
      		</p>*/}
		</>
	)
}

export default App
