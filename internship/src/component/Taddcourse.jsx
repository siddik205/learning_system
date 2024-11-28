import React from 'react'
// import TSidebar from './TSidebar';
import { useState, useEffect } from 'react';
const baseUrl = 'http://127.0.0.1:8000/api';


function Taddcourse() {
    const [cats,setCats]= useState([]);
    const[courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        featured_img:'',
        techs:''
    });
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category').then((res)=>{
                //console.log(res.data);
                setCats(res.data)
             
            });
            }catch(error){
             console.log(error);
            }
         },[]);
      //   console.log(cats);
      const handelChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
      }
      const handelFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
      }

      const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('category',courseData.category);
        _formData.append('teacher',1);
        _formData.append('title',courseData.title);
        _formData.append('description',courseData.description);
        _formData.append('featured_img',courseData.featured_img,courseData.featured_img.name);
        _formData.append('techs',courseData.techs);
      
      try{
        axios.post(baseUrl+'/course/',_formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
            console.log(res.data);
        });
        }catch(error){
         console.log(error);
        }
     };

    return (

        <div>
            <div class="dashboard">
                <aside class="sidebar">
                    <ul>
                        <h6> <li><a href="tmy">DashBoard</a></li></h6>
                        <li><a href="tmy">My Courses</a></li>
                        <li><a href="tadd">Add Cources</a></li>
                        <li><a href="tuse">My User</a></li>
                        <li><a href="">Profile Setting</a></li>
                        <li><a href="tchange">Change Password</a></li>
                        <li><a href="#" class="logout">Logout</a></li>
                    </ul>
                </aside>
                <div className='table'>
                    <div className='container'>
                        <div class="mb-3 bg-dark">
                            <h3>
                                <label for="exampleUsername" class="form-label">Add Course</label>
                            </h3>
                        </div>
                        <form>
                        <div className="mb-3 row">
                             <label for="category" className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                  <select name='category'  onChange={handelChange} className='form-control'>
                                    {cats.map((category,index)=>{return<option key={index} value={category.id}>{category.title}</option>})}
                                  </select>
                                </div>
                            <div class="mb-3">
                                <label for="exampleUsername" class="form-label">Title</label>
                                <input type="text" onChange={handelChange} name='title' class="form-control" id="exampleUsername" />
                                <div id="usernameHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control"onChange={handelChange} name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className='mb-3'>
                                <label for="staticEmail" className='form-label'>Feature image</label>
                                <input type="file" onChange={handelFileChange} name='featured_img' className='form-control' id='staticEmail' />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Technologies</label>
                                <textarea class="form-control"  onChange={handelChange} name='techs' id="Textarea1" rows="3"></textarea>
                            </div>

                            <button type="button" onClick={formSubmit} class="btn btn-primary bg-info">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        



    )
}

export default Taddcourse