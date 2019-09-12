<template>
  <b-container fluid class="auth-page login pb-5 px-0">
    <!-- <error></error> -->

    <b-row class="container header">
      <b-col md="12" class="mx-0">
        <CmsHeader />
      </b-col>

      <b-col md="12">
        <hr class="mb-4" />
      </b-col>

      <b-col md="12">
        <p class="Updated-1-year-ago">Updated 1 year ago</p>
      </b-col>
      <b-col md="12">
        <p class="CoffeSign-Sites-Services-Terms-and-Conditions">Privacy Policy for CoffeeSign</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.</p>
        <p class="tandc">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email@Website.com</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">Log Files</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Website Name follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
      </b-col>
      
      <b-col md="12">
        <p class="myheading">Cookies and Web Beacons</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Like any other website, Website Name uses ‘cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">DoubleClick DART Cookie</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL <a style="color: #64483e" href="">– https://policies.google.com/technologies/ads.</a></p>
        <p class="tandc">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <ul>
          <li style=" color: #64483e;font-size: 18px;">Google</li>
          <a href="#" style="color: #64483e;border-bottom:1px solid #64483e">https://policies.google.com/technologies/ads</a>
        </ul>
      </b-col>

      <b-col md="12">
        <p class="myheading">Privacy Policies</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">You may consult this list to find the Privacy Policy for each of the advertising partners of Website Name.</p>
        <p class="tandc">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Website Name, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p class="tandc">Note that Website Name has no access to or control over these cookies that are used by third-party advertisers.</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">Third Part Privacy Policies</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Website Name's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
        <p class="tandc">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">Children's Information</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p class="tandc">Website Name does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">Consent</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </b-col>
      
      <b-col md="12" class="mb-4">
        <hr />
      </b-col>

      <b-col md="8">
        <p>Copyright © 2019 CoffeeSign All Rights Reserved.</p>
      </b-col>
      <b-col md="4">
        <div class="text-md-right text-left">
          <a class="social">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a class="social">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a class="social">
            <font-awesome-icon :icon="['fab', 'youtube-square']" />
          </a>
        </div>
      </b-col>

    </b-row>

  </b-container>
</template>

<script>
import CmsHeader from './CmsHeader';

export default {
  name: 'Privacy',
  components: {
    CmsHeader,
  },
}
</script>

<style lang="scss">
  @import "../authentication/Login.scss";
</style>

<style scoped>
  .root { background-color: #ffff !important; }
  .bg-light { background-color: #FCFAFA !important; }
  .bg-color {
    width: 40px;
    height: 40px; 
    background-color: #EFEFEF;
    border-radius: 50%;
    padding: 13px 0px 1px 15px;
  }
  .Updated-1-year-ago {    
    font-family: NotoSans;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #2e221e;
  }
  .CoffeSign-Sites-Services-Terms-and-Conditions {
    font-family: NotoSans;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #2e221e;
  }
  .tandc {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: justify;
    color: #4e4e56 !important;
  }
  .myheading{
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #383838;
  }
  .mymenu ul li {
    padding: 10px;
  }
  .social
  {
    padding: 8px;
    background: #dddddd63;
    border-radius: 75%;
    text-align: center;
    margin-right: 4px;
  }
</style>