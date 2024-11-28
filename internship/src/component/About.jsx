import React from 'react'
import { useEffect } from 'react'

export default function About() {
    useEffect(()=>{
        document.title='About Us'
      })
    return (
        <div className="card">
            <section class='about-section text-center'>
                <div class='containerh'>
                    <h1 className='text-success'>About Us</h1>
                </div>
            </section>

            <div className="conatiner">
                <a href="#"><img src="kapil.jpg" className="card-img-top" alt="..." /></a>
            </div>
            <br /><br />
            <div className="containerh">
                <h5>
                    <p>Welcome to our online learning platform! We are dedicated to providing high-quality courses in various fields  to help you enhance you skills amd advance your carrer.</p>
                </h5>
            </div>
            <br />
            <div className="containerh">
                <h1 className='heading'>Our Mission</h1>
                <div className='divider'></div>
                <p className='content'>Our mission is to empower learners through accessible and training, enabling them to achive their goals and succeed in their professional journeys. </p>
            </div>
            <br /><br /><br />
            <div className="containerh">
                <h1 className='heading'>Our Values <br /></h1>
                <div className='divider'></div>
                <p className='content'> Excellence: We strive for the highest standered in our course.
                    Innovation: We continuosely update our offrings to kep pace with industry trends.
                    Community: We belive in foresting a supportive learning environment.
                </p>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <div className="containerh">
                <div class="why-choose-us">
                    <img src="kapil 1.jpg" alt="Classroom photo" />
                    <div>
                        <h2>Why Choose Us?</h2>
                        <p>We are dedicated to providing quality online learning experiences. Our platform offers a variety of courses to help you achieve your educational goals. Join us on this journey of knowledge and growth!</p>
                        <p>Experience excellence with industry-leading training and support. Our expert instructors, tailored curriculum, and hands-on approach ensure you gain the skills you need for success in the ever-evolving tech landscape. Join a community dedicated to your growth and success!</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div class="containerh">
                <div class=" approach-career-section">
                    <div class="text-content">
                        <h2>Our Approach</h2>
                        <p>Our approach to learning is centered on interactive and practical training that empowers you to apply what you learn. We believe that education should be engaging and directly applicable to real-world scenarios.</p>
                        <br /><br />
                        <h2>Transform Your Career With Expert-Led IT Training</h2>
                        <p>Unlock your potential with our specialized courses designed to prepare you for the tech industry. Learn from experienced instructors through engaging video tutorials and hands-on projects, ensuring you gain practical skills for real-world applications.</p>
                    </div>
                    <img src="kapil 3.jpg" alt="Building photo" />
                    <br />
                    <br />
                    <br />
                </div>
          
        </div>
         <div className="containerh">
         <h3 className='heading'>Conatct Us</h3>
         <div className='divider'></div>
         <p className='content'>Kapil Kavuri Hub,br 2nd Floor ,<br />
             Financial District, Nanakramguda,<br />
              Hyderabad,Telangana,<br />
             INDIA – 500 032 <br />

             E Mail :  kapilitskillhub@gmail.com <br />
             Phone : +91 88850 30341. </p>
     </div>
     </div>
    )
}
