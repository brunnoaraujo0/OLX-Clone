import React, {useEffect, useState} from "react";
import * as C from "./styled";
import useApi from '../../helpers/OlxAPI';
import {Link} from 'react-router-dom';

import AdItem from "../../components/partials/AdItem";
import { PageContainer } from "../../components/MainComponents";

const Page = () => {
    
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [catogories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[]);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat);
        }
        getCategories();
    },[]);

    useEffect(() => {
        const getRecentsAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentsAds();
    },[]);
    

    return (
        <>
        <C.SearchArea>
            <PageContainer>
            <div className="searchBox">
                <form method="GET" action="/ads">
                    <input type="text" name="q" placeholder="O que você procura?"/>
                    <select name="state">
                            {stateList.map((i, k)=> 
                                <option value={i.name}>{i.name}</option>
                            )}
                    </select>
                    <button>Pesquisar</button>
                </form>
            </div>
            <div className="categoryList">
                    {catogories.map((i,k) => 
                        <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                            <img src={i.img} alt=""/>
                            <span>{i.name}</span>
                        </Link>
                    )}
            </div>
            </PageContainer>
        </C.SearchArea>
        <PageContainer>
            <C.PageArea>
                <h2>Anúncios Recentes</h2>
                <div className="list">
                        {adList.map((i, k) => 
                            <AdItem key={k} data={i}/>
                        )}
                </div>
                <Link to="/ads" className="seeAllLink">Ver todos</Link>
                <hr/>
                ...
            </C.PageArea>
        </PageContainer>
        
        
        
        </>
     
    );
}
export default Page;