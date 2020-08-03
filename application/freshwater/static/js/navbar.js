//Register Navbar component
Vue.component('navbar-component-home', {
  template: ' <b-navbar toggleable="lg" type="light" variant="light"> <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <b-collapse id="nav-collapse" is-nav> <a href="/"> <b-img left src="/static/images/logo2.png" width=110%></b-img> </a> <b-navbar-nav> <b-nav-item href="/post"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to Rent OR Sell </b-button></b-nav-item> <b-nav-item href="/about"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About </b-button></b-nav-item> </b-navbar-nav> <!-- Right aligned nav items --> <b-navbar-nav class="ml-auto"> <b-nav-item href="#"> <b-button pill style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log in </b-button></b-nav-item> </b-navbar-nav> </b-collapse> </b-navbar> ',
})

/*
Vue.component('navbar-component', {
  template: ' <b-navbar toggleable="lg" type="light" variant="light"> <b-img left src="/static/images/logo2.png" width=110%></b-img>    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <b-collapse id="nav-collapse" is-nav><b-navbar-nav> <b-nav-item href="/post"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to Rent OR Sell </b-button></b-nav-item> <b-nav-item href="/about"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About </b-button></b-nav-item> </b-navbar-nav> <b-navbar-nav class="ml-auto"> <b-nav-form> <b-form-input name="search_string" list="input-list" id="input-with-list" placeholder="What are you looking for?" </b-form-input> <b-button class="my-2" type="submit" formaction="/query" type="submit"> <b-icon icon="search"></b-icon> </b-button> </b-nav-form> </b-navbar-nav><!-- Right aligned nav items --> <b-navbar-nav class="ml-auto"> <b-nav-item href="#"> <b-button pill style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log in / Sign up </b-button></b-nav-item> </b-navbar-nav> </b-collapse> </b-navbar> ', })
*/

Vue.component('navbar-component', {
	template: ' <b-navbar toggleable="lg" type="light" variant="light"> <b-navbar-toggle target="nav-collapse"></b-navbar-toggle><b-collapse id="nav-collapse" is-nav> <a href="/"> <b-img left src="/static/images/logo2.png" width=110%></b-img></a> <b-navbar-nav> <b-nav-item href="/post"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> Post to Rent OR Sell </b-button></b-nav-item> <b-nav-item href="/about"> <b-button pill variant="light" style="border: 1px solid; border-color: #e7e7e7;" class="m-0"> About </b-button></b-nav-item> </b-navbar-nav> <b-navbar-nav class="m-auto"> <b-nav-form> <!-- Search Text Field -->  <b-form-input name="search_string" class="col-md-auto" list="input-list" id="input-with-list" placeholder="What are you looking for?" style="min-width:20rem; margin-right: 1rem;"></b-form-input> <!-- Search Button --> <b-button class="my-2 my-sm-0 col-md-auto" formaction="/query" type="submit"> <b-icon icon="search"></b-icon> </b-button> </b-nav-form> </b-navbar-nav> <!-- Right aligned nav items --> <b-navbar-nav class="ml-auto"> <b-nav-item href="#"> <b-button pill style="border-color: #e7e7e7; background-color: #e7e7e7; color:black"> Log in </b-button></b-nav-item> </b-navbar-nav> </b-collapse> </b-navbar>', })
