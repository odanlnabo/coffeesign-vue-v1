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
        <p class="CoffeSign-Sites-Services-Terms-and-Conditions">CoffeSign Sites & Services Terms and Conditions</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.</p>
        <p class="tandc">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>
        <p class="tandc">
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
      </b-col>
      <b-col md="12">
        <p class="myheading">Cookies</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name's Privacy Policy.
        </p>
        <p class="tandc">
        Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies...</p>
      </b-col>
      
      <b-col md="12">
        <p class="myheading">License</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <ul>
          <li>Republish material from Website Name</li>
          <li>Sell, rent or sub-license material from Website Name</li>
          <li>Reproduce, duplicate or copy material from Website Name</li>
          <li>Redistribute content from Website Name</li>
        </ul>        
        <p class="tandc">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
        <p class="tandc">
        Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
        <p class="tandc">You warrant and represent that:
        </p>
      </b-col>
      <b-col md="12">
        <ul>
          <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
          <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
          <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</li>
          <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
        </ul>
        <p class="tandc">You hereby grant Company Name a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
      </b-col>

      <b-col md="12">
        <p class="myheading">Disclaimer</p>
      </b-col>
      <b-col md="12">
        <p class="tandc">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p class="tandc">
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
        <p class="tandc">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
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
  name: 'Terms',
  components: {
    CmsHeader,
  }
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