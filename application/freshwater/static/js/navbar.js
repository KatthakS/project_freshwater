//Register Navbar component
Vue.component('navbar-component-home', {
  template: `
  <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav> <a href="/">
              <b-img left src="/static/images/Gator_logo_new.png" height=65% width=250%></b-img>
          </a>
          <b-navbar-nav>
              <b-nav-item href="/post">
                  <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to
                      Rent OR Sell </b-button>
              </b-nav-item>
              <b-nav-item href="/about">
                  <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About
                  </b-button>
              </b-nav-item>
          </b-navbar-nav> <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item>
                  <b-button pill id="show-btn" v-b-modal.modal-center
                      style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log In / Sign Up</b-button>
              </b-nav-item>
          </b-navbar-nav>
      </b-collapse>
      <b-modal id="modal-center" modal-header-close hide-footer>
          <b-tabs card>
              <b-tab title="Login" active>
                  <div class="d-block"> <template>
                          <div class="vue-template">
                              <form action="/login" method="POST" name="login_user_form">
                                  <div class="form-group"> <label>Email address</label> <input name="email" type="email"
                                          class="form-control form-control-lg" /> </div>
                                  <div class="form-group"> <label>Password</label> <input name="password" type="password"
                                          class="form-control form-control-lg" /> </div> <button type="submit"
                                      class="btn btn-dark btn-lg btn-block">Submit</button>
                              </form>
                          </div>
                      </template> </div>
              </b-tab>
              <b-tab title="Signup">
                  <div class="d-block"> <template>
                          <div class="vue-template">
                              <form action="/register" method="POST" name="register_user_form">
                                  <b-row>
                                      <b-col cols="12">
                                          <div>
                                              <b-form-group> </b-form-group>
                                          </div>
                                      </b-col>
                                  </b-row>
                                  <div class="form-group"> <label>Email address</label> <input name="email" type="email"
                                          class="form-control form-control-lg" /> </div>
                                  <div class="form-group"> <label>Password</label> <input name="password" type="password"
                                          class="form-control form-control-lg" /> </div>
                                  <div class="form-group pb-2">
                                      <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted"
                                          unchecked-value="not_accepted"> I accept the terms and use </b-form-checkbox>
                                  </div> <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>
                              </form>
                          </div>
                      </template> </div>
              </b-tab>
          </b-tabs>
      </b-modal>
  </b-navbar>
  `,
})

/*
Vue.component('navbar-component', {
  template: ' <b-navbar toggleable="lg" type="light" variant="light"> <b-img left src="/static/images/logo2.png" width=110%></b-img>    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <b-collapse id="nav-collapse" is-nav><b-navbar-nav> <b-nav-item href="/post"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to Rent OR Sell </b-button></b-nav-item> <b-nav-item href="/about"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About </b-button></b-nav-item> </b-navbar-nav> <b-navbar-nav class="ml-auto"> <b-nav-form> <b-form-input name="search_string" maxlenth="40" list="input-list" id="input-with-list" placeholder="What are you looking for?" </b-form-input> <b-button class="my-2" type="submit" formaction="/query" type="submit"> <b-icon icon="search"></b-icon> </b-button> </b-nav-form> </b-navbar-nav><!-- Right aligned nav items --> <b-navbar-nav class="ml-auto"> <b-nav-item href="#"> <b-button pill style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log in / Sign up </b-button></b-nav-item> </b-navbar-nav> </b-collapse> </b-navbar> ', })
*/

Vue.component('navbar-component', {
  template: `
  <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav> <a href="/">
              <b-img left src="/static/images/Gator_logo_new.png" height=65% width=250%></b-img>
          </a>
          <b-navbar-nav>
              <b-nav-item href="/post">
                  <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to
                      Rent OR Sell </b-button>
              </b-nav-item>
              <b-nav-item href="/about">
                  <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About
                  </b-button>
              </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="m-auto">
              <b-nav-form>
                  <!-- Search Text Field -->
                  <b-form-input name="search_string" class="col-md-auto" list="input-list" maxlength="40"
                      id="input-with-list" placeholder="What are you looking for?"
                      style="min-width:20rem; margin-right: 1rem;"></b-form-input>
                  <b-tooltip target="input-with-list" placement="bottom" triggers="hover" variant="primary"> Max. 40
                      Characters allowed! </b-tooltip> <!-- Search Button -->
                  <b-button class="my-2 my-sm-0 col-md-auto" formaction="/query/none" type="submit">
                      <b-icon icon="search"></b-icon>
                  </b-button>
              </b-nav-form>
          </b-navbar-nav> <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item>
                  <b-button pill id="show-btn" v-b-modal.modal-center
                      style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log In / Sign Up</b-button>
              </b-nav-item>
          </b-navbar-nav>
      </b-collapse>
      <b-modal id="modal-center" modal-header-close hide-footer>
          <b-tabs card>
              <b-tab title="Login" active>
                  <div class="d-block"> <template>
                          <div class="vue-template">
                              <form action="/login" method="POST" name="login_user_form">
                                  <div class="form-group"> <label>Email address</label> <input name="email" type="email"
                                          class="form-control form-control-lg" /> </div>
                                  <div class="form-group"> <label>Password</label> <input name="password" type="password"
                                          class="form-control form-control-lg" /> </div> <button type="submit"
                                      class="btn btn-dark btn-lg btn-block">Submit</button>
                              </form>
                          </div>
                      </template> </div>
              </b-tab>
              <b-tab title="Signup">
                  <div class="d-block"> <template>
                          <div class="vue-template">
                              <form action="/register" method="POST" name="register_user_form">
                                  <b-row>
                                      <b-col cols="12">
                                          <div> </div>
                                          <div class="form-group"> <label>Email address</label> <input name="email"
                                                  type="email"
                                                  class="form-control form-control-lg" /> </div>
                                      </b-col>
                                  </b-row>
                                  <div class="form-group"> <label>Password</label> <input name="password" type="password"
                                          class="form-control form-control-lg" /> </div>
                                  <div class="form-group">
                                      <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted"
                                          unchecked-value="not_accepted"> I accept the terms and use </b-form-checkbox>
                                  </div> <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>
                              </form>
                          </div>
                      </template> </div>
              </b-tab>
          </b-tabs>
      </b-modal>
  </b-navbar>
  `,
})


