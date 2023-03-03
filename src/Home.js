import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs,isLoading,error}=useFetch("http://localhost:3001/blogs")
    return ( 
        <div className="homepage">
            {error && <div> {error} </div>}
            {isLoading && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="Akash blogs"  />}
        </div>
     );
}
 
export default Home;