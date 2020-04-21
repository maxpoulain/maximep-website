import React from 'react';

function HeaderComponent() {
    return (
        <div className="container-fluid custom-header">
            <div className="row">
                <div className="offset-md-6 col-md-6">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#about">A propos</a>
                        </li>
                        <li>
                            <a href="/#education">Experiences</a>
                        </li>
                        <li>
                            <a href="/#blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default HeaderComponent;