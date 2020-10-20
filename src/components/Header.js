import React from 'react';

import './Header.scss';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <a href="/" className="logo">
                <img src="https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" width="120px" alt="logo" />
            </a>
            <nav>
                <ul>
                    <li><a href="#">홈</a></li>
                    <li><a href="#">TV 프로그램</a></li>
                    <li><a href="#">영화</a></li>
                    <li><a href="#">최신 콘텐츠</a></li>
                </ul>
            </nav>
            <div className="search_box">
                <FaSearch />
            </div>
            {/* <div style={{clear:'both'}}></div> */}
        </header>
    )
}

export default Header;