import React from "react";
import { useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../commen/Navbar.jsx";
import "../Blog/Blog.css";
import Blog1 from '../../Assets/blog/blog-1.jpg'
import BlogPost from "./BlogPost.jsx";
import Footer from '../commen/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {

  useEffect(() => {
    AOS.init(({ duration: 2000 }))
}, [])

  return (
    <>
      <div className="serviceDetail_container">
        <div className="serviceDetail_bg">
          <Navbar />
          <div className="serviceDetail_head_container">
            <div className="d-flex">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <div className="d-flex">
                  <FaHome style={{ fontSize: "20px", margin: "0 13px" }} />
                  <h6 style={{ margin: "0 6px" }}>HOME</h6>
                </div>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="d-flex">
                  <IoIosArrowForward
                    style={{ fontSize: "18px", margin: "0 13px" }}
                  />
                  <h6 style={{ textTransform: "uppercase" }}>blog</h6>
                </div>
              </Link>
            </div>
            <h1>Blog</h1>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="blog_bg py-5">
          <div className="blog_head_container py-5 d-flex justify-content-center">
            <div className="blog_head_item col-12 col-md-10 col-lg-6"  data-aos="fade-up">
              <h6
                className="text-center"
                style={{ color: "#4A6EC9", textTransform: "uppercase" }}
              >
                blog
              </h6>
              <h2 className="text-center" >Latest Blog Post</h2>
              <p className="text-center blog_para pt-3 ">
                Aenean haretra quam placerat adipiscing penatibus aliquam
                adipiscing gravida elementum aliquet eget senectus felis enim
                diam molestie.
              </p>
             </div>
          </div>
          <div className="container py-5 " >
              <div
                className="row align-items-between "
                style={{ background: "#fff" }}>
                <div className="col-md-6 p-0 blog_img" data-aos="fade-right"> 
                  <img
                    src={Blog1}
                    class="img-fluid"
                    style={{height:'100%'}}
                    alt="Office Work"
                  />
                </div>
                <div className="col-md-6">
                  <div className="content d-flex flex-column gap-3" data-aos="fade-left">
                    <h2 style={{
                      color:'#021137',
                      fontSize:'28px',
                      fontWeight:'900',
                      fontStyle:'normal',
                      fontFamily:''
                    }}>Quis Pellentesque Sed Penatibus Eges</h2>
                    <p className="date" style={{
                      color:'#4a6ec980',
                      fontSize:'14px',
                      fontWeight:'600'
                    }}>October 21, 2021 No Comments</p>
                    <p style={{
                      fontSize:'17px',
                      fontWeight:'400'
                    }}>
                      Aenean harerta quam placerat adipiscing penatibus
                      adipiscing gravida elementum aliquet eget senectus felis
                      enim diam. Bibendum leo, sapien, nisl bibendum. Ultricies
                      urna ultricies risus, at.
                    </p>
                    <Link to='/' style={{
                        color:'#4a6ec9',
                        fontSize:'20px',
                        fontWeight:'700',
                        textDecoration:'none',
                    }}>
                    Read More »
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
           
        </div>
        <BlogPost/>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
