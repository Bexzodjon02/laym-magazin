import React from 'react';
import img from './FrameLime_img.png'
const Navbar = () => {


  return (
    <>

      <nav class="navbar navbar-expand-lg ">
        <div className='nav-img'>
          <img src={img} alt="" />
        </div>
        <div class="container-fluid">
          <a class="nav-link" href="#"><i class="bi bi-telephone-fill me-2"></i>7756</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-geo-alt-fill"></i>  Магазины
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-telephone-fill me-2"></i>Зона доставки</a>

              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-clock-fill"></i>  17:00 - 17:45
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <a class="nav-link" aria-current="page" href="#">Шеф-лайм</a>
              <a class="nav-link" aria-current="page" href="#">Вакансии</a>
              <a class="nav-link" aria-current="page" href="#">Вопрос-ответ</a>
              <a class="nav-link" aria-current="page" href="#">Партнерам</a>
              <a class="nav-link" aria-current="page" href="#">Бонусная программа</a>
            </form>
          </div>
        </div>
      </nav>
      <div className='navbarr container-fluid d-flex  row'>
        <div className='col-12 col-md-6 d-flex'>
          <button className='navbar_btn'><i class="bi bi-search text-black"></i> Каталог</button>
          <div class="input-group flex-wrap">
            <input type="text" class="inp" placeholder="Купить молоко" aria-label="Username" aria-describedby="addon-wrapping" />
            <span class="input-group-text inp_icon" id="addon-wrapping"><i class="bi bi-search text-black"></i></span>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex navbar_right">
        <div className='d-flex'>
          <div className='persent'>%</div>
          <h5 className='mt-2 mx-1'>Скидки</h5>
          <i class="bi bi-chevron-down  down mt-1"></i>
        </div>
        <div className='person_card'>
          <h6 className='mt-2 mx-1'><i class="bi bi-person-fill person"></i> Кабинет</h6>
        </div>
        <div className='person_card'>
          <h6 className='mt-2 mx-1'><i class="bi bi-heart-fill"></i> Избранное</h6>
        </div>
        <div className='person_card'>
          <h6 className='mt-2 mx-1'><i class="bi bi-cart-fill"></i> Корзина</h6>
        </div>
        </div>
      </div>
    </>

  );
}

export default Navbar;
