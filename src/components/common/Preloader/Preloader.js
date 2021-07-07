import React from 'react';
import s from './preloader.module.css';
import preloader from '../../../assets/img/preloader.svg';

let Preloader = (props) => {
	return <div className={s.loader}>
		<img src={preloader} />
	</div>
}

export default Preloader;