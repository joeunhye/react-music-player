import "./App.scss";
import SongDetail from "./components/SongDetail/SongDetail";
import ProgressArea from './components/ProgressArea/ProgressArea';
import Controls from './components/Controls/Controls';
import PlayList from './components/PlayList/PlayList';

function App() {
	return <div className="App">
		<div className="container">
			<SongDetail />
			<ProgressArea />
			<Controls />
			<PlayList />
		</div>
	</div>;
}

export default App;
