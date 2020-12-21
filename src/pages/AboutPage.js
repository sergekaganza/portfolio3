import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Serge I'm a Front-End Developer specialising in React.</p>

            <p>Discovering new libraries React offers is my favourite.<br/> This portfolio is made using React Context, I believe it offers a dynamic and lightweight code.

            </p> <p> I m fully aware Web Development is a matter of lifetime learning. <br/>At the sametime it will provide me a secure position doing what I love: coding complex problems in a simple way.

            </p>
            </Content>
        </div>
    );

}

export default AboutPage;