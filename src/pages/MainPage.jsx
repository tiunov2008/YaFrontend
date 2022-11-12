import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGenres, selectIsGenresSuccess } from '../store/genre/selectors';
import { loadGenresIfNotExist } from './../store/genre/loadGenresIfNotExist';
import { Outlet, NavLink } from 'react-router-dom';


export const MainPage = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => selectGenres(state))
    useEffect(()=>{
        dispatch(loadGenresIfNotExist);
    }, []);
    const isSuccess = useSelector((state) => selectIsGenresSuccess(state));
    if (!isSuccess) {
        return;
    }
    return <main class="main">
        <div class="main-left main-block">
            <ul class="main-left_list">
                {
                    genres.map((genre) => <li class="main-left_list--item" ><NavLink className="main-left_list--item" 
                    key={genre.id} 
                    to={genre.id}>{genre.name}</NavLink></li>)
                }
                
            </ul>
        </div>
        <div class="main-right main-block">
            <Outlet/>
        </div>
    </main>
}