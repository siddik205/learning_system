import React from 'react'

function Footer() {
  return (
    <div>
      <br /><br />
     <div class='hovera'>
    <div class='social-icon'>
      <div class='icona'>
      <img src="instagram.svg" class="rounded-circle " alt="" width={'50px'} height={'50px'} style={{ marginRight: '30px' }} />
      </div>
      <div class='iconb'>
      <img src="linkedin.svg" class="rounded-circle " alt="" width={'50px'} height={'50px'} style={{ marginRight: '30px' }} />
      </div>
      <div class='iconc'>
      <img src="twitter.svg" class="rounded-circle " alt="" width={'50px'} height={'50px'} style={{ marginRight: '30px' }} />
      </div>
      <div class='icond'>
      <img src="twitter-x.svg" class="rounded-circle" alt="" width={'50px'} height={'50px'} style={{ marginRight: '30px' }} />
      </div>
      </div>
      </div>
  
      <div>
      <br /><br />
        <footer class="footer">
          © 2024 Online Learning. All Rights Reserved.
          <a href="#about">About Us</a> | <a href="#contact">Contact</a>
        </footer>
      </div>
      </div>
  )
}

export default Footer