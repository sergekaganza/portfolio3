import React from 'react';

import Card from '../components/Card';

import tinder from '../assets/images/tinder.jpg';
import serge from '../assets/images/serge.jpg';
import amazon from '../assets/images/amazon.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tinder image',
                    subTitle: 'Serge Kaganza',
                    imgSrc: tinder,
                    link: 'https://github.com/sergekaganza/tinderapp',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Serge Kaganza',
                    subTitle: 'Serge Kaganza',
                    imgSrc: serge,
                    link: 'https://github.com/sergekaganza/tinderapp',
                    selected: false
                },
                {
                    id: 2,
                    title: 'amazon',
                    subTitle: 'Cloning the most famous e-commerce website in React.js',
                    imgSrc: amazon,
                    link: 'https://github.com/sergekaganza/amazon-clone',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
            <div className="Carousel__cont">
                    {this.makeItems(this.state.items)}
                </div>
            </Container>
        );
    }

}

export default Carousel;