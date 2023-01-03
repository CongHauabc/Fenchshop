import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Message from '../components/LoadingError/Error';
import Loading from '../components/LoadingError/Loading';
import { listNewsDetails } from '../Redux/Actions/newAction';
import Blog from './Blog';
import Footers from './Footer';

const NewScreen = ({ history,match }) => {
    const dispatch = useDispatch();
    const newId = match.params.id;
    const newDetail = useSelector((state) => state.newDetail);
    const { loading, error, news } = newDetail;
    useEffect((e) => {
        dispatch(listNewsDetails(newId));
      }, [dispatch,newId]);
    return (
        <>
        <Header />
        <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger"></Message>
        ) : (
            <>
                <h1 style={{width:"100%",fontSize:"30px"}} >{news.name}</h1>
                <img src={news.image} style={{marginLeft:"50%",transform:"translateX(-50%)",padding:"23px 0"}}/>
                <p style={{marginLeft:"50%",transform:"translateX(-50%",lineHeight:"2.5"}} >{news.description}</p>
            </>
        )}
        </div>
        <Blog/>
        <Footers/>
        </>
    );
}

export default NewScreen;
