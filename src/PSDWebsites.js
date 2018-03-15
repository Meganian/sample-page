import React  from 'react';
import Header from "./PSDWebsitesHeader";
import Slider from "./PSDWebsitesSlider";
import Gallery from "./PSDWebsitesGallery";
import Article from './PSDWebsitesArticle';
import Data from './data/data';


function PSDWebsites()  {
    const data = Data.lp_data[0];

    return (
        <div /*style={{ zIndex: 10, overflow: 'hidden'}}*/>
            <Header title={data.main_title} page={data.page_address}/>
            <Slider info={data.slider_info}/>
            <Gallery slides={data.gallery}/>
            <Article page={data.page_address} paragraph={data.paragraph} paragraph2={data.paragraph_2}> </Article>
        </div>
    );
}


export default PSDWebsites;
