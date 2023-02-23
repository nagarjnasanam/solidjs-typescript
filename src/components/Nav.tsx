// import logo from "../assets/Images/logo.svg";
import {Routes,Route,A} from '@solidjs/router'
function Nav() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm bg-body-tertiary"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src='https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768.jpg' alt="" width="50" height="44" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav ms-auto mb-2 mb-lg-0"
             
            >
            
              <li class="nav-item mx-3">
                <A
                  class="nav-link active "
                  aria-current="page"
                  href="/search"
                >
                  01.Search
                  {/* <p class=" bg-dark">.</p> */}
                </A>
              </li>
              <li class="nav-item mx-3 ">
                <A class="nav-link " href="users">
                  02.Users
                </A>
              </li>
              <li class="nav-item mx-3">
                <A class="nav-link " href="meal">
                  03.Meal
                </A>
              </li>
              <li class="nav-item mx-3">
                <A class="nav-link " href="contact">
                  04 Contact
                </A>
              </li>
              <li class="nav-item mx-3">
                <button class="btn btn-primary">Nagarjuna</button>
              </li>
            </ul>
            {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            {/* <div>
        <button>Hi</button>
      </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
