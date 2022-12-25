import { Routes, Route, Link } from 'react-router-dom';
import '/git_hub/haeun-s-vlog-with-react/blog/src/App.css';

function Main() {
    return(
      <div>
        <div className={'1column'}>
          <Link to="/documents"><div className={'documents'}></div></Link>
          <div className={'Note'}></div>
        </div>
        <div className={'2column'}>
          <div className={'AboutMe'}></div>
        </div>
        <div className={'3column'}>
          <div className={'github'}></div>
          <div className={'projects'}></div>
        </div>
      </div>
    )}

    export default Main;