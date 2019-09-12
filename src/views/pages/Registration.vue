<template>
  <div class="app flex-row align-items-center">
    <div class="container-fluid">
      <b-row class="justify-content-center">
        <b-col md="12">
          <b-card-group>
            <b-card no-body class="p-sm-4">
              <b-card-body>

                <h1>Sign Up Now!</h1>
                <p class="text-muted">Already have a account? <b-link  v-on:click="loginpage">Login here.</b-link></p>

                <div class="mb-5"></div>

                <b-form action="#" @submit.prevent="signUp">
                  <div class="mb-3">
                    <strong>Personal Information</strong>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" class="form-control" v-bind:class="{'input-error' : isError(form_data.email)}" id="email" name="email" placeholder="Email" v-model="form_data.email" />
                        <div v-if="isError(form_data.email)" class="error-text">Please input Email</div>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="password" class="form-control" v-bind:class="{'input-error' : isError(form_data.password)}" id="password" name="password" placeholder="Password" v-model="form_data.password" />
                        <div v-if="isError(form_data.password)" class="error-text">Password not match</div>
                      </div>
                    </div>
                    <div class="w-100"></div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="password" class="form-control" v-bind:class="{'input-error' : isError(form_data.confirm_pass)}" id="confirm_pass" name="confirm_pass" placeholder="Confirm Password" v-model="form_data.confirm_pass" />
                        <div v-if="isError(form_data.confirm_pass)" class="error-text">Password not match</div>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" v-bind:class="{'input-error' : isError(form_data.first_name)}" id="first_name" name="first_name" placeholder="First Name" v-model="form_data.first_name" />
                        <div v-if="isError(form_data.first_name)" class="error-text">Please input First Name</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" v-bind:class="{'input-error' : isError(form_data.last_name)}" id="last_name" name="last_name" placeholder="Last Name" v-model="form_data.last_name" />
                        <div v-if="isError(form_data.last_name)" class="error-text">Please input Last Name</div>
                      </div>
                    </div>   
                  </div> 

                  <div class="mb-3"></div>

                  <div class="mb-3">
                    <strong>Company & Job Title</strong>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <UserSelect v-bind:value="form_data.purpose" :items="['Purpose of using', 'My Personnel Use', 'My Business']" @changeValue="changePurposeValue" />
                    </div>
                  </div>

                  <div class="row" v-if="form_data.purpose != 'My Personnel Use'">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" id="company" name="company" placeholder="Company" v-model="form_data.company" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <UserSelect v-bind:value="form_data.employee"
                        :items="[
                          'Employee',
                          '0-5',
                          '6-10',
                          '11-20',
                          '21-50',
                          '51-100',
                          '101-300',
                          '301-1000',
                          'More then 1000']"
                        @changeValue="changeEmployeeValue" />
                    </div>
                    
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" class="form-control" id="job_title" name="job_title" placeholder="Job Title" v-model="form_data.title" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <UserSelect
                        v-bind:value="form_data.industry"
                        @changeValue="changeIndustryValue"
                        v-bind:items="[
                        'Select Industry',
                        'Accounting &amp; Tax Accounting',
                        'Business Services / Consulting Business Services',
                        'Construction - General Construction',
                        'Construction - Home Builder Real Estate - Construction',
                        'Debt Settlement Debt Settlement/Loan Modification',
                        'Education Education',
                        'Financial Services - Banking Banking',
                        'Financial Services - Credit Unions Credit Unions',
                        'Financial Services - Other Financial Services',
                        'Financial Services - Wealth &amp; Asset Management Wealth Management',
                        'Government - City Government - City',
                        'Government - County Government - County',
                        'Government - Federal Government - National',
                        'Government - State Government - State',
                        'Healthcare - Health Plans &amp; Payers Insurance - Health',
                        'Healthcare - Providers Healthcare - Providers',
                        'HR Staffing HR Staffing',
                        'Insurance - Agents / Brokers Insurance - Agency',
                        'Insurance - Carriers Insurance - Carriers',
                        'Legal Legal',
                        'Life Sciences - Medical Devices Life Sciences - Medical Devices',
                        'Life Sciences - Other Life Sciences - Other',
                        'Life Sciences - Pharmaceuticals Life Sciences - Pharmaceuticals',
                        'Life Sciences - Wholesale Distributors Life Sciences - Wholesale/Distributor',
                        'Manufacturing',
                        'Mortgage Broker Real Estate - Mortgage',
                        'Not For Profit',
                        'Real Estate - Agent Real Estate - Agent',
                        'Real Estate - Broker/Owner Real Estate - Broker/Owner',
                        'Real Estate - Commercial Real Estate - Commercial',
                        'Real Estate - Property Management Real Estate - Property Management',
                        'Retail Retail',
                        'Sports &amp; Entertainment Travel &amp; Leisure',
                        'Technology - General Technology',
                        'Technology - Startup Technology',
                        'Telecommunications',
                        'Other']"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>

                </b-form>
              </b-card-body>
            </b-card>

            <b-card no-body class="text-white py-5 d-md-down-none login-right">
              <b-card-body class="text-center">
                <div></div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import UserSelect from "@/components/UserSelect";

export default {
  name: 'Registration',
  components: {
    UserSelect
  },
  data() {
    return {
      showPassword: false,
      form_data: {
        error_flag: false,
        email: "",
        password: "",
        confirm_pass: "",

        first_name: "",
        last_name: "",
        purpose: "Purpose of using",
        company: "",
        employee: "Employee",
        title: "",
        industry: "Select Industry"
      }
    }
  },
  methods: {
    changePurposeValue(e) {
      this.form_data.purpose = e;
    },
    changeEmployeeValue(e) {
      this.form_data.employee = e;
    },
    changeIndustryValue(e) {
      this.form_data.industry = e;
    },
    signUp() {
      console.log("Registered!");
    },
    isError(value) {
      return (
        this.form_data.error_flag &&
        (value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0))
      );
    },

    loginpage() {
      this.$router.push({ name: 'Login' })
    },
  }
}
</script>

<style scoped>
  .login-right {
    background-image: url(/img/add_doc/Group_71@3x.png);
    background-size: cover;
  }
</style>