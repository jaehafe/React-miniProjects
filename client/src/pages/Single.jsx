import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          molestias?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error
          nihil deleniti perferendis, quas iste eos corrupti distinctio unde
          provident reiciendis nesciunt illum quod sint beatae ducimus deserunt
          a dolorum velit eaque. Cum earum voluptatum odit itaque labore. Omnis
          illum blanditiis iure facilis culpa corrupti rerum ex ratione, aut
          eius sint, quaerat in nulla repudiandae aliquam voluptates unde
          assumenda labore saepe, sed temporibus! Sunt modi dolor libero sit
          aliquam consectetur recusandae ducimus ullam incidunt tempore? Non
          quae et, dolorum atque, labore debitis consectetur laborum modi ullam
          minus magni sint pariatur aspernatur mollitia quibusdam itaque nostrum
          officia tempore enim, laboriosam suscipit.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
